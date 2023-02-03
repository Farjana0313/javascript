function addNumbers(num1,num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = num + sum;
    }
    return sum;
}

var result=addNumbers(5,8,15,6,7);
console.log(result);