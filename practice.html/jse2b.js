
let now = Date.now(); // timestamp
let nowObj = new Date(now);

console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj} : ${nowObj}`);

let date1 = new Date(2020, 6);
let date2 = new Date(2020, 6, 8);
let date3 = new Date(2020, 6, 8, 10);
let date4 = new Date(2020, 6, 8, 10, 20, 45);

console.log(date1.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date2.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date3.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date4.toLocaleString()); // -> 08/07/2020, 10:20:45

let startTime = Date.now();
for (i = 0; i < 10000000; i++) { }
let endTime = Date.now();
console.log(endTime - startTime);
// array methods(forEach)
array1.forEach((item, index) => console.log(`${index} : ${item}`));
// array methods(some) checks if some of the items are numbers
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
anyNumberPresent = array1.some(item => typeof item === "number"); // -> true
// array methods(Every) checks if all of the array items are greater than 0
let array2 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array2.every(item => item > 0); // -> true
// array methods(Filter)
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array1.length); // -> 9
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers.length); // -> 7
console.log(array1.length); // -> 9
// array methods(Mapping)
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array1.filter(item => typeof item === "number").map(item => item * item); // -> [8100, 6400, 100, 400, 900, 10000, 2500]
// array methods(Sorting)
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers[0]);
numbers.sort((first, second) => {
    if (first < second) {
        return -1
    } else if (first == second) {
        return 0;
    } else {
        return 1;
    }
}); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]);
// array methods(sorting) simplified form
numbers.sort((first, second) => first - second);[10, 20, 30, 50, 80, 90, 100]
// array methods(reverse)
let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10
numbers.reverse(); // -> [100, 90, 80, 50, 30, 20, 10]
console.log(numbers[0]); // -> 100
numbers.reverse(); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10
// array methods(includes, indexOf, lastIndexOf, find, findIndex) they are used to search for an item in the array
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.includes("shark")); // -> true 
console.log(myPets.includes("unicorn")); // -> false
console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6
console.log(myPets.indexOf("unicorn")); // -> -1

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.find(item => item.length > 3)); // -> hamster
console.log(myPets.find(item => item.includes("og"))); // -> dog
console.log(myPets.find(item => item.includes("fish"))); // -> undefined
console.log(myPets.findIndex(item => item.length > 3)); // -> 2
console.log(myPets.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets.findIndex(item => item.includes("fish"))); // -> -1
// array methods(slice) used to copy a selected part of the array
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPets.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPets.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPets.slice(-3, -1); // -> ["shark", "cat"]
// array methods(splice) used to delete some selected items in an array
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets.splice(2, 3);
console.log(myPets); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]
// to add items to the array
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets); // -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]
// array methods(destructuring assignment)
let myPets = ["cat", "dog", "hamster", "canary"];
let [pet1, , pet3, pet4] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> hamster
//it allows us to prepare default values
let myPets = ["cat", "dog"];
let [pet1 = "fish", , pet3 = "fish"] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> fish
// array methods(Spread operator)
let array1 = [100, 200, 300];
let array2 = [1000, 2000];
let array3 = [10, 20, ...array1, 500, ...array2]; //-> [10, 20, 100, 200, 300, 500, 1000, 2000]
//
let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.log(testFn(...array)); // -> 100

//Sets (using spread operator to convert it into an array)
let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
console.log(petsSet instanceof Set); // -> true
let petsArray = [...petsSet]; // -> ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // -> true
// Map (constructor)
let emptyMap = new Map();
let petsMap = new Map([["cats", 1], ["dogs", 2], ["hamsters", 5]]);
console.log(emptyMap.size); // -> 0
console.log(petsMap.size); // -> 3
/*in checking the presence of an element: Like the Set constructor, here we have the has method which allows us to check 
if there is an item with the given key in the collection (we look only at the key, and not at the value)*/
let petsMap = new Map([["cats", 1], ["dogs", 2], ["hamsters", 5]]);
console.log(petsMap.has("dogs")); // -> true
console.log(petsMap.has("sharks")); // -> false
console.log(petsMap.has(1)); // -> false
// Handling elements in Map collection
let petsMap = new Map([["cats", 1], ["dogs", 2], ["hamsters", 5]]);
console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0
// Walking through the elements(using forEach)
let anotherPetsMap = new Map([["snakes", 1], ["cats", 3], ["dogs", 2]]);
anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`)); // -> snakes : 1 -> cats : 3 -> dogs : 2
// using values
let anotherPetsMap = new Map([["snakes", 1], ["cats", 3], ["dogs", 2]]);
let petValuesIterator = anotherPetsMap.values();//to return the key, the values() method will be changed to keys() method

