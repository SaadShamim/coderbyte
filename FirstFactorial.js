function FirstFactorial(num) { 

  // code goes here
  if(num == 1){
    return 1;
  }
  num = num * FirstFactorial(num-1);
  return num; 
         
}
