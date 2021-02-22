
const message = document.querySelector('#message');
var renderMessage = txt => message.textContent = txt;

renderMessage('Comprando...');

var cart = [];
var buy = ( thing, time=2000 ) => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            renderMessage(thing);
            cart.push(thing);
            resolve(thing);
        }, time);
        // renderMessage('Error');
        // reject(thing);
    } );
}

// Encadenando Promesas -------------------
// var shopping = () => {
//     buy('frutas')
//         .then( thing => { return buy('verduras'); } )
//         .then( thing => { return buy('carne'); } )
//         .then( thing => { return buy('pollo'); } )
//         .then( thing => { 
//             setTimeout( ()=>renderMessage(cart.toString()), 2000 ); 
//         } );
// }
// shopping();
// ------------------------------------------------------------------------------------------

// Lanzando Todas a la vez --------------------
Promise.all( [
    buy('Frutas', 1000),
    buy('Verduras', 2000),
    buy('Carne', 3000),
    buy('Pollo', 4000)
] )
.then( (s) => {
    setTimeout( ()=>renderMessage(cart.toString()), 2000 ); 
} );
// --------------------------------------------------------------------------------------------