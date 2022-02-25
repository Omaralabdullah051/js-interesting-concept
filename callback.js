function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const names = ['Tom Hanks', 'tom brady,', 'tom cruise'];
// const myObj = { name: 'Tom chinku', age: 11 };
function greetMorning(name) {
    console.log('Good Morning', name);
}
function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
welcomeMessage('tom hanks', greetMorning);
welcomeMessage('fozle rabbi', greetAfternoon);
welcomeMessage('moinul uddin', greetEvening);


document.getElementById('my-btn').addEventListener('click', function () {
    console.log('button is clicked');
})