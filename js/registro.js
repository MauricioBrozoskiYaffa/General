let usuarios = [];

function registrarUsuario(nombre, apellido, password, email) {
    let nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        password: password,
        email: email
    };

    usuarios.push(nuevoUsuario);

    //window.location = "index.html"

}

registrarUsuario();