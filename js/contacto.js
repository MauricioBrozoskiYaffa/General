const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    //event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
      

    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Limpiar el formulario después de enviarlo 
    contactForm.reset();
   
});

window.addEventListener('load', function() {
    let enviar = document.querySelector('#enviar');

    enviar.addEventListener('click', function() {
        Swal.fire(
            'Al Toke Loro!',
            'Aprendiste a usar bien las alertas!',
            'success'
          )
    })
})