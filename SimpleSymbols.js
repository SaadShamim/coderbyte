function SimpleSymbols(str) { 
  str = str.split('');
  
  beforeLetter = false;
  afterLetter = false;
  letter = false;
  
  if(str[0].match(/^[A-Za-z ]+$/)){
    return false;
  }
  
  for(i=0;i<str.length;i++){
    if(str[i].match(/^[A-Za-z ]+$/)){
      if(!letter){
        letter = true;
        continue;
      }
      if(afterLetter){
        letter = true;
        afterLetter = false;
        continue;
      } else {
        return false;
      }
      
    }
    if((!letter) && str[i] == '+'){
      beforeLetter = true;
    }else if((letter) && str[i] == '+'){
      afterLetter = true;
    }
  }
  
  if(letter && beforeLetter && afterLetter){
    return true;
  } else if (!letter) {
    return true;
  }
  
  return false; 
}
