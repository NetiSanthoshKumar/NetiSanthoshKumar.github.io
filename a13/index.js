const products = [
    {
        id: 1,name :"product 1",price:250
    },
    {
        id: 2,name :"product 2",price:500
    },
    {
        id: 3,name :"product 3",price:750
    }
];
const pro =products.map((value) => value.price + 5);
products.forEach((product) => console.log(product.name+""+pro));