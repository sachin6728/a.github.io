const display=document.getElementById('input')
function calculator(input){
    display.value+=input;
}
function blank(){
    display.value="";
}
function calculate(){
 display.value=eval(display.value)
}
function reduce(){
    display.value=(display.value).slice(0,-1);
}