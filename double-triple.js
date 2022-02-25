const first = '0';
const second = false;
if (first == second) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}
// implicit coercion(ontornihito jobordosti)
//implicit coercion is a javascript feature that is best avoided.
//coercion means js tried to convert the operands to the same type before making the comparision.the dobuble equal does the coercion before the comperision. example is:
//const first = 1;
//const second = '1';
//if(first == second){
// console.log(both are equal);
// }
//else{
//     console.log(both are not equal);
// }
//in this comperision; the two operands is 1 and '1';when we use double equal for comparision;js convert the '1' operands string to number before comparision; that is why js return both are equal;
//triple equale do the strict comparision in js;in means both value and type should be same;
//so double equal should be avoid .(about 90% case)
//both are useful for primitive data types comparision


//more comparision
// const a = { name: 'ali' };
// const b = { name: 'ali' };
const a = [];
const b = [];
if (a == b) {
    console.log('both are some');
}
else {
    console.log('they are not same');
}
//but both doesn't useful for non primitive data types