console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2
// using the entries method() in a loop
let petsIterator = anotherPetsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
    result = petsIterator.next();
}
// for...of
let petsArray = ["cat", "dog", "hamster"];
for (let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
};

let petsSet = new Set(["cat", "dog", "hamster"]);
for (let pet of petsSet) {
    console.log(pet); // -> cat -> dog -> hamster
};

let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for (let pet of petsMap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> ctas -> dogs -> hamsters
}
// Walking through elements in objects
let anotherPetsObj = { "snakes": 1, "cats": 3, "dogs": 2 };
Object.keys(anotherPetsObj).forEach(key => console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObj).forEach(key => console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObj).forEach(key => console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]
//The for ... of loop, which works for arrays, maps, and sets doesn't work for objects, but we have a for ... in construct instead  
let anotherPetsObj = { "snakes": 1, "cats": 3, "dogs": 2 };
for (let key in anotherPetsObj) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}
//converting to  json
let Vehicle = function (id, latitude, longitude) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
};

let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];
ids.forEach(id => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));
let vehcilesJSON = JSON.stringify(vehicles); // -> [{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]
// converting from json
let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // -> object
console.log(vehicle.position.longitude); // -> 59.358615
// Math (Rounding)
console.log(Math.ceil(10.2)); // -> 11
console.log(Math.floor(10.2)); // -> 10
console.log(Math.round(10.2)); // -> 10

console.log(Math.ceil(10.5)); // -> 11
console.log(Math.floor(10.5)); // -> 10
console.log(Math.round(10.5)); // -> 11
// Math object
let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}
console.log(randomInteger(10, 20)); // -> ?
console.log(Math.min(100, 20, 300, 10, 400));

