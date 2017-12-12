const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


const getElement = document.getElementsByTagName('body')

let index = 0

function init(e){

  if (code[index] === e.which || code[index] === e.detail){
    index++

  if (index === code.length){
    alert("Yay!")
    index = 0
  } else {
    index = 0
  }}}

document.addEventListener("keydown", init)
















//tasks//
//create event listener for keyboard//
//create a function that listens for a specific event //
    //if that occurs, enter a function that listens for a second event//
      //and so on//
        //create a function so that if code is completed, an alert with message gets printed//
//if code is not entered properly, listener events always restart//
