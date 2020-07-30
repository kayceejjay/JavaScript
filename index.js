document.getElementsByTagName("li");

var clickButton = document.getElementsByClassName("btn")[0];

clickButton.style.color = "fuchsia";

var focusItem = document.getElementsByClassName("title")[0];

focusItem.innerHTML = "Good Bye";

focusItem.style.color = "orchid";

document.querySelectorAll("li a")[0].style.color = "red";

document.querySelectorAll("li")[1].style.fontWeight = "700";

clickButton.style.backgroundColor = "#ffff80";

clickButton.style.borderRadius = "20px";

clickButton.style.fontWeight = "700";

//Function to toggle the button invisible and visible
const onOff = () => {clickButton.classList.toggle("invisible")};
//Toogle .invisible one way
onOff();
//Toogle .invisible the other way
onOff();

const deltaSize = () => { focusItem.classList.toggle("huge-1") };

focusItem.innerHTML = "Preferred Search Engines";

var touchList1 = document.querySelectorAll("a")[1];

touchList1.innerHTML = "Bing";

const deltaLink1 = () => { touchList1.setAttribute("href","https://www.bing.com") };

deltaLink1();

var touchList2 = document.querySelectorAll("a")[2];

touchList2.innerHTML = "Yahoo";

const deltaLink2 = () => { touchList2.setAttribute("href","https://www.yahoo.com") };

deltaLink2();


/*For Opener Div*/
//jquery()
//Position
//$("h1").css("color","red") is equivalent to document.querySelector("h1").style.color = "red"
//Check to see that jquery library has been loaded and is active before executing any code
$(document).ready( function() { $("h1").css("color","red"); } )
$("h1").addClass("huge-2");
$("h1").text("Hello");
//$("button").html("<em>Don't Click Me</em>");
$(".alter").attr("href","https://yahoo.com");
$(".alter").text("Search");
$(".alter").css("font-style","oblique");
