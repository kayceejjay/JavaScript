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

const deltaSize = () => { focusItem.classList.toggle("huge") };
