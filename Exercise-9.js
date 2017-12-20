//TUGAS 1
var nama='Ervan';
var angkaPembilang=10;
var angkaPenyebut=5;
var hasilBagi=angkaPembilang/angkaPenyebut;
console.log('Halo '+nama+', '+angkaPembilang+' dibagi '+angkaPenyebut+' adalah sama dengan ' + hasilBagi);

//TUGAS 2
var alas=10;
var tinggi=5;
var luas=alas*tinggi/2;
console.log('Luas Segitiga: '+luas);

//TUGAS 3
var year=1892;
if(year%4===0){
	if(year%100!==0){
		console.log(year+' adalah tahun kabisat');	
	}
	else {
		console.log(year+' adalah bukan tahun kabisat');
	}
}
else {
		console.log(year+' adalah bukan tahun kabisat');
}
