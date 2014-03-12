function DashInsert(num) { 

  num = num.toString().split('');
  
  for(i=0;i<num.length-1;i++){
    if(num[i] % 2 == 0){
      continue;
    }

    if(num[i+1] % 2 == 0){
      continue;
    }
    num.splice(i+1,0,"-");
    i++;
  }

  num = num.join('');

  return num;  
         
}
