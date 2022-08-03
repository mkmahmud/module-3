

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