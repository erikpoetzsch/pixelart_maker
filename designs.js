// select the color inpud
const clrInput = document.querySelector("#colorPicker");
clrInput.addEventListener("change", colorSelection, false);
const canvas = document.querySelector("#PixelCanvas");

//selecting the color
function colorSelection(){
  let clrChoice = clrInput.value;
  canvas.style.color = clrChoice;
  return clrChoice;

}



// select the inputsize  - When size submitted by the user, call makeGrid()
const submit = document.querySelector("[type='submit']");
submit.addEventListener("click", makeGrid);

function makeGrid(event) {  // creating the canvas with the submitted values
  ClearCanvas(); //clears the canvas when "submit" is clicked
  const h = document.getElementById("inputHeight").value;
  const w = document.getElementById("inputWidth").value;
  event.preventDefault();
  for (let i =0; i < h; i++){
    let createRow = document.querySelector("#PixelCanvas").insertRow();
    for (let j = 0; j < w; j++){
      createRow.insertCell();
    }

  }


//manipulating the cell to change the color to the selected color
  document.getElementById('PixelCanvas').addEventListener("click", function(event) {

  	if(event.target && event.target.nodeName == "TD") {

      event.target.style.backgroundColor = colorSelection();
  	}
  });
  console.log(h, w);

}

//function to clear the canvas by removing the childs
function ClearCanvas(){
        let clr = document.getElementById("PixelCanvas");
	while (clr.tBodies[0].hasChildNodes()) {
		clr.tBodies[0].removeChild(clr.tBodies[0].lastChild);
	}
}