let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers));
// exec method for RegExp
let re = /c.t/;
console.log(re.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct")); // -> null
// Math functions
console.log(Math.pow(2, 3)); // -> 8 => 23

console.log(Math.pow(4, 2)); // -> 16 => 42
console.log(Math.pow(4, -1)); // -> 0.25 => 4-1 = 1/4^1 
console.log(Math.pow(4, -2)); // -> 0.0625 => 4-2 = 1/4^2 
console.log(Math.pow(4, 0.5)); // -> 2 => 40.5 = 4^(1/2) = √(2&4)
console.log(Math.pow(-1, 0.5)); // -> NaN => -10.5 = √(2&-1)
console.log(Math.sqrt(4)); // -> 2
x = Math.pow(Math.E, 2); // -> 7.3890560989306495
console.log(Math.log(x)); // -> 2
console.log(Math.log2(16)); // -> 4
console.log(Math.log10(1000)); // -> 3
// RegExp
let re1 = /o*ps/;
console.log(re1.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re1.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re1.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re2 = /o+ps/;
console.log(re2.exec("ps")); // -> null
console.log(re2.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re2.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re3 = /o?ps/;  /// strange, isnt it?
console.log(re3.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re3.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re3.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
//  we need to draw one element from a given array.
let getItem = function (array, index) {
    let retVal = undefined;
    if (index > 0 && index < array.length) {
        retVal = array[index];
    }
    return retVal;
}
let array = [10, 20, 80, 100];
console.log(getItem(array, 2)); // -> 80
// or (to check if the index is within the range of the array element)
let getItem = function (array, index) {
    return (index > 0 < index < array.length) ? array[index] : undefined;
}
// best format
let getItem = function (array, index) {
    return array[index];
}
// returning rando numbers from the array
let getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}
let array = [10, 20, 80, 100];
console.log(getRandomItem(array)); // -> ?
console.log(getRandomItem(array)); // -> ?
// Lab work 1
function getRandomSet(m, n, repeatNo, shouldSort) {
    let numbers = new Set();
    while (numbers.size < m) {
        let num = Math.floor(Math.random() * (n + 1));
        if (repeatNo) {
            numbers.add(num);
        } else {
            while (numbers.has(num)) {
                num = Math.floor(Math.random() * (n + 1));
            }
            numbers.has(num);
        }
    }
    let result = Array.from(numbers);
    if (shouldSort) {
        result.sort((a, b) => a - b);
    }
    return result;
}
console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));
// lab work 2 and 3
class User {
    constructor({ firstName, lastName, email }) {
        if (!/^[A-Z][a-z]*$/.test(firstName)) {
            throw new Error("invalid firstName format");
        }
        if (!/^[A-Z][a-z]*$/.test(lastName)) {
            throw new Error("invalid lastName format");
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("invalid email format");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    set details({ firstName, lastName, email }) {
        if (!/^[A-Z][a-z]*$/.test(firstName)) {
            throw new Error("invalid firstName format");
        }
        this._firstName = firstName;
        if (!/^[A-Z][a-z]*$/.test(lastName)) {
            throw new Error("invalid lastName format");
        }
        this._lastName = lastName;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("invalid email format");
        }
        this._email = email;
    }
    get details() {
        return {
            _firstName: this.firstName,
            _lastName: this.lastName,
            _email: this.email
        }
    }
}

class Users {
    constructor() {
        this.userMap = new Map();
    }
    add({ firstName, lastName, email }) {
        let user = new User({ firstName, lastName, email });
        this.userMap.set(user.email, user);
    }
    delete(email) {
        this.userMap.delete(email);
    }
    get(email) {
        return this.userMap.get(email);
    }
    getAll() {
        return [...this.userMap.values()];
    }
}

let users = new Users();
users.add({ firstName: "Aaaa", lastName: "Bbbb", email: "cccc@gmail.com" });
users.add({ firstName: "Mmmm", lastName: "Ffff", email: "eeee@gmail.com" });
users.add({ firstName: "Aaaa", lastName: "Bbbb", email: "cccc@gmail.com" });
users.add({ firstName: "Xxxx", lastName: "Oooo", email: "dddd@gmail.com" });

console.log(users.get("dddd@gmail.com"));
console.log(users.getAll().map(u => u.firstName));
console.log(users.getAll().map(u => u.lastName));
console.log(users.getAll().map(u => u.email));
// lab work 4
class Point {
    constructor(x, y) {
        this.type = 'point';
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(points) {
        this.type = 'line';
        this.points = points.map(([x, y]) => new Point(x, y));
    }
}

class Figure {
    constructor(elements = { points: [], lines: [] }) {
        this.elements = elements;
    }

    addPoint(x, y) {
        const point = new Point(x, y);
        this.elements.points.push(point);
    }

    addLine(points) {
        const line = new Line(points);
        this.elements.lines.push(line);
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(json, add = false) {
        const data = JSON.parse(json);
        if (add) {
            this.elements.points.push(...data.points);
            this.elements.lines.push(...data.lines);
        } else {
            this.elements = data;
        }
    }

    deleteAll() {
        this.elements = { points: [], lines: [] };
    }
}
let f = new Figure();
f.addPoint(10, 20);
f.addPoint(10, 10);
f.addLine([[10, 20], [30, 40], [50, 60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
// lab work 5
class Figure {
    constructor(elements = { points: [], lines: [] }) {
        this.elements = elements;
    }

    addPoint(x, y) {
        const point = new Point(x, y);
        this.elements.points.push(point);
    }

    addLine(points) {
        const line = new Line(points);
        this.elements.lines.push(line);
    }

    sortPoints() {
        this.elements.points.sort((a, b) => {
            if (a.x < b.x) return -1;
            if (a.x > b.x) return 1;
            if (a.y < b.y) return -1;
            if (a.y > b.y) return 1;
            return 0;
        });
    }

    sortLines() {
        this.elements.lines = this.elements.lines.filter((line, i, self) => {
            const sortedPoints = line.points.slice().sort((a, b) => {
                if (a.x < b.x) return -1;
                if (a.x > b.x) return 1;
                if (a.y < b.y) return -1;
                if (a.y > b.y) return 1;
                return 0;
            });
            line.points = sortedPoints;
            return i === self.findIndex((l) => {
                return JSON.stringify(l.points) === JSON.stringify(sortedPoints);
            });
        });
    }

    removeDuplicates() {
        const uniquePoints = Array.from(new Set(this.elements.points.map((p) => JSON.stringify(p))));
        this.elements.points = uniquePoints.map((p) => JSON.parse(p));

        const uniqueLines = Array.from(new Set(this.elements.lines.map((l) => JSON.stringify(l.points))));
        this.elements.lines = uniqueLines.map((l) => new Line(JSON.parse(l)));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(json, add = false) {
        const data = JSON.parse(json);
        if (add) {
            this.elements.points.push(...data.points);
            this.elements.lines.push(...data.lines);
        } else {
            this.elements = data;
        }
    }

    deleteAll() {
        this.elements = { points: [], lines: [] };
    }
}

// Module 4
//default parameter value 1
function greetings(name = 'anonymous') {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, anonymous!
greetings('Alice'); // -> Hi. Alice!
// default parameter value 2
function test(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
test(); // -> a: undefined, b: 1, c: undefined, d: 2
test(100); // -> a: 100, b: 1, c: undefined, d: 2
test(100, 200); // -> a: 100, b: 200, c: undefined, d: 2
test(100, 200, 300); // -> a: 100, b: 200, c: 300, d: 2
test(100, 200, 300, 400); // -> a: 100, b: 200, c: 300, d: 400
// rest parameter 1
function test(...args) {
    let msg = `length: ${args.length}, args:`;
    args.forEach(arg => { msg += ` ${arg}` });
    console.log(msg);
}
test(100, 200, 300); // -> length: 3, args: 100 200 300
test(100); // -> length: 1, args: 100
// rest parameter 2
function test(firstArg, ...anotherArgs) {
    let msg = `frist arg: ${firstArg}, length: ${anotherArgs.length}, args:`;
    anotherArgs.forEach(arg => { msg += ` ${arg}` });
    console.log(msg);
}
test(100, 200, 300); // -> frist arg: 100, length: 2, args: 200 300
test(100); // -> frist arg: 100, length: 0, args: 
// using spread operator
function getFile(url, name, mime) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters = ['https://localhost/files', 'test.json', 'application/json'];
getFile(...parameters); // -> url: https://localhost/files, name: test.json, mime: application/json
// Simulating named parameters
function getFile({ url, name, mime }) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters = { name: 'test.json', url: 'https://localhost/files', mime: 'application/json' };
getFile(parameters); // -> url: https://localhost/files, name: test.json, mime: application/json
getFile({ mime: 'image/jpeg', url: 'http://test.com/rest', name: 'id.jpg' }); // -> url: http://test.com/rest, name: id.jpg, mime: image/jpeg
// closure
let counter = 0; // global variable
function tick() {
    return ++counter;
}
console.log(tick()); // -> 1
console.log(tick()); // -> 2
console.log(tick()); // -> 3
// closure2: each time the function is called, and it’s implicitly removed from the memory when the function finishes.
function tick() {
    let counter = 0;
    return ++counter;
}
console.log(tick()); // -> 1
console.log(tick()); // -> 1
console.log(tick()); // -> 1
// Closure 
function getTick() {
    let counter = 10;
    return function () {
        return ++counter;
    }
}
let tick = getTick();
console.log(tick()); // -> 11
console.log(tick()); // -> 12
console.log(tick()); // -> 13
// closure 4
function getPoint() {

    function inc(n) {
        return ++n;
    };

    return {
        x: 10,
        y: 20,
        incX: function () {
            this.x = inc(this.x);
        },
        incY: function () {
            this.x = inc(this.x);
        }
    };
}

let point = getPoint();
console.log(point); // -> {x: 10, y: 20, show: ƒ, incX: ƒ, incY: ƒ}
point.incX();
console.log(point); // -> {x: 11, y: 20, show: ƒ, incX: ƒ, incY: ƒ}
//immediately invoked function expression
(function () {
    let a = 10;
    let b = 20;
    let result;

    let sum = function (x, y) {
        return x + y;
    }

    result = sum(a, b);
    console.log(result); // -> 30
})();
console.log(result); // -> Undefined ReferenceError: result is not defined
// call method
'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.call(point, 'coordinates');
// apply method
'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.apply(point, ['coordinates']);
// bind method
'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
let showCoordinates = showPoint.bind(point, 'coordinates');
let show = showPoint.bind(point);
showCoordinates(); // -> coordinates [100:200]
showCoordinates('point'); // -> coordinates [100:200]
show('point'); // -> point [100:200]
// function expression(anonymous function) treated as a variable
let sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 20)); // -> 30
// treated as an arguement
function executeOperation(operation, firstArg, secondArg) {
    return operation(firstArg, secondArg);
}
console.log(executeOperation(sum, 10, 20)); // -> 30
// function returned by another function
function getMultiplyBy(multiplier) {
    return function (a) {
        return a * multiplier;
    }
}
let multiplyBy3 = getMultiplyBy(3);
console.log(multiplyBy3(2)); // -> 6

console.log(getMultiplyBy(5)(10)); // -> 50
// decorator
let factorial = function (n) {
    return n > 1 ? factorial(n - 1) * n : 1;
}
let decorator = function (fn) {
    let results = new Map();
    return function (n) {
        let result = results.get(n);
        if (!result) {
            result = fn(n);
            results.set(n, result);
            console.log(`... calc ${n} -> ${result}`);
        } else {
            console.log(`... found ${n} -> ${result}`);
        }
        return result;
    }
}
let factorial2 = decorator(factorial);
// iterators
let s = new Set([1, 30]);
s.add(500);
s.add(50);
//using for...of
for (let e of s) {
    console.log(e); // -> 1  30   500   50
}
//using spread operator
console.log([...s]); // -> [1, 30, 500, 50]
//
console.log(...s); // -> 1  30  500   50
// iterator
let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function () {
        let index = -1;
        let data = this.data;
        return {
            next: function () {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                }
            }
        }
    }
}
let it = almostIterable.iterator();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}
// generator
function* testGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}
//generator using loop
function* testGenerator() {
    for (let i = 10; i <= 30; i += 10) {
        yield i;
    }
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}
// generator usin for...of
function* testGenerator() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}
// generators using for...of, spread operator and iterator
let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for (element of this.data) {
            yield element;
        }
    }
}
let it = iterable[Symbol.iterator]();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}
for (a of iterable) {
    console.log(a); // -> 10  30  60  20  90
}
console.log(...iterable); // -> 10  30  60  20  90
console.log([...iterable]); // -> [10  30  60  20  90]
//
let factorialGenerator = function* (range = Infinity) {
    let last = 1;
    for (let index = 1; index <= range; index++) {
        last *= index;
        yield last;
    }
}

