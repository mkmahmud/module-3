//  String 
// LowerCase and UpperCase
const mynae = 'Mahmudul Hasan MK';
const mysecn = 'Mahmudul Hasan mk';

if(mynae.toLowerCase() === mysecn.toLowerCase()){
    // console.log(true);
}else{
    // console.log(false);
}

//  Includes, IndexOf, StartEith, EndWoth

const pragraph = 'Cow is animal, Cows have 4 legs. Cow can swiming in river or canel.';
const search = pragraph.includes('a'); 
const index = pragraph.indexOf('4');
const start = pragraph.startsWith('C');
const end = pragraph.endsWith('.');

// console.log(end);


// Split, Slice, substring, trim, join
const poem = 'Twinkel twinkel little star. How I wonder what you are. Up above the world so high. Like a diamond in the sky';
const poemArray = [
    'Twinkel twinkel little star',
    'How I wonder what you are',
    'Up above the world so high',
    ' Like a diamond in the sky'
];

const split = poem.split(' ');
const slice = poem.slice(10, 20);
const substring = poem.substring(2,5);
const trim = poem.trim();
const join = poemArray.join('--------');
// console.log(join);


// Math 

const power = Math.pow(2,5);
const absolute = Math.abs(30 -55);
const round = Math.round(9.48793);
const ceil = Math.ceil(9.989889);
const floor = Math.floor(9.97564);
const max = Math.max(10,11,90,65,440);
// console.log(max);

function minNum(num1,num2,num3){
    const min = Math.min(num1,num2,num3);
    return min;
}

var minnumfunction = minNum(30, 90, 20);
// console.log(minnumfunction);


// Reverse string 

function reverseString(value){
    // const string = value;
    const convertArray = value.split(' ');
    const arayLength = convertArray.length - 1;
    const newArray = [];
    for(let i = arayLength; i >= 0; i--){
        newArray.push(convertArray[i]);
    }
   return newArray;
}


const mystring = 'I am Mahmudul Hasan MK';
const changeValue = reverseString(mystring);
// console.log(changeValue);


const number = -78; 
const answer = Math.abs(number); 
// console.log(answer);


function myfunction(one, tow){
    return one+tow;
}

console.log(myfunction(1,2));

