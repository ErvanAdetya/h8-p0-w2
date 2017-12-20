var nama='Ervan';
var role='Tabib';

var tahunLahir=1993;
var umur=2017-tahunLahir;
var playerHealth=tahunLahir*Math.random();
var monsterHealth=tahunLahir*Math.random();
var kodeMonster=Math.floor(Math.pow(100, Math.random()));

console.log('halo '+nama+' '+role);

if(nama==null) {
	role='Kacung';
}

else if(role==null)
{
  console.log('"Halo ' + nama +', Pilih peranmu untuk memulai game!"');
}
else{
	console.log('"Selamat datang di Dunia Proxytia, '+nama+'"')
	if(role==='Ksatria')
	{
	  console.log('"Halo Ksatria ' + nama +', kamu dapat menyerang dengan senjatamu!"');
	}
	else if(role==='Tabib')
	{
	  console.log('"Halo Tabib ' + nama +', kamu akan membantu temanmu yang terluka."');
	}
	else if(role==='Penyihir')
	{
	  console.log('"Halo Penyihir ' + nama +', ciptakan keajaiban yang membantu kemenanganmu!"');
	}
}

for(i=0; i<tahunLahir; i++) {
	if(i%umur===0) {
		console.log(role+' '+nama+' menyerang monster!');
		monsterHealth-=umur;
	}
	else if(i%kodeMonster===0) {
		console.log('monster menyerang '+ role +' '+nama+'!');
		playerHealth-=kodeMonster;
	}
	else if(i%umur===0 && i%kodeMonster===0) {
		console.log('Health keduanya bertambah');
		playerHealth+=kodeMonster;
		monsterHealth+=umur;
	}
}
if(playerHealth>monsterHealth) {
	console.log('Selamat, '+role+' '+nama+' memenangkan pertarungan!');
}
else if(playerHealth<monsterHealth) {
	console.log('Sayang sekali, '+role+' '+nama+' dikalahkan monster...');
}
