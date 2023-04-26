// promt and alert box
let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";

let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");

// confirm box
let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"

console.log(message);

/*let width = prompt ("what is the width", "50?");
let height = prompt ("what is the height", "50?");
let length = prompt ("what is the length", "50?");
let volume = width*height*length;
alert("volume is " + volume + "cm");*/


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let newContact = [{
    name: prompt("New contact", "What is your name"),
    phone: prompt("Hello " + name + " What is your phone number", 09071611507),
    email: prompt("Hello " + name + " input email", "samdam")
}
];
contacts.push(newContact[0]);
let last = contacts.length - 1;
alert(contacts[last].name + " / " + contacts[last].phone + "/ " + contacts[last].email);
console.log("Name:", contacts[0].name, "/ Phone:", contacts[0].phone, "/ Email", contacts[0].email);
console.log("Name:", contacts[last].name, "/ Phone:", contacts[last].phone, "/ Email", contacts[last].email);

// If statement
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}

let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
    alert("Total price: " + total);
}


const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 70;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
    shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
    shippingCost = shippingCost - 5;
} else if (userAge < 21) {
    isOrderValid = false;
}

/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
    shippingCost += INSURANCE_COST;
}

/** show message */
if (isOrderValid) {
    console.log(shippingCost);
} else {
    console.log("Cannot order if under 21");
}

let start = confirm("Start?");
let message = start ? "Here we go!" : "Aborted";
alert(message);

let display = prompt("Input a Number", 0);
if (display > 90 && display < 110) {
    console.log(display);
    alert("Bingo!")
} else {
    alert("Miss")
}

let display = prompt("Input a Number", 0);
let option = display > 90 && display < 110;
let message = option ? "Bingo!" : "Miss";
alert(message);

//Switch case
let num1 = prompt("Enter first value", "20");
let num2 = prompt("Enter second value", "10");
let operand = prompt("input action to be carried out", "+, -, *, /");
let result;
if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    switch (operand) {
        case "+":
            result = num1 + num2;
            break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let firstChoice = "show first contact";
let secondChoice = "show last contact";
let thirdChoice = "add new contact";

let choice = prompt("What do you want?");

if (choice === firstChoice) {
    alert(contacts[0].name + " / " + contacts[0].phone + " / " + contacts[0].email);
} else if (choice === secondChoice) {
    alert(contacts[2].name + " / " + contacts[2].phone + " / " + contacts[2].email);
} else if (choice === thirdChoice) {
    alert("Add new contact");
}

// Full code on conditional statement lab work
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

/*let name = prompt("New contact: What is your name?");
  let phone = prompt("Hello " + name + ", what is your phone number?");
  let email = prompt("Hello " + name + ", input email:");
  let newContact = {
    name: name,
    phone: phone,
    email: email
  };
  contacts.push(newContact);
  
  let firstContact = contacts[0];
  let lastContact = contacts[contacts.length - 1];
  
  console.log("First Contact:");
  console.log("Name:", firstContact.name);
  console.log("Phone:", firstContact.phone);
  console.log("Email:", firstContact.email);
  
  console.log("Last Contact:");
  console.log("Name:", lastContact.name);
  console.log("Phone:", lastContact.phone);
  console.log("Email:", lastContact.email);*/

let firstChoice = "show first contact";
let secondChoice = "show last contact";
let thirdChoice = "add new contact";

let choice = prompt("What do you want?");

if (choice === firstChoice) {
    alert(contacts[0].name + " / " + contacts[0].phone + " / " + contacts[0].email);
} else if (choice === secondChoice) {
    alert(contacts[2].name + " / " + contacts[2].phone + " / " + contacts[2].email);
} else if (choice === thirdChoice) {
    let name = prompt("New contact: What is your name?");
    let phone = prompt("Hello " + name + ", what is your phone number?");
    let email = prompt("Hello " + name + ", input email:");
    let newContact = {
        name: name,
        phone: phone,
        email: email
    };
    if (name && phone && email) {
        contacts.push(newContact);
        alert("Contact has been created");
    }
    else {
        alert("input complete data");
    }
}



// program to add new contact (AI code)
let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];
let name = prompt("New contact: What is your name?");
let phone = prompt("Hello " + name + ", what is your phone number?");
let email = prompt("Hello " + name + ", input email:");
let newContact = {
    name: name,
    phone: phone,
    email: email
};
contacts.push(newContact);

let firstContact = contacts[0];
let lastContact = contacts[contacts.length - 1];

console.log("First Contact:");
console.log("Name:", firstContact.name);
console.log("Phone:", firstContact.phone);
console.log("Email:", firstContact.email);

console.log("Last Contact:");
console.log("Name:", lastContact.name);
console.log("Phone:", lastContact.phone);
console.log("Email:", lastContact.email);

// program to ask user what they want to do and carry it out (AI code)
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