let factorial = factorialGenerator(3);

console.log(factorial.next()); // -> {value: 1, done: false}
console.log(factorial.next()); // -> {value: 2, done: false}
console.log(factorial.next()); // -> {value: 6, done: false}
console.log(factorial.next()); // -> {value: undefined, done: true}
//
class Factorial {
    constructor(range = Infinity) {
        this.range = range;
    }
    [Symbol.iterator] = function* () {
        let last = 1;
        for (let index = 1; index <= this.range; index++) {
            last *= index;
            yield last;
        }
    }
}
let factorial = new Factorial(5);
console.log([...factorial]); // -> [1, 2, 6, 24, 120]
let it = factorial[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 2
console.log(it.next().value); // -> 6
//
function* fibonacci(range = Infinity) {
    let lastButOne = 0, last = 1;
    yield lastButOne;
    yield last;
    for (let i = 1; i <= range; i++) {
        let tmp = lastButOne + last;
        lastButOne = last;
        last = tmp;
        yield last;
    }
}

let fibIt1 = fibonacci(10);
console.log([...fibIt1]);

let fibIt2 = fibonacci();
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);

let fibIt3 = fibonacci(5);
for (let f of fibIt3) {
    console.log(f);
}
// yield*
function* cities() {
    for (city of ['London', 'Oslo', 'Berlin']) {
        yield city;
    }
}
function* test() {
    yield* cities();
    yield 'Amsterdam'
    yield* ['Madrid', 'Rome];
}
console.log([...test()]); // -> ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']
//
var express = require("express");
var cors = require("cors");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

app.get("/", (req, res, next) => {
    res.send('<!DOCTYPE html> \
  <html lang="en"> \
  <head> \
<meta charset="UTF-8"> \
<title>Sample Site</title> \
  </head> \
  <body> \
  </body> \
  </html>');
});

app.get("/json", async (req, res, next) => {

    const time = Math.floor(Math.random() * 1000) + 1000;
    let square = req.query.value || 0;
    square *= square;

    await sleep(time);

    res.json({
        'time': time,
        'square': square
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//synchronous programming
let showInfo = result => {
    let info = "the arguments are equal";
    if (result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}

let compareSync = (a, b, fn) => {
    let r = a - b;
    fn(r);
}

console.log("start");
compareSync(10, 5, showInfo);
console.log("end");
// asynchronous
let showInfo = result => {
    let info = "the arguments are equal";
    if (result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}

let compareAsync = (a, b, fn) => {
    let r = a - b;
    setTimeout(fn, 1000, r);
};

console.log("start");
compareAsync(10, 5, showInfo);
console.log("end");
// xmlhttprequest/ call back function
const value = 200;

let request = new XMLHttpRequest();

let responseLoaded = () => {
    if (request.status === 200) {
        const resp = JSON.parse(request.responseText);
        console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    }
}

request.onload = responseLoaded;
request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();

console.log(`browser: ${value} * ${value} = ${value * value}`);
// call back function 2/ xmlhttpsrequest
const value = 200;

let request = new XMLHttpRequest();

request.addEventListener("load", () => {
    if (request.status === 200) {
        const resp = JSON.parse(request.responseText);
        console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    }
});
request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();

console.log(`browser: ${value} * ${value} = ${value * value}`);
// Promise
let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});

let handleResolved = function (value) {
    console.log(value);
}

let handleRejected = function (error) {
    console.log(`Error: ${error.message}`);
}

p.then(handleResolved, handleRejected);

console.log('end');
// promise 2
let p = new Promise((resolve, reject) => {
    resolve(5);
});

p.then(v => {
    console.log(v);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(6), 1000);
    });
})
    .then(v => {
        console.log(v);
    });
// promise
let Promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 1000);
    })
];
Promise.all(Promises).then(resolved => resolved.forEach(p => console.log(p)));
//
let promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 2'), 2000);
    }),
];

