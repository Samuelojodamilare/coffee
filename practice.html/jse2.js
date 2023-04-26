// object
let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: {
    x: 10, 
    y: 20
    }, 
    fn: function(arg) {console.log(arg)} 
    };
    
    test.fn(123);

// functions as methods in object
let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
    }
    
    console.log(point.x);	// -> 0
    point.moveHorizontally(30);
    console.log(point.x);  

// Adding new properties
let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);   // -> 207-662-5412
console.log(contact.firstName);     // -> Ronald

// Modifying an object
// First modification done to the email property
contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ];
// Second modification done to the email property
contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
    };
    console.log(contact.email.work);

// deleting a property
    delete contact.email.work;
    console.log(contact.email.work);
    console.log(contact.email.private);

//Dot notation vs bracket notation
contact.tel === contact["tel"];
contact.email.work === contact["email"]["work"]
// Advantage of bracket notation
let contact = {
	"first name": "Ronald"
};
contact["first name"] = "Tim";
/*contact.first name = "Tim";	// SyntaxError: Unexpected identifier
contact."first name" = "Tim";	// SyntaxError: Unexpected string*/
// property existence
if(contact && contact.email) {
    console.log(contact.email.private);
}
// Result of calling an unexisting property
console.log(contact.notes); // -> undefined
console.log(contact.email.private); // exception!
// better way to check existence using IN keyword
if("notes" in contact) { // if true
    console.log(contact.notes);
}
// Property enumeration
let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    // print property name
   console.log(x);  
}
//2
for(x in contact) {
    // print property value 
     console.log(contact[x]);
 }
//3
for(x in contact) {
    // print property name, type and value
   console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}
//property enumeration using object.key
let keys = Object.keys(contact);
//Coping objects (coping references (), cloning, merging)
let point0 = {x:10, y: 20 };
let point1 = point0;    // copy reference
let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false
//another method
let point0 = {x:10, y: 20 };
let point2 = Object.assign({}, point0);
let point3 = Object.assign({}, point0, {z: 100});
// Using spread operator
let point0 = {x:10, y: 20 };
let point2 = { ...point0};
let point3 = { ...point0, z: 100};

let circle1 = {
    radius: 100,
    center: {
        x: 100,
         y: 100
    }};

let circle2 = {... circle1};

circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);

console.log(circle1 === circle2); // false
console.log(circle1.center === center); // true !
// deep cloning
let deepClone = function(obj) {
    let newObj = {...obj};
    for(property in newObj) {
        if(typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
    }
    let obj = {
        color: "Yellow",
        name: "Samuel",
        emails: {
          personal: "soddstore@gmail",
          privat: "samueldami@gmail"
        }
    };
    console.log(deepClone(obj));
// Using THIS keyword in methods
let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
            return typeof this.radius === "number" ? "circle" : "unknown" ;
    }
    };
    
    console.log(circle.getType());
    let figure = {...circle};
    delete circle.radius;
    console.log(figure.radius);
    console.log(figure.getType()); // "circle"
    // get and set
    let contact = {
        _tel: "207-662-5412",
      get tel() {return this._tel;}
  };
  console.log(contact.tel);
  contact.tel = "100-100-1000";
  console.log(contact.tel);
  contact.email = "RonaldSMurphy@freepost.org";
  console.log(contact.email);
// getter and setter 2
  let contact = {
    _age: 36,
   firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}

};
console.log(contact.fullName);
contact.age = -20;
console.log(contact.age);
//object and property configuration
//get the description of the object property
let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc);
//configuring properties
Object.defineProperty(contact, "_age", {
    value: contact._age,
    writable: false,
    enumerable: false,
    configurable: true
});

