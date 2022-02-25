
const favouriteNum = 27;//it is a global variabel and it has global scope;we can access this variable in overall file;


function add(first, second) {
    const result = first + second;//it is a local variable and it has function scope or local scope;we cannot access this variable from the outside of this function
    if (result > 9) {
        const mood = 'happy';/* block scoped variable;it has block scope*/
        /*we cannot access this variable from the outside of this block*/
        console.log(mood);
    }
    return result;
}

const sum = add(11, 35);

//bur var haven't block scope.it just has global scope and function scope.
//if we declare var variables in a block;it becomes global variables.so it overwrite by other same name global variables.
for (var i = 0; i < 10; i++) {

}
i = 1;
console.log(i);
//so we all avoid var variables.



//hoisting:
// hoisting is a default js behavior of moving declarations to the top.js declaration are hoisted(var x,);not initialization.(X=5)const doesn't hoist.because const can't be redeclared and reassigned.so that's a syntax error.but var and let both are hoisted but var initialize the value with undefined after hoisting and has reference in memory.but let does't initialize the value with undefined after hoisting and doesn't has the  reference in the memory.it's a reference error.
