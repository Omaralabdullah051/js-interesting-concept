const a = 'alim uddin';
const b = 23;
const c = false;
//null
//undefined

//primitive data type
//non primitive data type or reference data type
//object,array,function,date,etc.but that's all come from a master object.
//so reference data type is just an object.

const nums = [1, 30, 54];
console.log(typeof nums);
//Array.isArray(nums) for checking array


//hoisting:
// hoisting is a default js behavior of moving declarations to the top.js declaration are hoisted(var x,);not initialization.(X=5)const doesn't hoist.because const can't be redeclared and reassigned.so that's a syntax error.but var and let both are hoisted but var initialize the value with undefined after hoisting and has reference in memory.but let does't initialize the value with undefined after hoisting and doesn't has the  reference in the memory.it's a reference error.