function add(...values){
    const su = values.reduce((a,b) => a + b);
    console.log(su);
}

add(1,2,3,4,5);