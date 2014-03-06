function ABCheck(str) { 

  str = str.split('');
  var distance = -1;
  
  for(i=0;i<str.length;i++){
    if(str[i] == 'a'){
      distance = 0;
      continue;
    }
    if((distance >= 0) && (str[i].match(/^[A-Za-z ]+$/))){
      distance++;
    }
    if((distance == 4) && (str[i] == 'b')){
       return true;
    }
  }
  
  return false; 
         
}
