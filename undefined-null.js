/*
 1.value is not assigned with variable 
 2.function but didn't write return anything
 3.just wrote return but didn't return anything
 4.parameter that isn't passed
 5.property that that doesn't exist in an object
 6.accessing array element out of array
 7.accessing deleted array element
 8.explicitly set value to undefined
 



*/

// 1.
let first;
// console.log(first);

// 2.
function second(x, y) {
    // document.getElementById('sum');

}
const result = second();
// console.log(result);

// 3.
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return
    }
    const fun = a * b;
    return sum;

}

// 4.
const fourth = add(2, 7);
// console.log(fourth);

function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

//5.
const fifth = { name: 'sogir udding', age: 15, location: 'bandarban' };
console.log(fifth.phone);

//6.
const sixth = [54, 12, 41, 3];
// console.log(sixth[4]);

//7.
const numbers = [22, 26, 10, 9];
delete numbers[2];/*this is not a proper way to delete an array element;whatever,if we delete an element of an array;we cannot access this element;it will return undifined */
console.log(numbers[2]);
/*if we want to delete an arrray element we need to apply splice method */

//8
const eight = undefined;
// console.log(eight);

//we set null intentionally ;but undefined returns us in those situation;as like as accessing deleted array element;accessing non-existed property from an object or don't write return or write return but doesn't return anything from a function etc.
const myObj = { name: 'samad', profession: null };
