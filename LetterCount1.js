function LetterCountI(str) { 

  str = str.split(' ');
  
  maxWord = "";
  maxCount = 0;
    
  for(i=0;i<str.length;i++){
    word = str[i].split('').sort();
    charCount = 0;
    lastChar = "";
    for(j=0;j<word.length;j++){
      if(lastChar == word[j]){
        charCount++;
      } else {
        lastChar = word[j];
        charCount = 0;
      }
      if(charCount > maxCount) {
        maxWord = str[i];
        maxCount = charCount;
      }
    }
  }
  
  if(maxWord == ""){
    return -1;
  }
  
  return maxWord;         
}
