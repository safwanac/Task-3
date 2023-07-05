function CheckEvenOrOdd (val){

    if(val % 2===0){
      return  console.log("The number is even : "+val);

    }else{
      return   console.log("The number is odd : "+val);
    }

}

var val = 25

let result = CheckEvenOrOdd(val)

console.log(result);