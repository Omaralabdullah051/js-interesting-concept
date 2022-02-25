/*
Falsy values:
false
0
empty string
undefined
null
NaN

truthy values:
true
any number (positive or negative) without 0;
any string including single whitespace,'0' ,'false'
empty array []
empty object {}
anything else that is not falsy,will be truthy


*/

let x = [];
console.log('value of x', x);
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

