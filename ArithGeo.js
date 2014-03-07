function ArithGeo(arr) { 

  diff = -1;
  
  for(i=0;i<arr.length-1;i++){
    if((diff > -1) && (diff != arr[i+1] - arr[i])) {
      diff = -1;
      break;
    }
    diff = arr[i+1] - arr[i];
  }
  
  if(diff != -1){
    return "Arithmetic";
  }
  
  diff = -1;
  
  for(i=0;i<arr.length-1;i++){
    if((diff > -1) && (diff != arr[i+1] / arr[i])) {
      diff = -1;
      break;
    }
    diff = arr[i+1] / arr[i];
  }
  
  if( diff != -1){
    return "Geometric";
  }
  
  return -1;
         
}
