const customers = [
{ cart: "1234567890", pin: "1234", name: "John", balance: 0 },
{ cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];
 function showRes(){
    let num1 = document.getElementById("num").value;
    let pass1 = document.getElementById("pass").value;

    const customer = customers.find(value => value.cart === num1 && value.pin === pass1);
    if(customer){
        document.write("welcome "+customer.name);
    }
    else{
        document.write("result not found");
    }
 }