Simon Game
==========
1. A keypress activates the game
2. Flashing tile indicates which tile to click
3. Click on the flashing tile to continue the game
3. Move from level to level
4. As levels progress, tiles flash faster and/or multiple tiles flash sequentially
5. Click on the wrong tile & Game Over

*See game at <https://londonappbrewery.github.io/Simon-Game/>*

<!--========================================================================================================-->

##Step 1 - Add JavaScript and jQuery

  Our game logic will be created inside an external JavaScript file.

1.  Create a new file called game.js

2.  Link to this new external JS file from your index.html

3.  Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.

    Once, you've confirmed that game.js is correctly linked, you can delete or comment out the alert.

4.  Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")

<!--========================================================================================================-->

##Step 2 - Create A New Pattern

1.  Inside game.js create a new function called nextSequence()

2.  Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

    You can use the Chrome console to verify that your code creates random numbers between the correct range.

3.  At the top of the game.js file, create a new array called buttonColors and set it to hold the sequence "red", "blue", "green", "yellow" .

4.  Create a new variable called randomChosenColor and use the randomNumber from step 2 to select a random color from the buttonColors array.

5.  At the top of the game.js file, create a new empty array called gamePattern.

6.  Add the new randomChosenColor generated in step 4 to the end of the gamePattern.

Note: If you need any hints, try scrolling down. 👇

<!--========================================================================================================-->

##Hints
Hint 1. Remember this is how you create and call functions in JavaScript:

Hint 2A. Remember this is how you generate random numbers between 0 and 0.9999...

Hint 2B. Remember this is how you round down a number.

Hint 3. Remember this is how arrays are created in JavaScript:

Hint 4. Remember this is how you select items inside arrays:

Hint 6. Remember this is how you add new items to arrays:

<!--========================================================================================================-->

Step 3 - Show the Sequence to the User with Animations and Sounds

1. Use jQuery to select the button with the same id as the randomChosenColour

2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

You should end up with an effect like this:

3. Use Google/Stackoverflow to figure out how you can use JavaScript to play the sound for the button color selected in step 1.

Note: If you need any hints, try scrolling down. 👇


Hint 1. Remember that to select ids with jQuery you need the "#" symbol.

https://api.jquery.com/id-selector/

Hint 2. https://www.google.co.uk/search?q=animate+flash+jQuery

Hint 3. https://www.google.co.uk/search?q=play+sound+javascript

<!--========================================================================================================-->

Step 4 - Check Which Button is Pressed

1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

--> So if the Green button was clicked, userChosenColour will equal its id which is "green".

3. At the top of the game.js file, create a new empty array with the name userClickedPattern.

4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.

Note: If you need any hints, try scrolling down. 👇



Hint 1A. Remember that all the buttons share the same class (btn).

Hint 1B. Remember that jQuery has a .click() function: https://api.jquery.com/click/

Hint 1C. jQuery handlers are anonymous functions: https://api.jquery.com/click/#click-handler

Hint 2A. Inside the handler, you can use the keyword this to refer to the button object that triggered the click.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

Hint 2B. You can use the attr() function in jQuery to find out the value of any of the attributes of an object. https://api.jquery.com/attr
