alert('Hello!');

/*

Code for manipulating the DOM
//selects 1st element in body tag: <h1 class=​"title">​Hello​</h1>​
document.firstElementChild.lastElementChild.firstElementChild;
//assign this element to var heading
var heading = document.firstElementChild.lastElementChild.firstElementChild;
//change the contents of the element
heading.innerHTML="Good bye";
//change the font weight property to "700"
heading.style.fontWeight=700;
//change the font family property to "Bitter"
heading.style.fontFamily="Bitter";
//change the color property to "indigo"
heading.style.color="indigo";
//select the input tag element call the click method on it
document.querySelector("input").click();

*/
//document.getElementsByTagName("a") gives an array of a tags
var focusItem = document.getElementsByTagName("a")[1];
focusItem.innerHTML = "Yahoo";
