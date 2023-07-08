function addNums(num1=1,num2=2){
    console.log( num1+num2);
}

addNums(5,5);

//arrow function
const add=(num1=1,num2=2)=>{
    return num1+num2;
}

console.log(add(6,5));

const add1 = num2 =>num2 +7;

console.log(add1(5));
