//link pseudocode :
//https://github.com/ErvanAdetya/h8-p0-w2/blob/master/pseudocode.md
var board = [['1','2','3'],['4','5','6'],['7','8','9']];
var winner=null;
var player1=true;
var player2=false;
var token='O';
var turnCount=1;

function checkWinCondition() {
  display();
  if(turnCount<10) {
    for (var i=0; i<3; i++) {
      if(board[i][0]==board[i][1] && board[i][1]==board[i][2]) {
        winner=board[i][0];
        win();
        return;
      }
      else if(board[0][i]===board[1][i] && board[1][i]===board[2][i]) {
        winner=board[0][i];
        win();
        return;
      }
      else if(board[0][0]===board[1][1] && board[1][1]===board[2][2]) {
        winner=board[0][0];
        win();
        return;
      }
      else if(board[0][1]===board[1][1] && board[1][1]===board[0][2]) {
        winner=board[0][1];
        win();
        return;
      }
    }
  }
  else {
    win();
    return;
  }
}

function win() {
  if(winner==='O') {console.log('Congratulations Player1 is the Winner.');}
  else if(winner==='X') {console.log('Congratulations Player2 is the Winner.');}
  else {console.log('Draw');}
  turnCount=0;
  board = [['1','2','3'],['4','5','6'],['7','8','9']];
}

function display() {
  console.log('-------------');
  console.log('| '+board[0][0]+' | '+board[0][1]+' | '+board[0][2]+' |');
  console.log('-------------');
  console.log('| '+board[1][0]+' | '+board[1][1]+' | '+board[1][2]+' |');
  console.log('-------------');
  console.log('| '+board[2][0]+' | '+board[2][1]+' | '+board[2][2]+' |');
  console.log('-------------');
}

function turn(){
  if(turnCount<10) {AIeasy();}
  checkWinCondition();
  if(winner===null) {changeTurn();}
  return;
}

function changeTurn() {
  if(player1===true){
    token='X';
    player1=false;
    player2=true;
    turnCount++;
    return;
  }
  else {
    token='O';
    player1=true;
    player2=false;
    turnCount++;
    return;
  }
}

function AIeasy () {
  var random1 = Math.floor(Math.random()*3);
  var random2 = Math.floor(Math.random()*3);
  var index=((random1+1)*random1)+((random1===1)?(random2+2):(random2+1));
  if (board[random1][random2]!=='X' && board[random1][random2]!=='O') {
    board[random1][random2]=token;
    if(player1===true) {
      console.log('Player 1 turn.\n\n\nToken '+token+' placed in index '+index+'.');
    }
    else {
      console.log('Player 2 turn.\n\n\nToken '+token+' placed in index '+index+'.');
    }
    return;
  }
  else {
    AIeasy();
    return;
  }
}


display();
while(winner===null||(turnCount!==0 && turnCount<11)) {
  turn();
}
