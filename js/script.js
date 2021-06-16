//alert('connected well');

var education = ()=>{
 var schoolName = "Riverland Community College";
 var degreeOne = "A.A.S degree in Software programming";
 var degreeTwo = "A.A.S degree in Computer Technology";
 var graduated = "May 2021";
 var greeting = "Hi I am Nahom Abebe. I graduated from " + schoolName;
 var comulativeGpa = 3.6;


 return greeting + " in " + degreeOne + " and " + degreeTwo + " in " + graduated + ". My  Gpa is " + comulativeGpa;
}
var firstParar = document.getElementById("first");
firstParar.innerHTML = education();

firstParar.addEventListener("click", function(){
    this.style.backgroundColor = "purple";
})

 
var day = new Date();
var yearNow = day.getFullYear();

document.querySelector("#date").innerText = day;

//Creating many object constructor
function Kids(name, age, school){
    this.name = name;
    this.age = age;
    this.school = school;
    this.wasBorn = function(){
        return yearNow - age;
    };
}

var mySon = new Kids("Michale", 5, "Woodson Kindergarten");
var myDaughter = new Kids("Elizabeth", 3, "she stay home");
document.getElementById("kids").innerText = mySon.name + " is going to " + mySon.school + " and he is " + mySon.age + "years old" +  " and his sisters name is " + myDaughter.name;

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("developer");
  document.body.insertBefore(newDiv, currentDiv);
  
}
// random number between 0 and 1
function getRandom(){
    return Math.random();

}

function getRandomArbitrary(min, max){
return Math.random() * (max - min) + min;
}