Promise.all(promises)
    .then(a => a.forEach(p => console.log(p)))
    .catch(e => console.log(e));
//
let promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 2'), 2000);
    }),
];

Promise.all(promises)
    .then(a => a.forEach(p => console.log(p)))
    .catch(e => console.log(e));
//
const value = 200;

let promise = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.onload = () => {
        if (request.status === 200) {
            resolve(JSON.parse(request.responseText));
            // console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
        } else {
            reject(new Error(request.status));
        }
    };
    request.open('GET', `http://localhost:3000/json?value=${value}`);
    request.send();
})

promise.then(
    function (result) {
        console.log(`server: ${value} * ${value} = ${result.square} (${result.time}ms)`);
    },
    function (error) {
        console.log(error.message);
    });

// module 4 lab work 1
class Iterable {
    constructor() {
        this.iterable = [];
    }
    [Symbol.iterator] = function* () {
        for (let element of this.iterable) {
            yield element;
        }
    }
    /*[Symbol.iterator] = function () {
      let index = -1;
      let interable = this.iterable;
      return{
        next: function(){
          index++
          return{
            value : interable.length === index? undefined : interable[index],
            done: interable.length === index
          }
        }
      }
    }*/
    add(value) {
        if (!this.iterable.includes(value)) {
            this.iterable.push(value);
        }
    }
    del(value) {
        this.iterable = this.iterable.filter(element => element !== value)
    }
    has(value) {
        return this.iterable.includes(value);
    }
    get length() {
        return this.iterable.length;
    }
}
let iterable = new Iterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5


