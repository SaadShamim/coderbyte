function NumberAddition(str) { 

  str = str.split('');
  var number = "";
  var total = 0;
  
  for(i=0;i<str.length;i++){
    if(!isNaN(str[i]) && str[i] != " "){
      if(number != ""){
        number = number.concat(str[i]);
        continue;
      }
      
      number = str[i].toString();

    } else {
      if(number == ""){
        continue;
      }
      total += parseInt(number);
      number = "";
    }
  }
  
  if(number != ""){
    total += parseInt(number);
  }
  
  return total; 
         
}
