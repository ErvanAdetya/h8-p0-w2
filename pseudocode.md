SIMPAN 1,2,3 pada 'baris1'
SIMPAN 4,5,6 pada 'baris2'
SIMPAN 7,8,9 pada 'baris3'
SIMPAN 'baris1','baris2','baris3' pada 'board'
SIMPAN 'turnCount' dengan isi 0;
SIMPAN 'token' dengan isi 'O'

FUNGSI 'AIeasy'
	SIMPAN nilai random 0 sampai 9 pada 'random1'
	SIMPAN nilai random 0 sampai 9 pada 'random2'
	JIKA isi 'board[random1][random2]' tidak sama dengan 'X' dan 'board[random1][random2]' tidak sama dengan 'Y'
		'board[random1][random2]' sama dengan 'token'
		keluar FUNGSI
	END IF
	ELSE
		jalankan FUNGSI 'AIeasy'
		keluar FUNGSI
	END ELSE
END FUNGSI

FUNGSI 'tukarGiliran' 
	JIKA giliran

WHILE 'turnCount' lebih kecil sama dengan 8
	TAMPILKAN isi 'board' menjadi tampilan box 3x3
		IF
		
			
