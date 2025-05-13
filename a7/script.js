function perform(){
    let num1 = parseInt(document.getElementById("first").value);
    let num2 = document.getElementById("second").value;

    let sum = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div =num1 / num2;

     document.getElementById('output').innerText = "Addition:" +sum;
     document.getElementById('output').innerText = "Subtraction:" +sub;
     document.getElementById('output').innerText = "multiplication:" +mul;
     document.getElementById('output').innerText = "Division :" +div;

}