function LongestWord(sen) { 

  wordArray = sen.split(' ');
  sen = "";
  for(i=0;i<wordArray.length;i++){
    if(wordArray[i].length > sen.length){
      if(wordArray[i].match(/^[A-Za-z ]+$/)){
        sen = wordArray[i];
      }
    }
  }
  

 return sen;         
}
