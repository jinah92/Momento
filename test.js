const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multi: function(a, b) {
        return a * b;
    },
    div: function(a, b) {
        return a / b;
    }
    
}

const plus = calculator.plus(5, 5);
console.log(plus);


function sayHello(name, age){
     return `hello ${name} you are ${age} years old`;

    // console.log(`hello ${name} you are ${age} years old`);
    // return `hello ${name} you are ${age} years old`;
    // console.log('Hello', name, " you have ", age, "years of age.");
}

const greetNicolas = sayHello("Nicolas", 14);

console.log(greetNicolas);

sayHello("Nicolas", 15);
console.log("Hi");

const nicoInfo = {
    name: "Nico",
    age: 33,
    isHandsome: true
}

// console.log(nicoInfo, console);

// alert("I'm working"); 
// let a = 221;
// let b = a - 5;
// console.log(b);