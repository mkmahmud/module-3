var  myArray = [12, 13, 90, ' 002', 91];
myArray[0] = 1;
var third = myArray[3];
console.log(myArray[3]);


var you = ['MK', 90, 101, ];
you.push('Hasan');
you.push(10);
console.log(you);
you.pop()
console.log(you);



// H. W 1

var fruits = ['Apple', 'Banana', 'Orange'];

var banana = fruits.indexOf('Banana');

console.log(banana);

fruits.pop();
fruits.pop();
fruits.push('Mango', 'WatterLemon');

console.log(fruits);


// H.W 2

var myNum = 95;
var jhonNum = 50;
var pitterNum = 69;
var alexNum = 79;
var shanNum = 80;

var num = 32;

if(num >= 80){
    console.log('A+');
}else if(num >= 60){
    console.log('B+');
}else if(num >= 50){
    console.log('C+');
}else if(num >= 40){
    console.log('D+');
}else if(num >= 33){
    console.log('E');
}else if(num <= 32){
    console.log('-F');
}



// H.W 3

var num1 = 13;
var num2 = 130;
var num3 = 103;


if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }else{
        console.log(num3);
    }
}

var nums = [1, 5, 8];
console.log(nums.indexOf(1));
console.log(6 != 6);
console.log(6 >= 6);