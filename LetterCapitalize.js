function LetterCapitalize(str) { 
  str = str.split('');
  str[0] = str[0].toUpperCase();
  for(i=1;i<str.length;i++){
    if(str[i-1] == " "){
      str[i] = str[i].toUpperCase();
    }
  }
  str = str.join("");
  return str; 
}
