// Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output

            // function foo(){
            //     console.log('foo');
            // }
            // function bar(){
            //     console.log('Bar');
            // }

            // foo(bar());


// 2) Write a function called make_avg() which will take an three integers and return the
// average of those values.

            // function make_avg(number1, number2, number3){

            //     const totalSum = number1 + number2 + number3;
            //     const avg = totalSum / 3;
            //     return avg;
            // }

            // var avg_num = make_avg(80,90,94);
            // console.log(avg_num);

// 3) Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.

            // function make_avg(nums){
            // const total = (nums[0]+nums[1]+nums[2]+nums[3]+nums[4]+nums[5]+nums[6]+nums[7]+nums[8]);
            // const avg = total / 9;
            // return avg;
            // }

            // const resultArray = [90,60,80,98,78,94,97,99,89];
            // // const avg_result =  make_avg(resultArray);
            // // console.log(avg_result);

            // const avg_num =  make_avg(resultArray);
            // console.log(Math.round(avg_num));


        
// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter


            // function odd_even(num){

            //     const number = num %  2;
            //     const odd = 'This is Odd number';
            //     const even = 'This is Even number';
            // if(number == 0){
            //     return even;
            // }else{
            //     return odd;
            // }
            // }

            // var return_num =  odd_even(2);
            // console.log(return_num);


            function movie(){
                return "Din-The day";
                return "Poran";
                return "Hawa";
              }
              console.log(movie());