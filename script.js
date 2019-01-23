// ## Lightning Exercise Two
// 1. Create a JavaScript file and link it to your `index.html` file.
// 2. Use `document.querySelector` to get a reference to the element with an id of "main-header"
// 3. Log the reference to the console
// 4. Add a class of "blue-text" to the element


const russell = {
    lastName: "Miller",
    age: 32
}

console.log(document.querySelector("#main-header"));

document.querySelector("#main-header").classList.add("blue-text");

document.querySelector("#main-header").innerHTML = `This should ne blue Mr. ${russell.lastName} and you are ${russell.age} years old`;


// ## Lightning Exercise Three
// 1. In your JavaScript file, use `document.querySelectorAll` to select all of the elements in your HTML file with a class of "body-text"
// 1. Log the reference to the console
// 1. Loop through the NodeList of elements and set the `.innerHTML` property of each element to "Hello,


const allBody = document.querySelectorAll("p");
console.log(allBody);


for(let i=0; i<allBody.length; i++){
    allBody[i].innerHTML = "<h1>bye</h1>"
}