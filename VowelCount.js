function VowelCount(str) { 
 
  var count = str.match(/[aeiou]/gi);

  if(count){
    return count.length;
  } else {
    return 0; 
  }
         
}
