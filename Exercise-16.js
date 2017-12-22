var board = [['1','2','3'],['4','5','6'],['7','8','9']];
var winner=null;
var nick1='player1';
var nick2='player2';
var player1=true;
var player2=false;
var memo1=[['',''],['',''],['',''],['','']];
var token='O';
var turnCount=1;
var boxIndex;
var gameMode=0;
//board[1][1]='X';
//console.log(board);

function wichBox(boxIndex) {
  switch (boxIndex) {
    case 1 : board[0][0]=token;
    case 2 : board[0][1]=token;
    case 3 : board[0][1]=token;
    case 4 : board[1][0]=token;
    case 5 : board[1][1]=token;
    case 6 : board[1][2]=token;
    case 7 : board[2][0]=token;
    case 8 : board[2][1]=token;
    case 9 : board[2][2]=token;
    default : console.log('Nomor box salah');
  }
}

function checkWinCondition() {
  for (var i=0; i<3; i++) {
    if(board[0][i]!==null && board[i][0]==board[i][1] && board[i][1]==board[i][2]) {
      winner=board[i][0];
      win();
      return;
    }
    else if(board[0][i]!==null && board[0][i]===board[1][i] && board[1][i]===board[2][i]) {
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
    else if(turnCount===10) {
      turnCount=0;
      display();
      console.log('Draw');
      return;
    }
  }
}

function win() {
  turnCount=0;
  display();
  //console.log(board.indexOf('X'));
  console.log('Congratulations: '+ winner);
  winner=null;
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
  console.log('');
  console.log('');
}

function turn(){
  if(turnCount>0 && turnCount<10) {
    if(player1===true){
      display();
      console.log(nick1+' turn '+turnCount);
      AIeasy();
      changeTurn();
      checkWinCondition();
      return;
    }
    else if(player1===false) {
      display();
      console.log('player2 turn '+turnCount);
      AIeasy();
      changeTurn();
      checkWinCondition();
      return;
    }
  }
  else {
    console.log(turnCount);
    console.log('Mulai?');
    return;
  }
}

function changeTurn() {
  if(player1===true){
    token='X';
    player1=false;
    player2=true;
    turnCount++;
    return
  }
  else {
    token='O';
    player1=true;
    player2=false;
    turnCount++;
    return
  }
}

function AIeasy () {
  var random1 = Math.floor(Math.random()*3);
  var random2 = Math.floor(Math.random()*3);
  if (board[random1][random2]!=='X' && board[random1][random2]!=='O') {
    //console.log(random1,random2);
    board[random1][random2]=token;
    return;
  }
  else {
    AIeasy();
    return;
  }
}

function AI() {
  if(turnCount===1) {board[1][1]=token;}
  else if(turnCount===3 && Math.abs(x-y)===1) {
    if(x===2 || y==2) {board[0][0]=token; memo1[0]=[0,0];}
    else if(x===0) {board[2][0]=token; memo1[0]=[2,0];}
    else if(y===0) {board[0][2]=token; memo1[0]=[0,2];}
  }
}

function selectGame(gameMode) {
  gameMode=prompt('Select Game Mode : \n1. Player 1 VS Com\n2.Player 1 VS Player 2\n3. Com VS Com');
  switch (gameMode) {
    case 1 : 
      nick1=prompt('Enter your nickname');
      break;
    case 2 :
      nick1=prompt('Enter Player1 nickname');
      nick2=prompt('Enter Player2 nickname');
      break;
    case 3 :
      while(turnCount!==0) {
        turn();
      }
      break;
  }
}

while(turnCount!==0) {
  turn();
}
selectGame(gameMode);