contact._age = 100;
console.log(contact._age);
// get all the property names using the second function in this example
let enumKeys = Object.keys(contact);
let allKeys = Object.getOwnPropertyNames(contact);
console.log(enumKeys);
console.log(allKeys);
/*
Object.preventExtensions(obj) – after calling this method, we won't be able to add new properties to the object obj;
Object.seal(obj) – does not allow the adding, removing, or reconfiguring of the properties of the object obj;
Object.freeze(obj) – similar to Object.seal, but additionally makes it impossible to change the value of the property
We also have methods to check if the object configuration has been changed.
And so, we can use these methods respectively: Object.isExtensible, 
Object.isSealed(obj),
and Object.isFrozen(obj)
*/
    //Creating object using Factory technique
    let createPoint  = function(x, y) {
        let obj = {};
    
        obj.x = x;
        obj.y = y;
    
        return obj;
    };
    //other option
    let createPoint  = function(x, y) {
        return {
            x,
            y
        }
    };
    //or using arrow function
    let createPoint  = (x, y) => ({x, y});
    let point1 = createPoint(1,1);
    let point2 = createPoint(2,2);
    console.log(point1.x); // ->  1
    console.log(point2.x); // -> 2
    // creating objects using new object
    let emptyObject = new Object();
console.log(emptyObject.constructor.name);
//creating an object using constructor function
let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
    };
    let coloredPoint1 = new ColoredPoint(1, 1, "red");
    let coloredPoint2 = new ColoredPoint(2, 2, "green"); 
    console.log(coloredPoint1.getColor());	// -> red
    console.log(coloredPoint2.getColor());	// -> green
    console.log(coloredPoint1._color);   // -> undefined !!!
// creating an empty object
let a = {};
console.log(typeof a.constructor);
let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name)
/* Unless you are 100% sure why you need an object that is not based on the generic Object constructor, 
create it in the normal way (factory, constructor, object literals, classes*/
// Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  let person1 = new Person("John", 30);
  let person2 = new Person("Mary", 25);
  
  person1.sayHello(); // outputs "Hello, my name is John and I am 30 years old."
  person2.sayHello(); // outputs "Hello, my name is Mary and I am 25 years old."
/*
If you decide to use prototypes, it’s definitely best to use a method 
based on constructors or Object.create.*/
//prototype based on constructor
let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;

let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;

let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);

// write your code here
let inventory = [{
    name: "Mona Lisa",
    artist: "Leanardo da Vinci",
    year: 1503
    },
    {
    name:"The Last Supper",
    artist: "Leonardo da Vinci",
    year: 1495
    },
    {   
    name: "Starry Night",
    artist: "Vincent van Gogh",
    year: 1889
    },
    {
    name: "The Scream",
    artist: "Edvard Munch",
    year: 1893
    },
    {
    name:"Guernica",
    artist:"Pablo Picasso",
    year: 1937
    },
    {
    name:"The Kiss",
    artist:"Gustav Klimt",
    year: 1907
    },
    {
    name:"Girl With a Pearl Earring",
    artist:"Johannes Vermeer",
    year: 1665
    },
    {
    name:"The Birth of Venus",
    artist:"Sandro Botticelli",
    year: 1485
    },
    {
    name:"Las Meninas",
    artist:"Diego Velázquez",
    year: 1656
    },
    {
    name:"The Creation of Adam",
    artist:"Michelangelo",
    year: 1512
    }
];
for(i = 0; i <= inventory.length; i++){
    console.log("Full Information:");
    console.log("Name: " + inventory[i].name, ", Artist: " + inventory[i].artist, ", Year: " + inventory[i].year + ".");   
}
function Image(name, artist, year){
    this.name = name;
    this.artist = artist;
    this.year = year;
};
const newImage = new Image("leonardo da vinci", "salvator mundi", 1500);

function getImage(name, artist, year){
    return {
            name: name,
            artist: artist, 
            year: year
            };
}
const images1 = [];
for (let i = 0; i < inventory.length; i++) {
  images1.push(new Image(inventory[i].name, inventory[i].artist, inventory[i].year));
}
const images2 = [];
for (let i = 0; i < inventory.length; i++) {
    images2.push(getImage(inventory[i].name, inventory[i].artist, inventory[i].year));
}
console.log(images2[1].name);


// write your code here
// write your code here
function Image(name, artist, year){
    this.name = name;
    this.artist = artist;
    this.year = year;
};  
const newImage = new Image();

let images = {
    list: [],
    contains: function(name) {
  for (let i = 0; i < images.list.length; i++) {
    if (images.list[i].name === name) {
      return true; // Return true if an image with the same name exists in the list
    }
  }
  return false; // Return false if an image with the same name does not exist in the list
},
    add: function(name, artist, year){
        if (!images.contains(name)){
            let addNew = {
            name : name,
            artist : artist,
            year : year
            };
            images.list.push(addNew);
        }
    },
    show: function(){
        for(let i = 0; i < images.list.length; i++ ){
           console.log("Name: " + images.list[i].name, ", Artist: " + images.list[i].artist, ", Year: " + images.list[i].year + "."); 
        }
    },
    clear: function(){
        images.list = [];
    }
}
images.list.push(newImage);


