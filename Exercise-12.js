function balikString(kata) {
  var katabaru='';
  //console.log(kata[kata.length-1]);
  
  for(i=0;i<kata.length; i++) {
    katabaru=katabaru+kata[(kata.length-1)-i];
  }
  return katabaru;
}


var kata='hello world!'
console.log(balikString(kata));
