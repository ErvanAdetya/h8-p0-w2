//TUGAS 1
function shoutOut() {
	var kalimat = 'Halo Function!';
	return kalimat;
}
console.log(shoutOut());

//TUGAS 2
function calculateMultiply(num1, num2) {
	var res=num1*num2;
	return res;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


//TUGAS 3
function processSentence(name, age, address, hobby) {
	var kalimatbaru = 'Nama saya ' + name + ',umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
	return kalimatbaru;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
