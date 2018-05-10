console.log("Simple hello");
console.log("String Interpolatation %s", "TRUE");
console.log("%c STYLE TEXT 😎 ", "font-size: 50px; color: #008080; font-weight: bold; border: 2px solid black; margin: 10px; padding: 20px;");
console.warn("Warning Console");
console.error("Error Console");
console.assert(-2 >= 1 ,"Assert will only fire if something is false");
console.info("Info console");

const h = document.querySelector("h1");

console.log(h);
console.dir(h);

var dogs = [
    {name: "Adam", age: 11},
    {name: "Sam", age: 12},
    {name: "Tomy", age: 13},
    {name: "Alexa", age: 14},
    {name: "Gruther", age: 8},
    {name: "Biggi", age: 6},
];  

console.log(dogs);

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name} `);
    console.log(`Name is ${dog.name}`);
    console.log(`Age is ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});

console.count("wes");
console.count("wes");
console.count("wes");
console.count("wes");
console.count("Adam");
console.count("wes");
console.count("Adam");

console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
.then(raw_data => raw_data.json())
.then(data => {
    console.timeEnd("fetching data");
    console.log(data);
});
