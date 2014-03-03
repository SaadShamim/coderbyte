function LetterChanges(str) { 
  str = str.split('');
  Vowels = ['a','e','i','o','u'];
  isVowel = false;
  
  for(i = 0; i< str.length; i++){
    
    if(!str[i].match(/^[A-Za-z ]+$/)){
      continue;
    }
    
    if(str[i] == " "){
      continue;
    }
    
    str[i] = String.fromCharCode(str[i].charCodeAt()+1);
    
    for(j=0;j<Vowels.length;j++){
      if(str[i] == Vowels[j]){
        isVowel = true;
        break;
      }
    }
    
    if(isVowel){
      str[i] = str[i].toUpperCase();
      isVowel = false;
    }
    
  }
  str = str.join('');
  return str;         
}
