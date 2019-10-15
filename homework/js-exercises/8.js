const stringOne = 'Hi';
const stringTwo = 'Bye';
const objectOne = {
    name: 'Cool',
    iCanHoldNumbers: 420
};
const objectTwo = {
    accent: 'English',
    iCanHoldBooleans: false
};

function testType(d1, d2) {
    if (typeof d1 === typeof d2) {
        console.log('The two variables are of the same type');
        console.log('D1 is ' + typeof d1 + 'D2 is ' + typeof d2);
    } else {
        console.log('The two variables are NOT of the same type.');
        console.log('D1 is ' + typeof d1 + 'D2 is ' + typeof d2);
    }
}

testType(stringOne, objectOne);
testType(stringOne, stringTwo);
testType(objectOne, objectTwo);
testType(objectTwo, stringTwo);

const fruits = ['apple', 'banana', 'pears', 'tomatos'];
const primeNumbers = [1, 2, 3, 5, 7];

if (fruits.length === primeNumbers.length) {
    console.log('They are the same length. Yay!');
} else {
    console.log('They are not the same length, awww');
}