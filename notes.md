###Placement of tag IMPORTANT
CSS external stylesheet link must be placed in head element of html
JavaScript via script tags should be placed at the absolute bottom of the body before the closing body tag </body>. In most cases, DOM elements must already exist because the JavaScript is going to reference and act upon them. They must be already present.

###DOM
##Document Object Model -
catalogs the web page into individual elements that can be manipulated and makes it possible to interact with the website.

It is the responsibility of the web browser of converting an HTML file into the DOM the when a page is loaded. It turns each of the html elements and their associated data into a tree structure with a myriad of objects that can be selected and/or manipulated. The DOM is usually represented in this tree structure. The tree structure depicts the various html objects and their relationships.

DOM objects have:
Properties - describe attributes of the objects
Methods - are what objects can do

Example -
Object Car
Properties - color, size
Methods - drive(),brake()

Use dot notation to select and manipulate object properties and methods - object.property, object.method()
Get Property - To get the value of an objects property use getter; e.g. car.color
Set Property - To assign a value to a property; e.g. car.color = "indigo"
Call Method -  To call a method on an object; e.g. car.drive()

A method is a function specific to or associated with an object. Examples of common JavaScript methods are:
- click()
- appendChild()
- setAttribute()

Get Methods containing Elements outputs an array and have to be treated accordingly; e.g.:
- getElementsByTagName
- getElementsByClassName

Get Method containing Element output a single item; e.g.:
getElementById()

querySelector() also outputs a single item identifying a specific CSS selector. A CSS selector is the item prepending the curly brackets {} in a CSS stylesheet, e.g.:

  a {text-decoration: none;}
  #title {color: red;}
  .item {margin-top: 10px;}

querySelector() allows the combination or chaining of selectors for range and specificity

querySelectorAll() outputs an array of items (nodes) that match the query.

querySelector() & querySelectorAll allows for variation and complexity in identifying elements to use.

JavaScript styling attributes different from CSS. Whereas CSS attribute names may use a hyphen, e.g. font-weight, JavaScript names may use camelCase, e.g. fontWeight. Similarly, the associated values in JavaScript must be inputted as a string.

URL
