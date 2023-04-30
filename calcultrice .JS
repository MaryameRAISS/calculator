var scren =document.getElementById("scren");
var numchar; //total de caractére 
var curentchar,previouschar;
function display(c){
    scren.value += c;
    numchar = scren.value.length;
    console.log("total: ", + numchar);
    curentchar = c;
    console.log("current: "+curentchar);
    getpreviouschar();
}
function clearscren(){
    scren.value="";
}
function calculate(){
    scren.value=eval(scren.value);
}
