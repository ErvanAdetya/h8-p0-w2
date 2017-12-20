function dataHandling2(input) {
  input.splice(1,1,'Roman Alamsyah Elsharawy');
  input.splice(2,1,'Provinsi Bandar Lampung');
  input.splice(4,1,'Pria','SMA Internasional Metro')
  console.log(input);
  var res=input[3].split("/");
  var bulan=Number(res[1]);
   switch(bulan) {
  	case 1: {bulan='Januari'; break;}
  	case 2: {bulan='Februari'; break;}
  	case 3: {bulan='Maret'; break;}
  	case 4: {bulan='April'; break;}
  	case 5: {bulan='Mei'; break;}
  	case 6: {bulan='Juni'; break;}
  	case 7: {bulan='Juli'; break;}
  	case 8: {bulan='Agustus'; break;}
  	case 9: {bulan='September'; break;}
  	case 10: {bulan='Oktober'; break;}
  	case 11: {bulan='November'; break;}
  	case 12: {bulan='Desember'; break;}
  }
  console.log(bulan);
  var urut=res.sort(function(a,b){return b-a});
  console.log (urut);
  //console.log(res.sort());
  console.log(res.join('-'));
  if(input[1].length>15) {
    console.log(input[1].slice(0,14));
  }
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
