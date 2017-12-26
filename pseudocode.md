SIMPAN 1,2,3 pada 'baris1'
SIMPAN 4,5,6 pada 'baris2'
SIMPAN 7,8,9 pada 'baris3'
SIMPAN 'baris1','baris2','baris3' pada 'board'
SIMPAN 'turnCount' dengan isi 0;
SIMPAN 'token' dengan isi 'O'
SIMPAN 'winner'

FUNCTION 'checkWinCondition'
	jalankan FUNCTION 'display'
		IF 'turnCount' kurang dari 10
			FOR (var i=0; i<3; i++) {
				IF 'board[i][0]' berisi sama dengan isi 'board[i][1]' DAN 'board[i][1]' berisi sama dengan isi 'board[i][2]'
					'winner' sama dengan 'board[i][0]'
					jalankan FUNCTION 'win'
					EXIT FUNCTION
				END IF
				IF 'board[0][i]' berisi sama dengan isi 'board[1][i]' DAN 'board[1][i]' berisi sama dengan isi 'board[2][i]'
					'winner' sama dengan 'board[0][i]'
					jalankan FUNCTION 'win'
					EXIT FUNCTION
				END IF
				IF 'board[0][0]' berisi sama dengan isi 'board[1][1]' DAN 'board[1][1]' berisi sama dengan isi 'board[2][2]'
					'winner' sama dengan 'board[0][0]'
					jalankan FUNCTION 'win'
					EXIT FUNCTION
				END IF
				IF 'board[0][1]' berisi sama dengan isi 'board[1][1]' DAN 'board[1][1]' berisi sama dengan isi 'board[0][2]'
					'winner' sama dengan board[0][1];
					jalankan FUNCTION 'win'
					EXIT FUNCTION
				END IF
		ELSE
			jalankan FUNCTION 'win'
			EXIT FUNCTION
		END ELSE
END FUNCTION


FUNCTION 'win'
	IF 'winner' berisi sama dengan 'O'
		TAMPILKAN 'Congratulations Player1 is the Winner.'
	END IF
	IF 'winner' berisi sama dengan 'X'
		TAMPILKAN 'Congratulations Player2 is the Winner.'
	END IF
	ELSE 
		TAMPILKAN 'Draw'
	END ELSE
  turnCount sama dengan 0;
  board sama dengan [['1','2','3'],['4','5','6'],['7','8','9']];
END FUNCTION
}


FUNCTION 'turn'
	IF 'turnCount' lebih kecil dari10
		jalankan FUNCTION 'AIeasy'
	jalankan FUNCTION 'checkWinCondition'
	IF 'winner' tidak sama dengan kosong
		jalankan FUNCTION 'changeTurn'
	EXIT FUNCTION
END FUNCTION


FUNCTION 'display'
  TAMPILKAN isi 'board' dalam bentuk kotak 3x3
END FUNCTION


FUNCTION 'AIeasy'
	SIMPAN nilai random 0 sampai 9 pada 'random1'
	SIMPAN nilai random 0 sampai 9 pada 'random2'
	SIMPAN 'index' dengan nilai (('random1' + 1) x 'random1')+ (JIKA ('random1' sama dengan 1) JIKA BENAR ('random2' + 2) JIKA SALAH ('random2 + 1)
	IF 'board['random1']['random2']' berisi tidak sama dengan 'X' dan 'board['random1']['random2']' berisi tidak sama dengan 'Y'
		'board[random1][random2]' sama dengan 'token'
		IF 'player1' bernilai true
			TAMPILKAN "Player1 turn. Token 'token' placed in index 'index'."
		END IF
		ELSE
			TAMPILKAN "Player2 turn. Token 'token' placed in index 'index'."
		END ELSE
		EXIT FUNCTION
	END IF
	ELSE
		jalankan FUNCTION 'AIeasy'
		EXIT FUNCTION
	END ELSE
END FUNCTION


FUNCTION 'changeTurn'
	IF 'player1' bernilai sama dengan true
		token sama dengan 'X'
		player1 sama dengan false;
		player2 sama dengan true;
		turnCount ditambah dengan 1
		EXIT FUNCTION
	END IF
	ELSE
		token sama dengan 'O'
		player1 sama dengan true;
		player2 sama dengan false;
		turnCount ditambah dengan 1
		EXIT FUNCTION
	END ELSE
END FUNCTION


jalankan FUNCTION 'display'
WHILE 'winner' berisi kosong ATAU ('turnCount' berisi 0 DAN 'turnCount' kurang dari 11)
  jalankan FUNCTION 'turn'
END WHILE
