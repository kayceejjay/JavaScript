Simon Game
==========
1. Show tile to click
2. Move from level to level
3. More complicated
4. Make error & Game Over

See game at <https://londonappbrewery.github.io/Simon-Game/>

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

3.  At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

4.  Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

5.  At the top of the game.js file, create a new empty array called gamePattern.

6.  Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

Note: If you need any hints, try scrolling down. 👇

<!--========================================================================================================-->

##Hints
Hint 1. Remember this is how you create and call functions in JavaScript:

Hint 2A. Remember this is how you generate random numbers between 0 and 0.9999...

Hint 2B. Remember this is how you round down a number.

Hint 3. Remember this is how arrays are created in JavaScript:

Hint 4. Remember this is how you select items inside arrays:

Hint 6. Remember this is how you add new items to arrays:
