const fruits = ["Apple", "Orange", "Mango", "Banana"];

function searchitem() {
  const input = document.getElementById('item').value.toLowerCase();
  const fruitList = document.getElementById('item');
  fruitList.innerHTML = '';

  const filtered = fruits.filter(fruit => fruit.toLowerCase().includes(input));

  if (filtered.length > 0) {
    filtered.forEach(fruit => {
      const div = document.createElement('div');
      div.textContent = fruit;
      fruitList.appendChild(div);
    });
  } else {
    fruitList.innerHTML = '<div>No fruits found</div>';
  }
}