const customers = [
{ cart: "1234567890", pin: "1234", name: "John", balance: 0 },
{ cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];
 function showRes(){
    let num1 = document.getElementById("num").value;
    let pass1 = document.getElementById("pass").value;
    if(customers.cart === num1 && customers.pin === pass1){
        document.write(customers.name);
    }
    else{
        document.write("result not found");
    }
 }