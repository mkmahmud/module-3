//  While Loop

var main = 0;
while(main <= 10){
    console.log(main);
    main++;
}

            // To Write a loop need 4 thing 

            // 01. loop variable 
            // 02. condition inside 
            // 03. Loop body
            // 04. changing loop variable value

// For loop
var my = 10;

for(var i =1; i <= 50; i++){
    console.log(i);
}

// Array Loop

var myArray = [0, 90, 20,38, 99,1010,20, 47,];

for(var i =0; i < myArray.length; i++){
    console.log(myArray[i]);
}

var numbers = [90, 100, 200, 40, 29, 38, 22, 34, 56,25,10, 9, 56]

for(var i =0; i < numbers.length; i++){
    if(numbers[i] > 50){
        continue;
    }
    console.log(numbers[i]);

}

var i = 10;
while(i >= 1){
    console.log(i);
    i--;
}

var i = 0;
for (i=0; i<5; i++){};
console.log(i);

var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
    if(marks[i] >=15){
        continue;
    }
    console.log(marks[i]);
};

for(var i =0; i < 10; i++){
    console.log(i);
}

var i = 5;
for (; i < 5; i++) {
  console.log(i);
}