while (true) {
    let choice = prompt("What do you want to do?\n\n" +
        "1. Show first contact\n" +
        "2. Show last contact\n" +
        "3. Add new contact\n" +
        "4. Exit");

    if (choice === "1") {
        if (contacts.length === 0) {
            alert("There are no contacts to display.");
        } else {
            let firstContact = contacts[0];
            alert("Name: " + firstContact.name + "\n" +
                "Phone: " + firstContact.phone + "\n" +
                "Email: " + firstContact.email);
        }
    } else if (choice === "2") {
        if (contacts.length === 0) {
            alert("There are no contacts to display.");
        } else {
            let lastContact = contacts[contacts.length - 1];
            alert("Name: " + lastContact.name + "\n" +
                "Phone: " + lastContact.phone + "\n" +
                "Email: " + lastContact.email);
        }
    } else if (choice === "3") {
        let name = prompt("What is the name of the new contact?");
        let phone = prompt("What is the phone number of the new contact?");
        let email = prompt("What is the email of the new contact?");
        let newContact = {
            name: name,
            phone: phone,
            email: email
        };
        contacts.push(newContact);
        alert("New contact added.");
    } else if (choice === "4") {
        alert("Goodbye!");
        break;
    } else {
        alert("Invalid choice. Please enter a number between 1 and 4.");
    }
}
// While statement
let isOver = false;
let counter = 1;

while (!isOver) {
    isOver = !confirm('[${counter++}] Continue the loop?');
}
// For Statement
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

// while and for
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
alert(names);
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// different for statement methods
let values = [10, 30, 50, 100];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}

for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}

for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}

// for...of
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
for (let city of cities) {
    if (city.population > 20e6 && city.population < 25e6) {
        console.log('${city.name} (${city.population})');
    }
}

// for...in
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
for (let key in user) {
    console.log(key + " -> " + user[key]); // -> name, surname, age, email
};

// another block of code
let vessel =
{
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
}
for (let key in vessel) {
    console.log(key, "->", vessel[key]);
}

//break and continue
let i = 0;
// An infinite loop
while (true) {
    console.log(i);
    i++;
    if (i >= 10) {
        break;
    }
}
alert('Exited the loop with a break.' + "" + i);
// continue
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// switch case without break
let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
        alert("Gate A: empty");
    case "b":
        alert("Gate B: main prize");
        win = true;
    case "c":
        alert("Gate C: empty");
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}

// switch with break, with multiple cases in one branch
let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// another block of code
let num = {
    askNum1: prompt("What is the first number"),
    askNum2: prompt("What is the last number")
}
//let Num = {askNum1, askNum2}
if (askNum1 > askNum2) {
    console.log(Num.askNum1, Num.askNum2);
} else {
    alert("entered values are wrong");
}

//task
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
for (number of numbers) {
    console.log(number);
}
for (number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
for (number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
}
// another set of code
let movie = [];
let isOver = false;
let newMovie;
while (!isOver) {
    let title = prompt("What is the name of the movie", "iron man");
    let rating = prompt("rate this movie", 7.5);
    if (title === "" || isNaN(rating)) {
        isOver = true;
    }
    else {
        newMovie = { title, rating }
        movie.push(newMovie);
    }
}
for (let movies of movie) {
    if (movies.rating < 7) {
        console.log(movies.title + "" + "(", movies.rating, ")");
    }
    else {
        console.log(movies.title + "" + "(", movies.rating, ")");
    }
}

let movies = [];
while (true) {
    let title = prompt("Enter movie title");
    let rating = prompt("Enter movie rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        movies.push({
            title: title,
            rating: Number(rating)
        });
    }
}
console.log("All with ratings under 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log('${movie.title} (${movie.rating})');
    }
}
console.log("All with ratings over 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log('${movie.title} (${movie.rating})');
        break;
    }
}

// Calculator
while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}

//another code
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
while (true) {
    let actions = prompt("What do you want to do?\n\n" +
        "1. Display the first contact\n" +
        "2. Display the last contact\n" +
        "3. Display all contact\n" +
        "4. Add a new contact\n" +
        "5. Exit the program");
    if (actions === "1") {
        let firstContact = contacts[0];
        alert("name:" + firstContact.name + "\n" +
            "phone:" + firstContact.phone + "\n" +
            "email:" + firstContact.email);
    } else if (actions === "2") {
        let lastContact = contacts.length - 1;
        alert("name:" + lastContact.name + "\n" +
            "phone:" + lastContact.phone + "\n" +
            "email:" + lastContact.email);
    } else if (actions === "3") {
        for (let i = 0; i < contacts.length; i++) {
            alert("name:" + Contact.name + "\n" +
                "phone:" + Contact.phone + "\n" +
                "email:" + Contact.email);
        }

    } else if (actions === "4") {
        let name = prompt("Add new contact", "name");
        let phone = prompt("input phone number", 09071611507);
        let email = prompt("input email", "Samueldamilare45@gmail.com");
        let newContact = {
            name: name,
            phone: phone,
            email: email,
        };
        contacts.push(newContact);
        let newadds = contacts.length - 1;
        alert("name:" + newadds.name + "\n" +
            "phone:" + newadds.phone + "\n" +
            "email:" + newadds.email)
    } else if (actions === "5") {
        alert("Goodbye");
        break;
    } else {
        alert("command not recognised");
        break;
    }
}

