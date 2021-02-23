
const overlay = document.querySelector('#overlay');

console.log('Funcionando...');

const user = document.querySelector('#user');
const pass = document.querySelector('#pass');

user.addEventListener('focus',focus);
user.addEventListener('blur',blur);

pass.addEventListener('focus',focus);
pass.addEventListener('blur',blur);

overlay.addEventListener('click', (event) => {
    // console.log(event); // Mostrando
    overlay.classList.remove('is-active'); // Desactivar la clase 'is-active'
    const elemPuntero = document.elementFromPoint( event.clientX, event.clientY ) ; // Buscar a q elemento se dio click
    if ( elemPuntero.tagName === 'INPUT' )
        elemPuntero.focus(); // Si es input set al foco
});

function focus (event) {
    console.log('focus');
    event.target.classList.add('is-active');
    overlay.classList.add('is-active');
}

function blur (event)  {
    console.log('blur');
    event.target.classList.remove('is-active');
    // overlay.classList.remove('is-active');
}




































// const $inputList = document.querySelectorAll('input')
// const $overlay = document.querySelector('#overlay')

// $inputList.forEach($input => {
//     $input.addEventListener('focus', focus)
//     $input.addEventListener('blur', blur)
// })

// $overlay.addEventListener('click', (event) => {
//     console.log(event)
//     $overlay.classList.remove('is-active')
//     const $maybeIsAnInput = document.elementFromPoint(event.clientX, event.clientY)
//     if ($maybeIsAnInput.tagName === 'INPUT') {
//     $maybeIsAnInput.focus()
//     }
// })

// function focus(event) {
//     console.log('focus')
//     event.target.classList.add('is-active')
//     $overlay.classList.add('is-active')
// }

// function blur(event) {
//     console.log('blur')
//     event.target.classList.remove('is-active')
//     // $overlay.classList.remove('is-active')
// }