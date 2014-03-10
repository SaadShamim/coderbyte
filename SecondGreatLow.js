function SecondGreatLow(arr) { 
  arr = arr.sort(function(a,b){
    return a-b;
  });
  
  min = arr[0];
  max = arr[arr.length-1];
  
  for(i=0;i<arr.length;i++){
    if(arr[i] > min){
      min = arr[i];
      break;
    }
  }
  
  for(i=arr.length-1;i>=0;i--){
    if(arr[i] < max){
      max = arr[i];
      break;
    }
  }
  
  return min + " " + max;
         
}
