slider = document.getElementById("height")
slider.oninput = function() {

    // figure out the height the user typed
    heightStr = document.getElementById("height").value

    // convert the string to an int
    height = parseInt(heightStr);

    // draw pyramid with that height
    drawPyramid(height);
}

 function drawPyramid(height) {

     // first, clear the old content
     document.getElementById("pyramid").innerHTML = "";
        
            // height is the number of rows. For each row...
            for (var row = 0; row < height; row++) {
        
                // figure out how many bricks in this row (aka the '#' characters)
                var numBricks = row + 2;
        
                // figure out how many space characters
                var numSpaces = height - row - 1;
        
                // build up a string for this row. Starts empty...
                var rowStr = "";
        
                // add the spaces
                for (var i = 0; i < numSpaces; i++) {
                    rowStr += ".";
                }
        
                // add the bricks
                for (var i = 0; i < numBricks; i++) {
                    //rowStr = document.getElementById("charChoice").value;
                    rowStr += "#";
                }

                // create a text element with the string of characters
                textElem = document.createTextNode(rowStr);
        
                // create a <p> element with the text inside
                rowElem = document.createElement("p");
                rowElem.appendChild(textElem);
        
                // insert the paragraph as a child of the container <div>
                document.getElementById("pyramid").appendChild(rowElem);
            }
        
                
            }