function Image(name, artist, year){
    this.name = name;
    this.artist = artist;
    this.year = year;
}; 

const newImage = new Image(); // Add parentheses to instantiate the "Image" object

let images = {
    list: [], // Define an empty array to store images
    contains: function(name){
        return images.list.some(image => image.name === name); // Use the "some" method to check if an image with the same name exists in the list
    },
    add: function(name, artist, year){
        if (!images.contains(name)) { // Use the "!" operator to check if an image with the same name does not exist in the list
            let addNew = {
                name: name, // Use ":" instead of "=" to assign values to the object properties
                artist: artist,
                year: year
            };
            images.list.push(addNew);
        }
    },
    show: function(){
        for(let i = 0; i < images.list.length; i++ ){ // Declare "i" with "let" to make it block-scoped
           console.log("Name: " + images.list[i].name + ", Artist: " + images.list[i].artist + ", Year: " + images.list[i].year + "."); // Correct typo: "console" instead of "consile"
        }
    },
    clear: function(){
        images.list = []; // Assign an empty array to the "list" property to clear all images
    }
};
images.list.push(newImage); // Add the "newImage" object to the "list" array
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();

// splice()method 
//Example 1: Remove elements from an array
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2); // removes 'banana' and 'cherry'
console.log(fruits); // Output: ['apple', 'date']
//Example 2: Add elements to an array
const colors = ['red', 'orange', 'yellow'];
colors.splice(2, 0, 'green', 'blue'); // inserts 'green' and 'blue' at index 2
console.log(colors); // Output: ['red', 'orange', 'green', 'blue', 'yellow']
//Example 3: Replace elements in an array
const nums = [1, 2, 3, 4, 5];
nums.splice(2, 2, 6, 7); // replaces '3' and '4' with '6' and '7'
console.log(nums); // Output: [1, 2, 6, 7, 5]
//Example 4: Remove elements from the end of an array
const letters = ['a', 'b', 'c', 'd'];
letters.splice(-2); // removes 'c' and 'd'
console.log(letters); // Output: ['a', 'b']
//Adding a method to an object
// Define a function that you want to add as a method
function greet() {
  console.log('Hello, world!');
}

// Define an object that you want to add the method to
const myObj = {
  name: 'John',
  age: 30
};

// Add the method to the object by assigning the function to a property of the object
myObj.sayHello = greet;

// Now you can call the method on the object
myObj.sayHello(); // Output: "Hello, world!"
//Adding a method to a prototype
newImage.prototype.show = function(){
 console.log("name: ",this.name, ", artist: ",this.artist, ", year: ", this.year, ".");  
}

// write your code here
function Image(name, artist, year){
    this.name = name;
    this.artist = artist;
    this.year = year;
};  
let newImage = new Image();

let images = {
    list: [], // Define an empty array to store images
    contains: function(name){
        return images.list.some(image => image.name === name); // Use the "some" method to check if an image with the same name exists in the list
    },
    add: function(name, artist, year){
        if (!images.contains(name)) { // Use the "!" operator to check if an image with the same name does not exist in the list
            let addNew = {
                name: name, // Use ":" instead of "=" to assign values to the object properties
                artist: artist,
                year: year
            };
            images.list.push(addNew);
        }
    },
    show: function(){
        for(let i = 0; i < images.list.length; i++ ){ // Declare "i" with "let" to make it block-scoped
           console.log("Name: " + images.list[i].name + ", Artist: " + images.list[i].artist + ", Year: " + images.list[i].year + "."); // Correct typo: "console" instead of "consile"
        }
    },
    clear: function(){
        images.list = []; // Assign an empty array to the "list" property to clear all images
    }
};
images.list.push(newImage); // Add the "newImage" object to the "list" array

function edit(name, artist, year){
  if(images.contains(name) === name){
   images.list.artist= artist,
   images.list.year= year
  };
 }
