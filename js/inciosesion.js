let username = document.getElementById('usuario');
let password = document.getElementById('contrasena');
let button = document.getElementById('button');

button.addEventListener('click', function(event) {
    event.preventDefault()

    const data = {
        username : username.value,
        password : password.value,
    }

    window.location = "paginaprincipal.html";

    console.log(data);
})


