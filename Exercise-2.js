var name='Noma';
var role='Tabib';

if(role==null)
{
  console.log('"Halo ' + name +', Pilih peranmu untuk memulai game!"');
}
else{
	console.log('"Selamat datang di Dunia Proxytia, '+name+'"')
	if(role==='Ksatria')
	{
	  console.log('"Halo Ksatria ' + name +', kamu dapat menyerang dengan senjatamu!"');
	}
	else if(role==='Tabib')
	{
	  console.log('"Halo Tabib ' + name +', kamu akan membantu temanmu yang terluka."');
	}
	else if(role==='Penyihir')
	{
	  console.log('"Halo Penyihir ' + name +', ciptakan keajaiban yang membantu kemenanganmu!"');
	}
}
