"use strict";
var sayHi = function (name, lastName) {
    return lastName ? "Whatzuuup " + name + " " + lastName : "Whatzuuup " + name;
};
console.log(sayHi('Bob'));
console.log(sayHi('Bob', 'Backlund'));
