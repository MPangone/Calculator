function addCharacter(character){
  const displayValue = document.querySelector(".display").value;

  document.querySelector(".display").value = displayValue + character;
}

function clearScreen(){
  document.querySelector(".display").value = "";
}

function calculate(){
  const displayValue = document.querySelector(".display").value;

  document.querySelector(".display").value = eval(displayValue);
}

function invertNumber(){
  const displayValue = document.querySelector(".display").value;

  document.querySelector(".display").value = displayValue * -1;
}