// functions
function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log('mean: ${getMeanTemp(day1)}'); // -> mean:
16.666666666666668

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log('mean: ${getMeanTemp(day2)}'); // -> mean:
18.083333333333332
// check if function is number
function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}
function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}
function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}
console.log(add(12, "a"));
console.log(mult("a", 10.1));
// using arrow function
let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
console.log(add(12, 10)); // -> 22
console.log(mult("a", 10.1));
// callback function
let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
function action(func, a, b) {
    return func(a, b);
}
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
//set intervals and timers
let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);
//fibonacci
let fibbRec = function (n) {
    let f1 = 0;
    if (n != 0) {
        if (n === 1) {
            f1 = 1;
        } else {
            f1 = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return f1
}
console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7));
//fibonacci using arrow function
let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));
console.log(fibb(4)); // -> 3
console.log(fibb(7));
//fibonacci
function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;
    }
    return b;
}



let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
function showContact(contact, index) {
    if (contact instanceof Array) {
        const contact = contact[index];
        return contact.name, contact.phone, contact.email;
    } else {
        console.log("Invalid index");
    }

}
console.log(showContact(contacts, 1));
//code from chatgpt
function displayContact(contacts, index) {
    // check if the index is valid
    if (index >= 0 && index < contacts.length) {
        // get the contact at the specified index
        const contact = contacts[index];
        // display the contact information
        console.log(`Name: ${contact.name}`);
        console.log(`Phone Number: ${contact.phoneNumber}`);
        console.log(`Email: ${contact.email}`);
        // add other properties as needed
    } else {
        console.log("Invalid index");
    }
}

function addNewContact(contact, name, phone, email) {
    if (contact instanceof Array && newContact != null) {
        let newContact = {
            name: name,
            phone: phone,
            email: email
        };
        contact.push(newContact);
    }
}
addNewContact(contacts, "Samuel", "09071611507", "samuel@mail.com");

let add = (a, b) => (a + b);
// error handling and exception
function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20
// try...catch...finally
let a = 10;
try {
    a = b;  // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError

} finally {
    console.log("Finally!");
}
// Task on throw statement
function div(a, b) {
    if (b == 0) {
        throw new RangeError("0 is an invalid number")
    }
    return a / b;
}
console.log(div(20, 5));
console.log(div(20, 0));

//task 2
function div(a, b) {
    if (b == 0) {
        throw new RangeError("0 is an invalid number")
    }
    return a / b;
}
let numbers = [10, 40, 0, 20, 50];
for (i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        e.message;
    }
    console.log(result);
}
//code execution time 1
let part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915
// code execution time 2
let part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 175.5458984375 ms
let pi = part * 4;
console.log(pi);
// first test on debugging
let counter = 0;
let maxValue = 10;
let result = 1;

debugger;
for (counter = 0; counter < maxValue; counter++) {
    console.log(result);
    result *= maxValue - counter - 1;
}

console.log("Final result: ", result);
// second example on debugging
function max(array) {
    let maxValue = array[1];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}

console.log(max([1, 4, 6, 2])); // -> 6 
console.log(max([10, 4, 6, 2]));// ->6 but it should be 10, the value of i should be 0 not 1

//
/*console.log("before outer() call");
console.log(outer());
console.log("after outer() call");

function max(array) { 
    let maxValue = array[1]; 
    debugger;
    for(let i=0; i<array.length; i++) { 
        if(array[i] > maxValue) { 
            maxValue = array[i]; 
        } 
    } 
    return maxValue; 
} 
 
console.log( max([1, 4, 6, 2]));
console.log( max([10, 4, 6, 2]));*/
/*let point0 = {x:10, y: 20 };
let point1 = point0;    // copy reference
let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false
//assigning properties from source to new object
let point3 = {};
Object.assign(point3, point0, {z: 100});
console.log(point3.z);*/

/*let point = {x:0, y:0};
let coloredPoint = {color: "red"};
coloredPoint.__proto__ = point;
console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x);
coloredPoint.x = 100;   // new property
console.log(coloredPoint.x);
console.log(point.x);
console.log(Object.getOwnPropertyNames(coloredPoint));*/
// new work
figure = {
    getType: function () {
        return this.type ? this.type : "unknown";
    }
};

let circle = {
    type: "circle",
    center: { x: 0, y: 0 },
    radius: 100
};
circle.__proto__ = figure;
console.log(figure.getType());
console.log(circle.getType());
