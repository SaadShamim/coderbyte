function TimeConvert(num) { 

  number = Math.floor(num/60);
  remainder = num % 60;
  
  num = number + ":" + remainder;

  return num; 
         
}