//Module 4 lab work 2
function myDecorator(fn) {
    let argsArray = [];
    return function wrapper(...args) {
        if (argsArray.includes(JSON.stringify(args))) {
            console.log(`arguements have already been used:${JSON.stringify(args)}`);
            return;
        }
        argsArray.push(JSON.stringify(args));
        return fn.apply(this, args);
    }
}
let sum = function (...args) {
    let retVal = 0;
    for (let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5

// using set instead of array for labwork 2
function myDecorator(fn) {
    const calls = new Set(); // use a set to store unique argument arrays
    return function decorated(...args) {
        if (calls.has(JSON.stringify(args))) { // check if argument array has already been used
            console.log(`Function already called with arguments: ${JSON.stringify(args)}`);
            return;
        }
        calls.add(JSON.stringify(args)); // add argument array to set
        return fn.apply(this, args);
    }
}

// Module 4 labwork 3(promise)
function getPromiseArray(array) {
    const promiseArr = [];
    for (i = 0; i < array.length; i++) {
        const element = array[i];

        if (Number.isInteger(element) && element > 0) {
            const promises = new Promise(resolve => {
                setTimeout(() => resolve(element), element);
            })
            promiseArr.push(promises);
        } else {
            //const promises = new Promise.reject(new Error(`${element} is not a positive integer`));
            const promises = new Promise(reject => {
                setTimeout(() => reject(new Error(`${element} is not a positive integer`)), 0);
            })
            promiseArr.push(promises);
        }
    }
    return promiseArr;
}
let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
    .catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
Promise.any(promises1).then(a => console.log(`any: ${a}`)).
    catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer

// Module 4 labwork 4(fetch and promise)
function getWeather(city, info) {
    if (!Array.isArray(city)) {
        if (info === "all" || typeof info === "undefined") {
            fetch(`http://localhost:3000/weather?city=${city}`)
                .then(Response => Response.json())
                .then(data => { checkForErrors(data); console.log(data); })
                .catch(error => console.error(error))
        } else {
            const validInfoType = ["wind", "clouds", "temp", "precipitation"];
            if (validInfoType.includes(info)) {
                fetch(`http://localhost:3000/weather?city=${city}&type=${info}`)
                    .then(Response => Response.json())
                    .then(data => { checkForErrors(data); console.log(data); })
                    .catch(error => console.error(error))
            } else {
                console.log(`invalid info parameters: ${info}`)
            }
        }
    } else {
        city.forEach(city => {
            if (info === "all" || typeof info === "undefined") {
                fetch(`http://localhost:3000/weather?city=${city}`)
                    .then(Response => Response.json())
                    .then(data => { checkForErrors(data); console.log(data); })
                    .catch(error => console.error(error))
            } else {
                const validInfoType = ["wind", "clouds", "temp", "precipitation"];
                if (validInfoType.includes(info)) {
                    fetch(`http://localhost:3000/weather?city=${city}&type=${info}`)
                        .then(Response => Response.json())
                        .then(data => { checkForErrors(data); console.log(data); })
                        .catch(error => console.error(error))
                } else {
                    console.log(`invalid info parameters: ${info}`)
                }
            }
        })
    }
}
function checkForErrors(data) {
    if (data.wind.speed > 15) {
        console.warn("WARNING! Wind speed over 15 m/s");
    }
    if (data.temp < -20) {
        console.warn(" WARNING! Temperature below -20 degrees");
    }
}
let weather1 = getWeather('Berlin', 'wind');
let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');

// Module 4 labwork 5(async/await)
async function getWeather(city, info) {
    try {
        if (!Array.isArray(city)) {
            if (info === "all" || typeof info === "undefined") {
                const response = await fetch(`http://localhost:3000/weather?city=${city}`);
                const data = await response.json();
                checkForErrors(data);
                console.log(data);
            } else {
                const validInfoType = ["wind", "clouds", "temp", "precipitation"];
                if (validInfoType.includes(info)) {
                    const response = await fetch(`http://localhost:3000/weather?city=${city}&type=${info}`);
                    const data = await response.json();
                    checkForErrors(data);
                    console.log(data);
                } else {
                    console.log(`invalid info parameters: ${info}`)
                }
            }
        } else {
            for (const cityItem of city) {
                if (!Array.isArray(city)) {
                    if (info === "all" || typeof info === "undefined") {
                        const response = await fetch(`http://localhost:3000/weather?city=${cityItem}`);
                        const data = await response.json();
                        checkForErrors(data);
                        console.log(data);
                    } else {
                        const validInfoType = ["wind", "clouds", "temp", "precipitation"];
                        if (validInfoType.includes(info)) {
                            const response = await fetch(`http://localhost:3000/weather?city=${cityItem}&type=${info}`);
                            const data = await response.json();
                            checkForErrors(data);
                            console.log(data);
                        } else {
                            console.log(`invalid info parameters: ${info}`)
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
    function checkForErrors(data) {
        if (data.weather.wind.speed > 15) {
            console.warn("WARNING! Wind speed over 15 m/s");
        }
        if (data.weather.temp < -20) {
            console.warn("WARNING! temperature below -20 degrees")
        }
    }
}