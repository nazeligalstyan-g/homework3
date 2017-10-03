// task 1
const learningMath = function(numb1, numb2, numb3){
    const sum = numb1+numb2+numb3;
    const multy = numb1*numb2*numb3;
    const modulus = multy%sum;

    return modulus;
};

// task 2
const  greeting = function(){
    const message = "Do your best";

    return message;
};

// task 3
const cubeVolume = function(a){
    Math.pow(a,3);
};


// task 4
const fullName = function(name,lastName){
    return name + ' ' + lastName;
};


// task 5
const longestString = function(str1, str2, str3){
    if(str1.length > str2.length && str1.length > str3.length){
        return str1.length;
    }else if(str2.length > str1.length && str2.length > str3.length){
        return str2.length;
    }else if(str3.length > str1.length && str3.length > str2.length){
        return str3.length;
    }
};

//task 6

const comporison = function(num1, num2){
    if(num1 === num2){
        return 0;
    }else if(num1 > num2){
        return 1;
    }else{
        return -1;
    }
};

// task 7
const firstTruethy = function(val1, val2, val3){
    const result = val1 || val2 || val3;
    return result;
};














