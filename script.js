//Declarar la función

function hola(){
    let x=Math.floor(Math.random() * (256 - 0) + 0);
    let y=Math.floor(Math.random() * (256 - 0) + 0);
    let z=Math.floor(Math.random() * (256 - 0) + 0);
    return`rgb(${x}, ${y} ,${z})`;
}

let lista = document.querySelectorAll('.prueba p');

for (let i = 0;  i < lista.length; i++) {
    lista[i].style.color = hola();
    
}

console.log(hola());