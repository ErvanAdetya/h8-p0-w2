//TUGAS 1
var total=0;
for(i=0; i<100; i++) {
	if(i%2!==0) {
		total=total+i;
	}
	else if(i%2===0) {
		total=total-i;
	}
}
console.log(total);


//TUGAS 2
var pagar='';
for (i=0; i<10; i++) {
	for(ii=0; ii<10; ii++) {
		pagar=pagar+'#';
	}
	console.log(pagar);
	pagar='';
}


//TUGAS 3
var bintang='';
for(i=0; i<10; i++) {
	for(ii=0; ii<i; ii++) {
		bintang=bintang+'*';
	}
	console.log(bintang);
	bintang='';
}
