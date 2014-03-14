function MeanMode(arr) { 

  var mean;
  var mode;
  var total = 0;
  var occurrence = {};
  var max = 0;
  
  for(i=0;i<arr.length;i++){
    if(occurrence[arr[i]] == null){
      occurrence[arr[i]] = 1;
      if(max == 0){
        mode = arr[i];
        max = 1;
      }
    } else {
      occurrence[arr[i]]++;
      if(occurrence[arr[i]] > max){
        mode = arr[i];
        max = occurrence[arr[i]];
      }
    }
    total += arr[i];
  }
  mean = total/arr.length;
  if(mean == mode) {
    return 1;
  }
  return 0;
         
}
