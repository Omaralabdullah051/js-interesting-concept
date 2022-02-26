function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());

let clock2 = stopWatch();
console.log(clock2());

//variable lifetime:
//global variables live until the page is discarded;
//local variables created when the function is invoked,and deleted when the function is finished.

//but in this situation,we need a local variable which lives until the page is discarded; or need a global variable which has to be private.so that we can access to an outer function's scope from an inner function.we need closure to do that.Global variables can be made local (private) with closures.clouse gives us access to an outer function's scope from an inner function.A closure is a function having access to the parent scope, even after the parent function has closed.


//now in the upper calculation,counter is a private variable ,which can be accessed from an inner function,even after the parent function has closed.