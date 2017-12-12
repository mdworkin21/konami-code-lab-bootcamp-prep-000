const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


const body = document.getElementsByTagName('body')

document.body.addEventListener("keydown", init)

let index = 0

function init(){
  let key = keydown.key;

  if (key === code[index]){
    while (key === code[index]){
      index++

      if (key ===code.length){
        alert("YAY!")
      }
    }
  } else{
    index = 0
  }

}
















//tasks//
//create event listener for keyboard//
//create a function that listens for a specific event //
    //if that occurs, enter a function that listens for a second event//
      //and so on//
        //create a function so that if code is completed, an alert with message gets printed//
//if code is not entered properly, listener events always restart//