function del(name){
  if(images.contains(name) === name){
   images.list.splice(0,1);   
  }
 }
 images.edit = edit;
 images.del = del;
 
Image.prototype.show = function(){
 console.log("name: ",this.name, ", artist: ",this.artist, ", year: ", this.year, ".");  
}
images.show = newImage.show;


function edit(name, artist, year) {
  const image = images.list.find(image => image.name === name);
  if (image) {
    image.artist = artist;
    image.year = year;
  }
}

//// write your code here
function Image(name, artist, year){
    this.name = name;
    this.artist = artist;
    this.year = year;
};  
let newImage = new Image();

let images = {
    list: [], // Define an empty array to store images
    contains: function(name){
        for (let i = 0; i < images.list.length; i++) {
        if (images.list[i].name === name) {
        return true; // Return true if an image with the same name exists in the list
    }
  }
  return false;
    },
    add: function(name, artist, year){
        if (!images.contains(name)) { // Use the "!" operator to check if an image with the same name does not exist in the list
            let addNew = {
                name: name, // Use ":" instead of "=" to assign values to the object properties
                artist: artist,
                year: year
            };
            images.list.push(addNew);
        }
    },
    show: function(){
        for(let i = 0; i < images.list.length; i++ ){ // Declare "i" with "let" to make it block-scoped
           console.log("Name: " + images.list[i].name + ", Artist: " + images.list[i].artist + ", Year: " + images.list[i].year + "."); // Correct typo: "console" instead of "consile"
        }
    },
    clear: function(){
        images.list = []; // Assign an empty array to the "list" property to clear all images
    }
};
images.list.push(newImage); // Add the "newImage" object to the "list" array

function edit(name, artist, year){
    for(let i=0; i<images.list.length; i++)
  if(images.list[i].name === name){
   images.list[i].artist = artist,
   images.list[i].year = year
   break;
  }
 }
function del(name){
    for(let i = 0; i<images.list.length; i++)
  if(images.list[i].name === name){
   images.list.splice(i,1);
   break;
  }
 }
 images.edit = edit;
 images.del = del;
 
