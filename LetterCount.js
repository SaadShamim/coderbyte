function LetterCount(str) { 

  str = str.split(' ');
  maxCount = 0;
  maxIndex = -1;
  
  for(i=0;i<str.length;i++){
    
    letters = str[i].split('').sort();
    letterCount = 0;
    for(j=0;j<letters.length-1;j++){
      if(letters[j+1] == letters[j]){
        letterCount++;
        if(letterCount > maxCount){
          maxCount = letterCount;
          maxIndex = i;
        }
        continue;
      }
      letterCount = 0;
    }
    
  }
  
  if(maxIndex < 0){
    return -1;
  }
  
  return str[maxIndex]; 
         
}
