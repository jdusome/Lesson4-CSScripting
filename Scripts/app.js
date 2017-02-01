/* JavaScript lives here */

console.log("App Started");

//declare and initialize the firstHeading variable
//the firstHeading variable creates a reference the h1 element on the page
var firstHeading = document.getElementById("firstHeading");

firstHeading.style.color = "#FF00FF";
firstHeading.style.fontWeight = "500";
firstHeading.style.fontStyle = "italic";
firstHeading.style.opacity = "0.5";

//I can now use my firstHeading variable as if it is the element
// DON'T USE ALERTS!!
//window.alert(firstHeading.textContent);

// DON'T USE DOCUMENT.WRITE (you may get inconsistent results)
//document.write(firstHeading.textContent);

//this is okay!!

/*
console.log(firstHeading.textContent);

console.info("Here is the info!");
console.error("An error occured!");
console.debug("Debugging information!");

var MainContentDiv = document.getElementById("MainContentDiv");
var MainContentDivInnerHTML = MainContentDiv.textContent;

console.log(MainContentDivInnerHTML);
*/

//THREE STEPS FOR INJECTING CONTENT ONTO page
//STEP 1 - Create a reference to an element (reference variable)
var FirstParagraph = document.getElementById("firstParagraph");
var SecondParagraph = document.getElementById("secondParagraph");

//STEP 2 - Create a variable that contains CONTENT (content variable)
var myContent = "It was a sunny day in Florida. It felt great. I love the sun.";
var myHTMLContent = "<h2>Second Heading</h2>"
                    + "<p>This is an inner paragraph to the second paragraph</p>";

//STEP 3 - Assign the variable with your content to the textContent property of the reference variable (operation)
FirstParagraph.textContent = myContent;
SecondParagraph.innerHTML = myHTMLContent;

//Assigns the button in our index to a variable
var clickMeButton = document.getElementById("clickMeButton");

//adds an event listener to trigger when the clickMeButton is clicked. It will call the Click function.
clickMeButton.addEventListener("click", Click);

// create a Click function, which will log to the console when we click. Used as an event handler.
function Click() {
    console.log("Clicked...");
}
