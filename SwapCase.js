function SwapCase(str) { 

  str = str.split('');
  for(i=0;i<str.length;i++){
    if(str[i] == str[i].toUpperCase()){
      str[i] = str[i].toLowerCase();
      continue;
    }
    
    str[i] = str[i].toUpperCase();
  }
  str = str.join('');
  
  return str;       
}
