
const form = document.querySelector('#form');
const username = document.querySelector('#username');

const image = document.querySelector('#image');
const file = document.querySelector('#file');

const renderUsername = formData => username.textContent = formData.get('username');

const setImage = formData => {
    var binary = formData.get('image');
    var domStr = URL.createObjectURL(binary);
    image.setAttribute('src',domStr);
    // console.log(image);
}

file.addEventListener( 'change', e => {
    const f = new FormData(form);
    setImage(f);
} );

form.addEventListener('submit', event => {    
    event.preventDefault();

    // FormData(event.currentTarget); De forma didactica para obtener el form
    var formData = new FormData(event.currentTarget);

    // formData.set('texto', 'Set de variables invisibles...');
    // console.log( 'Mostrando...'+formData.get('texto') );

    renderUsername(formData);
    // setImage(formData);
    // Luego hacemo el Fetch
});
