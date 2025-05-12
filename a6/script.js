function onsubmission(){
    const mail = document.getElementById("user").value
    const password = document.getElementById("pass").value
    document.getElementById('output').textContent = `${mail}, ${password}`;
}