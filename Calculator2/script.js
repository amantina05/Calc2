function input (button){
  // the text of the button will be displayed on the screen
  document.calc.display.value += button.value;
}


function clearDisplay() {
  //clears the screen
  document.calc.display.value = "";


}


function enter () {

document.calc.display.value = eval(document.calc.display.value);
}

function average () {
//finding the average

var sum = 0;
listNum = document.calc.display.value.split(",");

for(var i=0; i < listNum.length; i++){
sum += parseInt(listNum[i]);
}
var average = sum/listNum.length;


document.calc.display.value = average;
}
