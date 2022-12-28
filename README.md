# Etch-a-Sketch

* [Live Demo](https://ajwjung.github.io/etch-a-sketch/)

## Objective

To create a browser version of something between a sketchpad and an Etch-A-Sketch. Full details can be found on [The Odin Project's page](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

### Specifications

**Requirements**

1. The webpage should begin with a 16x16 grid of square divs

2. Hovering over each div should change their background color, leaving a trail

3. There should be a button at the top of the screen that sends the user a popup asking for the number of squares per side for the new grid
    * The new grid should take up the same total space as the original one

**Optional** 
1. Use a completely random RGB value to change the color of the square

2. Each pass through, add another 10% of black to it such that after 10 passes, the square is completely black

## Author's Notes

This was a really fun project that taught me a lot along the way. There were many features I wanted to implement and struggled with, but eventually figured out. Some of those features include:

1. A clear button that clears the contents of the grid

2. A help button that brings up a popup information box
    * Help button should be disabled when info box is open

3. A backdrop that prevents user interaction with anything outside of the info box when said box is open

The latter two features were the biggest challenges for me. I was often very close to making the feature work but just couldn't.
* With the help button, I had to spend more time learning about how to use the buttons to toggle on/off classes and also disable buttons using `button.disabled = true/false;`
* With the backdrop, I spent a while trying to figure out where to properly put an outer div such that it would cover the entire background without also hiding the info box. Eventually I realized I could achieve the effect I wanted by simply putting one outside of the info box div and setting its height/width to the dimensions of the page.

Aside from those features, a few other tweaks I made were:

1. Added a reset button to reset the grid to 16x16

2. Changed the "hover" effect so that the background color remains changed after mouseout

Side note, another thing I learned that I thought was pretty cool and useful was you can set up a conditional (e.g., `userInput === null`) to detect whether the user canceled input in a prompt box. I wanted to add an error message if the user tried to create a grid larger than 100x100 but the error would also pop up if the user clicked cancel. Adding the conditional allowed me to ignore the cancel.

**Next Steps**

This was a very rewarding project for me and moving forward, I hope to try to implement the optional color changes.
