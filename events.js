/*In this activity you should only have a main tag in your HTML with three 
buttons inside. All other HTML should be created with JavaScript.

To complete the activity, you will need to do the following:

Make an empty HTML file, put three buttons inside the body and an empty main
tag below the buttons. The text of the buttons should be "Foo", "Bar", and 
"FooBar" respectively. Don't put the " in the buttons that's just for clari
fication in these instructions. Add unique IDs to each button

In your JavaScript, get 3 separate references to the buttons using the IDs 
you made and store them in variables. You should use either 
document.querySelector or document.getElementByID, both will work.

Create a click event listener on each button.
When the "Foo" button is clicked, an h3 with the text "Foo" should be 
created and appended to the main tag. 
When the "Bar" button is clicked, an h3 with the text "Bar" should be 
created and appended to the main tag.
When the "Foobar" button is clicked, an h2 with the text "FooBar" should be 
created and appended to the main tag
*/
const fooButton = document.getElementById("foo");
const barButton = document.getElementById("bar");
const foobarButton = document.getElementById("foobar");

fooButton.addEventListener("click", function(){
    const h3 = document.createElement("h3")
    h3.textContent = "Foo";
    document.querySelector("main").appendChild(h3);
});

barButton.addEventListener("click", function(){
    const h3 = document.createElement("h3")
    h3.textContent = "Bar";
    document.querySelector("main").appendChild(h3);
});

foobarButton.addEventListener("click", function(){
    const h2 = document.createElement("h2")
    h2.textContent = "FooBar";
    document.querySelector("main").appendChild(h2);
});