let boton = document.querySelector("#info");
let botonColor = document.querySelector("#cambiarColor");



boton.addEventListener('click', function (){

    document.getElementById("textoInfo").style.display = 'block';

})



botonColor.addEventListener('click',function(){

    // document.getElementById("portfolio").style.backgroundColor = randomColor ();

    document.getElementById("contactame").style.backgroundColor = randomColor ();

    document.body.style.backgroundColor = randomColor ();
})






function randomColor (){
    let r = Math.floor(Math.random () *256)
    let g = Math.floor(Math.random () *256)
    let b = Math.floor(Math.random () *256)
    
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function generateRandomColors (num){

    let array = []

    for (let i = 0; i < num; i++) {

        array.push(randomColor())

    }

    return array
}