Image.prototype.show = function(){
 console.log("name: ",this.name, ", artist: ",this.artist, ", year: ", this.year, ".");  
}
images.show = newImage.show;

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.del('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)

// deep cloning
let deepClone = function(obj) {
let newObj = {...obj};
for(property in newObj) {
    if(typeof newObj[property] === "object") {
        newObj[property] = deepClone(newObj[property]);
    }
}
return newObj;
}

function deepComp(x, y) {
    if (typeof x !== typeof y) {
      return false;
    }
  
    if (typeof x === 'object' && x !== null && y !== null) {
      if (Object.keys(x).length !== Object.keys(y).length) {
        return false;
      }
  
      for (let property in x) {
        if (!deepComp(x[property], y[property])) {
          return false;
        }
      }
  
      return true;
    }
  
    return x === y;
  }
  let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false

// Class 1
let Vehicle = function(id, latitude, longitude){

    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    
    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    this.latitude = latitude;    
    this.longitude = longitude;
    
    };
    
    let vehicle1 = new Vehicle("AL1024", 59.358615, 17.947589);
    vehicle1.setPosition(59.367647, 18.213451);
    console.log(vehicle1);
  //Class2
  Let Vehicle = function({id, latitude, longitude}){

    this.setPosition = function({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    
    this.getPosition = function() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
    };
    
    let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
    let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
// class declaration
class AlmostEmptyClass {

    constructor(sth) {
        console.log(sth);
    };
    
    sayHi() {
        console.log("Hi!")
    };
    
    };
    
    let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
    almostEmptyObject.sayHi(); // -> Hi!
    // to check typeOf
    console.log(almostEmptyObject.constructor.name); // -> "AlmostEmptyClass"

    // Class declaration
    class Vehicle {

        constructor({id, latitude, longitude}){
            this.id = id;
        this.status = "unavailable";
            this.setPosition({latitude, longitude});
        };
        
        setPosition({latitude, longitude}) {
            this.time = Date.now();
            this.longitude = longitude;
            this.latitude = latitude;
        };
        
        getPosition() {
            return {
                latitude: this.latitude,
                longitude: this.longitude
            };
        };
        };
        
        let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
        vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
        console.log(vehicle.getPosition());
        //different function declaration metthod
        function namedFunction() { 
            console.log("I'm named, I hope ... ") 
            };
            
            let anonymousFunction = function() {
            console.log("I'm a bit anonymous ...")
            };
            
            let notExactlyAnonymousFunction = function anotherNamedFunction() {
            console.log("I'm confused ...")
            };
            
            namedFunction();	// -> I'm named, I hope ...
            anonymousFunction();	// -> I'm a bit anonymous ...
            notExactlyAnonymousFunction();	// -> I'm confused ...
// instanceOf
console.log(almostEmptyObject instanceof AlmostEmptyClass); // -> true
console.log(almostEmptyObject instanceof String); // -> false
let str = new String("test me");
console.log(str instanceof String); // -> true
// getter and setter
class Vehicle { 
constructor({id, latitude, longitude}){ 
    this.id = id; 
    this.position = {latitude, longitude}; 
    this.status = "unavailable"; 
};

set position({latitude, longitude}) { 
    this.time = Date.now(); 
    this.longitude = longitude; 
    this.latitude = latitude; 
};

get position() { 
    return { 
        latitude: this.latitude, 
        longitude: this.longitude 
    }; 

};
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position);
// inheriting a class using the 'extend' keyword and the 'super()' keyword to import properties from the base class
class Bus extends Vehicle {
constructor({seats, id, latitude, longitude}) {
    super({id, latitude, longitude});
    this.seats = seats;
}
}
let bus = new Car({seats: 4, longitude: 18.213423, latitude: 59.367628, id: "AL1024"}); 
console.log(bus.seats); // -> 4
console.log(bus.id); // -> "AL1024"

// inheriting a constructor function
let AlmostEmpty = function(sth) { 
console.log(sth); 
this.sayHi = function() { 
        console.log("Hi!") 
    }; 
};
class ExtendedClass extends AlmostEmpty {
    constructor(name) {
        super("I’m super ...");
        this.name = name;
    };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
};

let obj = new ExtendedClass("Bob");
obj.sayHi();    // -> Hi Bob!
// static members, they belong to the class and cannot be called with the created object
static sayHello() {
    console.log("Hello!")
};
almostEmptyObject.sayHello(); // error
AlmostEmptyClass.sayHello(); // -> Hello

//comparing classes and constructor: they have almost same functionalities
class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() {                         //this is like a prototype in constructor
        console.log("I'm prototyped!");
    };
    
    static showSth() { 
        console.log(`Hi, I'm static!`);
    };  
}; 

let test = new TestClass("Hello");
test.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!

console.log(test instanceof TestClass);
// the next code is for constructor
let Test = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    

Test.prototype.showSth = function() { 
    console.log("I'm prototyped!");
};
    
Test.showSth = function() {         // this is like static in class, they have same abilities
    console.log(`Hi, I'm static!`);
};  


let test = new Test("Hello");
test.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!

console.log(test instanceof Test);

// another better version of the constructor function
let Test = function(arg) { 
    this.arg = arg;
    this.showSth = function() {                 //can be accessed by the new objects created from the constructor
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
}; 
        
Test.showSth = function() {                 // can only be accessed by the constructor
    console.log(`Hi, I'm static!`);
};

class ExtendedUser extends User{
    get fullName(){
     return this.firstName + this.lastName    
    }
 set fullName(firstName, lastName){
  this.firstName = firstame;
  this.lastName = lastName;
 }
}


class User{
    constructor({name, surname, email, role}){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.info = [];
    };
    addCourse({course, level}){
       if(isNaN(level)){
           throw new TypeError("level must be a number"); 
        }
       this.courses.push({course, level});   
    };
    removeCourse(course){
        for(let i=0; i<this.courses.length; i++){
        if(this.courses[i].course === course){
           this.courses.splice(i,1);
           return;
        }
       }
    };
    editCourse(course, level){
       for(let i=0; i<this.courses.length; i++){
         if(this.courses[i].course === course){
           this.courses.splice(i,1,{course: course, level: level});  
         }
       }
    };
    sendMessage({from, message}){
        const to = this.email;
        sendEmail(from, to, message)
        this.info.push({from, to, message});
    };
    showMessagesHistory(){
     return this.info;   
    };
   }
   function sendEmail(from, to, message) {
    console.log("email from ", from, ", to ", to, ": ", message);
  }
   let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
   let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
   let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});
   
   student1.addCourse({course: 'maths', level: 2});
   student1.addCourse({course: 'physics',level: 1});
   student1.removeCourse('physics');
   teacher1.addCourse({course: 'biology',level: 3});
   teacher1.editCourse({course: 'biology',level: 4});
   console.log(student1.name," :", student1.courses.length, "courses");
   console.log(teacher1.name," :", teacher1.courses.length, "courses"); // -> Paula: 1 courses
   teacher1.sendMessage({from: student1.email, message: 'test message'});
   teacher1.sendMessage({from: student2.email, message: 'another message'});
   student1.showMessagesHistory();


//Best code for the Lab work 1
class User{
    constructor({name, surname, email, role}){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.msgInfo = [];
    }
    addCourse({course, level}){
        if(isNaN(level)){
        throw new TypeError("level must be a number");
        }
        this.courses.push({course,level});
    };
    removeCourse(course){
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses.splice(i, 1);
                break;
            } 
        }
    };
    editCourse({course, level}){
        for (let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].course === course){
                this.courses[i].level = level;
                break;
            }
            
        }
    };
    sendMessage({from, message}){
        const to = this.email;
        sendEmail({from, to, message})
        this.msgInfo.push({from, to, message});
    };
    showMessageHistory(){
        return this.msgInfo;
    };
}
function sendEmail({from, to, message}){
       console.log("email from: "+ from + " to: " + to + " message: " + message);
}
let teacher = new User({name: "Samuel", surname: "Ojo", email: "samoj@gmail.com", role: "Teacher"});
let student = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
teacher.addCourse({course: "Math", level: 2});
teacher.addCourse({course: "English", level: 4});
teacher.addCourse({course: "Biology", level: 3});
student.addCourse({course: "Math", level: 2});
student.addCourse({course: "Physics", level: 4});
student.addCourse({course: "Chemistry", level: 3});
teacher.removeCourse("English");
teacher.editCourse({course: "Math", level: 5});
for(let i=0; i<teacher.courses.length; i++){
    console.log("Teacher's Course info: " + "course: "+ teacher.courses[i].course + ", " + "level:", teacher.courses[i].level);
}
for(let i=0; i<student.courses.length; i++){
    console.log("students' course info: " +"course: "+ student.courses[i].course + ", " + "level:", student.courses[i].level);
}
teacher.sendMessage({From: student.email, message:  'test message'});
teacher.sendMessage({from: student.email, message: 'another message'});
teacher.showMessageHistory();

