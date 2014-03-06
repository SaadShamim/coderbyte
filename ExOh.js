function ExOh(str) { 

  var count = 0;
  
  str = str.split('');
  
  for(i=0;i<str.length;i++){
    if(str[i] == 'x') {
      count++;
      continue;
    }
    count --;
  }
  
  if(count != 0){
    return false;
  }
  
  return true; 
         
}
