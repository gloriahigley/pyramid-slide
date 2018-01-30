
function slideFunction(val){
    document.getElementById("sliderid").innerHTML = val;
}

document.getElementById("charChoice").addEventListener("change",switchChars);

function switchChars(){
    var char = document.getElementById("charChoice").value;

    slider = document.getElementById("height")

    heightStr = document.getElementById("height").value

    height = parseInt(heightStr);

    drawPyramid(height);

document.getElementById("height").addEventListener("input",sliderMoves);
    
    function sliderMoves(){
        var char = document.getElementById("charChoice").value;
        
        slider = document.getElementById("height")
    
        heightStr = document.getElementById("height").value
    
        height = parseInt(heightStr);
    
        drawPyramid(height);
    }

 function drawPyramid(height) {

    var char = document.getElementById("charChoice").value;    

     document.getElementById("pyramid").innerHTML = "";
        
            for (var row = 0; row < height; row++) {
        
                var numBricks = row + 2;
        
                var numSpaces = height - row - 1;
        
                var rowStr = "";
        
                for (var i = 0; i < numSpaces; i++) {
                    rowStr += ".";
                }
        
                for (var i = 0; i < numBricks; i++) {
                    rowStr += char;
                }

                textElem = document.createTextNode(rowStr);
        
                rowElem = document.createElement("p");
                rowElem.appendChild(textElem);
        
                document.getElementById("pyramid").appendChild(rowElem);
            }
        }
    }