// Code for lab work 2

class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.msgInfo = [];
    }
    addCourse({ course, level }) {
        if (isNaN(level)) {
            throw new TypeError("level must be a number");
        }
        this.courses.push({ course, level });
    };
    removeCourse(course) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses.splice(i, 1);
                break;
            }
        }
    };
    editCourse({ course, level }) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }

        }
    };
    sendMessage({ from, message }) {
        const to = this.email;
        sendEmail({ from, to, message })
        this.msgInfo.push({ from, to, message });
    };
    showMessageHistory() {
        return this.msgInfo;
    };
}
function sendEmail({ from, to, message }) {
    console.log("email from: " + from + " to: " + to + " message: " + message);
}
class ExtendedUser extends User {
    constructor({ firstName, lastName }) {
        super({ name: firstName, surname: lastName })
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return "fullName: " + this.firstName + " " + this.lastName;
    };
    set fullName(fullName) {
        const newArray = fullName.split("");
        this.firstName = newArray[0];
        this.lastName = newArray[1];
    }
}
class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Teacher";
    }
}
class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Student";
    }
}
let student1 = new Student({ name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com' });
let student2 = new Student({ name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com' });
let teacher1 = new Teacher({ name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com' });
teacher1.addCourse({ course: "Biology", level: 3 });
student1.addCourse({ course: "Math", level: 2 });
teacher1.editCourse({ course: "Chemistry", level: 4 });
console.log(student1.fullName + ", " + student1.courses.length + " Course");
console.log(teacher1.fullName + ", " + teacher1.courses.length + " Course");
student1.fullName = 'Rafael Fifer';
console.log(student1.fullName + ", " + student1.courses.length + " Course");

// Code for lab work 3
class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.msgInfo = [];
    }
    addCourse({ course, level }) {
        if (isNaN(level)) {
            throw new TypeError("level must be a number");
        }
        this.courses.push({ course, level });
    };
    removeCourse(course) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses.splice(i, 1);
                break;
            }
        }
    };
    editCourse({ course, level }) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }

        }
    };
    sendMessage({ from, message }) {
        const to = this.email;
        sendEmail({ from, to, message })
        this.msgInfo.push({ from, to, message });
    };
    showMessageHistory() {
        return this.msgInfo;
    };
}
function sendEmail({ from, to, message }) {
    console.log("email from: " + from + " to: " + to + " message: " + message);
}
class ExtendedUser extends User {
    constructor({ firstName, lastName }) {
        super({ name: firstName, surname: lastName })
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return "fullName: " + this.firstName + " " + this.lastName;
    };
    set fullName(fullName) {
        const newArray = fullName.split("");
        this.firstName = newArray[0];
        this.lastName = newArray[1];
    }
    static match(teacher, student, course){
        const coursesInCommon = [];
        for (let i = 0; i < teacher.courses.length; i++) {
            const teacherCourse = teacher.courses[i];
            for (let j = 0; j < student.courses.length; j++) {
                const studentCourse = student.courses[j];
                if (teacherCourse.course === studentCourse.course && 
                    course === undefined || teacherCourse.course === course) {
                        coursesInCommon.push(teacherCourse);
                    
                }
                
            }
            
        }
        return coursesInCommon;
    }
}
class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Teacher";
    }
}
class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Student";
    }
}
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse({ course: "physics", level: 4 });
student1.addCourse({ course: "Math", level: 2 });
teacher1.addCourse({ course: "Math", level: 4 });
let match = ExtendedUser.match(teacher1, student1);
console.log(match);
teacher1.editCourse({course: "Math", level: 1});
match = ExtendedUser.match(teacher1, student1);
console.log(match);
teacher1.addCourse({course: "Physics", level: 4});
match = ExtendedUser.match(teacher1, student1, "Physics");
console.log(match);

