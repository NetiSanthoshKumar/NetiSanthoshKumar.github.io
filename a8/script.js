function add(){
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    document.getElementById("output1").innerHTML="Addition : "+(num1 + num2);

}
function sub(){
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    document.getElementById("output2").innerHTML="Subtraction : "+(num1 - num2);

}
function mul(){
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    document.getElementById("output3").innerHTML="Multiplication : "+(num1 * num2);

}
function div(){
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    document.getElementById("output4").innerHTML="Division : "+(num1 / num2);

}