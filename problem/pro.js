
// Inch to Feet 

function InchtoFeet(Inch){

    const totalFeet = Inch / 12;
    return totalFeet;
}

const feet = InchtoFeet(69);
// console.log(feet);


//  Km to Miles

function kmToMiles(km){
    const totalMiles = 0.62137 * km;
    return totalMiles;
}

const miles = kmToMiles(10);
// console.log(miles);



// Find Odd and Even and Odd sum;

function oddEven(oddEvenNums){

    let totalOddSum = 0;

  for(let i = 0; i < oddEvenNums.length; i++){
    const index = i;
    const element = oddEvenNums[index];
    if(element % 2 === 0){
        // console.log(element);
        totalOddSum += element;
    }
  }
  // console.log(totalOddSum);
}

var numbers = [20, 98, 22, 45,19, 23, 33, 45, 67, 90, 88, 76, 39];
oddEven(numbers);

// console.log(20+98+22+90+88+76);


//  Factorial 

function fact(factNum){
  let factInt = 1;
  for(let i = 1; i <= factNum; i++){
    factInt *= i;
  }
  return factInt;
} 

var finalFact = fact(9);
// console.log(finalFact);


// Hour to Minutes

function hourToMin(hour){
  const minutes = hour * 60;
  return minutes;
}

function minToSec(minutes){
  const secound = minutes * 60;
  return secound;
}

function secToMinToHour(secound){
  const hour = ( secound / 60) / 60;
  return hour;
}

const minute = hourToMin(4);
const secound = minToSec(minute);
const hour = secToMinToHour(secound);
// console.log(hour);


// Length Convator 

function convator(value, form, to){
  if(form ===  'inch' && to === 'feet'){
       const inchFeet = value/12;
       return inchFeet; 
  }else if(form ===  'feet' && to === 'inch'){
    const feetInch = value*12;
    return feetInch;
  }
}

const myvalue = convator(5,'feet','inch');
// console.log(myvalue);


// Finction that reverse an array 


function arrayReverse(array){
  let length = array.length - 1;
  let newArray = [];
  for(var i = length; i >= 0; i-- ){
    newArray.push(array[i]);
  }
  return newArray; 
}

const array  = [10,24,43,22,42,754,12,48,25,30,12,100,200,300];
const reverse = arrayReverse(array);
console.log(reverse);