// Code for lab work 4
class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.msgInfo = [];
    }
    addCourse({ course, level }) {
        if (isNaN(level)) {
            throw new TypeError("level must be a number");
        }
        this.courses.push({ course, level });
    };
    removeCourse(course) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses.splice(i, 1);
                break;
            }
        }
    };
    editCourse({ course, level }) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }

        }
    };
    sendMessage({ from, message }) {
        const to = this.email;
        sendEmail({ from, to, message })
        this.msgInfo.push({ from, to, message });
    };
    showMessageHistory() {
        return this.msgInfo;
    };
}
function sendEmail({ from, to, message }) {
    console.log("email from: " + from + " to: " + to + " message: " + message);
}
class ExtendedUser extends User {
    constructor({ firstName, lastName }) {
        super({ name: firstName, surname: lastName })
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return "fullName: " + this.firstName + " " + this.lastName;
    };
    set fullName(fullName) {
        const newArray = fullName.split("");
        this.firstName = newArray[0];
        this.lastName = newArray[1];
    }
    static match(teacher, student, course) {
        const coursesInCommon = [];
        for (let i = 0; i < teacher.courses.length; i++) {
            const teacherCourse = teacher.courses[i];
            for (let j = 0; j < student.courses.length; j++) {
                const studentCourse = student.courses[j];
                if (teacherCourse.course === studentCourse.course &&
                    course === undefined || teacherCourse.course === course) {
                    coursesInCommon.push(teacherCourse);

                }

            }

        }
        return coursesInCommon;
    }
}
class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Teacher";
    }
}
class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Student";
    }
}
class Tutoring extends ExtendedUser {
    constructor({name, surname, email}) {
        super({firstName: name, lastName: surname, email: email});
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.teachers = [];
        this.students = [];
    }
    getStudentByName(name, surname) {
        let retVal;
        for (let student of this.students) {
            if (student.name === name && student.surname === surname) {
                retVal = student;
            }
        } return retVal;
    }
    getTeacherByName(name, surname) {
        let retVal;
        for (let teacher of this.teachers) {
            if (teacher.name === name && teacher.surname === surname) {
                retVal = teacher;
            }
        } return retVal;
    }
    getStudentsForTeacher(teacher) {
        let retVal = [];
        for (let student of this.students) {
            if (ExtendedUser.match(teacher, student).length) {
                retVal.push(student);
            }
        } return retVal;
    }
    getTeacherForStudent(student) {
        let retVal = [];
        for (let teacher of this.teachers) {
            if (ExtendedUser.match(teacher, student).length) {
                retVal.push(teacher);
            }
        } return retVal;
    }
    addStudent({name, surname, email}) { 
        this.students.push(new Student({name, surname, email})); 
    } 
    addTeacher({name, surname, email}) { 
        this.teachers.push(new Teacher({name, surname, email})); 
    } 
}
let tutoring = new Tutoring({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});
let student = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});
tutoring.addStudent({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
tutoring.addStudent({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
tutoring.addTeacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});
student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse({ course: "Math", level: 2 });
student.addCourse({ course: "physics", level: 4 });
teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse({ course: "Math", level: 4 });
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

// Code for lab work 5
class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.msgInfo = [];
    }
    addCourse({ course, level }) {
        if (isNaN(level)) {
            throw new TypeError("level must be a number");
        }
        this.courses.push({ course, level });
    };
    removeCourse(course) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses.splice(i, 1);
                break;
            }
        }
    };
    editCourse({ course, level }) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }

        }
    };
    sendMessage({ from, message }) {
        const to = this.email;
        sendEmail({ from, to, message })
        this.msgInfo.push({ from, to, message });
    };
    showMessageHistory() {
        return this.msgInfo;
    };
}
function sendEmail({ from, to, message }) {
    console.log("email from: " + from + " to: " + to + " message: " + message);
}
class ExtendedUser extends User {
    constructor({ firstName, lastName }) {
        super({ name: firstName, surname: lastName })
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return "fullName: " + this.firstName + " " + this.lastName;
    };
    set fullName(fullName) {
        const newArray = fullName.split("");
        this.firstName = newArray[0];
        this.lastName = newArray[1];
    }
    static match(teacher, student, course) {
        const coursesInCommon = [];
        for (let i = 0; i < teacher.courses.length; i++) {
            const teacherCourse = teacher.courses[i];
            for (let j = 0; j < student.courses.length; j++) {
                const studentCourse = student.courses[j];
                if (teacherCourse.course === studentCourse.course &&
                    course === undefined || teacherCourse.course === course) {
                    coursesInCommon.push(teacherCourse);

                }

            }

        }
        return coursesInCommon;
    }
}
class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Teacher";
    }
}
class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ firstName: name, lastName: surname, email: email })
        this.role = "Student";
    }
}
class Tutoring extends ExtendedUser {
    constructor({name, surname, email}) {
        super({firstName: name, lastName: surname, email: email});
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.teachers = [];
        this.students = [];
    }
    getStudentByName(name, surname) {
        let retVal;
        for (let student of this.students) {
            if (student.name === name && student.surname === surname) {
                retVal = student;
            }
        } return retVal;
    }
    getTeacherByName(name, surname) {
        let retVal;
        for (let teacher of this.teachers) {
            if (teacher.name === name && teacher.surname === surname) {
                retVal = teacher;
            }
        } return retVal;
    }
    getStudentsForTeacher(teacher) {
        let retVal = [];
        for (let student of this.students) {
            if (ExtendedUser.match(teacher, student).length) {
                retVal.push(student);
            }
        } return retVal;
    }
    getTeacherForStudent(student) {
        let retVal = [];
        for (let teacher of this.teachers) {
            if (ExtendedUser.match(teacher, student).length) {
                retVal.push(teacher);
            }
        } return retVal;
    }
    addStudent({name, surname, email}) { 
        this.students.push(new Student({name, surname, email})); 
    } 
    addTeacher({name, surname, email}) { 
        this.teachers.push(new Teacher({name, surname, email})); 
    } 
}
class ExtendedTutoring extends Tutoring{
    constructor({name, surname, email}) {
        super({firstName: name, lastName: surname, email: email});
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    sendMessages({from, to, message}){
        this.msgInfo.push({ from, to, message });
    }
}
let tutoring = new ExtendedTutoring({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});
tutoring.addStudent({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
tutoring.addStudent({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
tutoring.addTeacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessageHistory();
}

