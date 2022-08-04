

function myFunction () {
    console.log("my function ");
}

myFunction();


function totalGet(money, student){
    var Tmoney = money;
    var Tstudent = student;
    var eachone = Tmoney/Tstudent;
    var mainMoney = Math.round(eachone);
    return mainMoney;
}


var totalMoney = 1000;

var totalStudent = 12;

var everyStudentGet = totalGet(totalMoney, totalStudent);

console.log(everyStudentGet);


const myObj =  {
    name:'Mahmudul Hasan MK',
    age:20,
    roll:216,
    address:'Barguna',
}

const Myname = myObj.nam;
const MyAddress = myObj['address'];

const properties = Object.keys(myObj);
const values = Object.values(myObj);

myObj.name = 'Mahmudul';
console.log(myObj);

// console.log(properties.length);

var i = 0;

while( i < properties.length){
    console.log(properties[i], values[i]);
    i++;
}