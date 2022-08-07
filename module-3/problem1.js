// Concating Array
const fistArray = [20,90,111,10,23,354,];
const secondArray = [9,32,65,231,65,12,675,21];

const concat = fistArray.concat(secondArray);
// console.log(concat);


// Remove Duplicate from Array 

const names = ['Mahmud', 'Rakib', 'Faisal','Rohim', 'Mahmud', 'Rakib', 'Tahmid', 'Tahmid', 'Tamjid', 'Naiem', 'Fahim', 'Fahim'];

function removeDuplicate(array){

    let removedArray = [];

    for(let i = 0; i < array.length; i++){
        const singelName = array[i];
       if(removedArray.includes(singelName) === false){
        removedArray.push(singelName);
       }
    }
    return removedArray;
}

const mainNames = removeDuplicate(names);
// console.log(mainNames);



// Foo / Bar / FooBar

// for(let i = 0; i < 50; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FooBar');
//     }else if(i % 3 === 0){
//         console.log('Foo');
//     }else if(i % 5 === 0){
//         console.log('Bar');
//     }else{
//         console.log(i);
//     }
// }



// Shorting object from an Array 

const students = [

    {
        name:'Mahmud',
        age:20,
        class:13,
        roll:0,
        address:'Barguna',
        price:400,
        qun:4
    },
    {
        name:'Rakib',
        age:21,
        class:13,
        roll:82,
        address:'Barishal',
        price:600,
        qun:2
    },
    {
        name:'Rasel',
        age:20,
        class:13,
        roll:5,
        address:'Barguna',
        price:450,
        qun:3
    },
    {
        name:'Arif',
        age:19,
        class:13,
        roll:1,
        address:'Barguna',
        price:700,
        qun:2
    },
    {
        name:'Nazmul',
        age:19,
        class:13,
        roll:10,
        address:'Barguna',
        price:200,
        qun:8
    }
];

function findNumberOne(students){

    // Get lowest 
    // let defultRoll = students[0];
    // for(let i = 0; i < students.length; i++){
    //     const numOne = students[i];
    //     if(numOne.roll < defultRoll.roll){
    //         defultRoll = numOne;
    //     }
    // }

    // return defultRoll;

    // Shopping Cart 

    let totalPrice = 0;
    

    for(let i =0; i < students.length; i++){
        const price = students[i].price * students[i].qun;
        totalPrice += price;    
    }

    return totalPrice;

}

const numberOne = findNumberOne(students);
// console.log(numberOne);

// Ticket Discount

function discount(number){
    const first100Rate = 100;
    const sec200Rate = 85;
    const third300Rate = 70;


    if(number <= 100 ){
        const first100Price = number * first100Rate;
        return first100Price;
    }else if(number <= 200){
       const secondqun = number - 100;
       const first100price = 100 * first100Rate;
       const second200price = secondqun * sec200Rate;
       const secPrice = first100price + second200price;
       return secPrice;
    }else{
        const lastqun = number - 200;
        const first100price = 100 * first100Rate;
        const sec200price = 100 * sec200Rate;
        const lastPrice = lastqun * third300Rate;
        const lastTPrice = first100price+sec200price+lastPrice;
        return lastTPrice; 

    }
}

const tPrice = discount(500);
console.log(tPrice);