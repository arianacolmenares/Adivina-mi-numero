let limiteMin = 0;
let limiteMax = 0;
let numeroAdivinado = 0;

document.getElementById("botoninicial").addEventListener("click", () => {

    document.getElementById("reiniciarjuego").style.display = "none"; 

    document.getElementById("botones").style.display = "block";

    document.getElementById("numeroinicial").style.display = "none";
    limiteMin = 0; 
    limiteMax = 101; 
    numeroAdivinado = Math.floor(Math.random() * 100) + 1;  
    
    adivinarNumero( numeroAdivinado );    

});

const adivinarNumero = numero => {
    document.getElementById("mensajesalida").innerHTML = "¡Tu número es " + numero + "!";
};

document.getElementById("boton1").addEventListener("click", () => {
   if (numeroAdivinado - limiteMin !== 1 )
    {
    limiteMax = numeroAdivinado;
    numeroAdivinado = Math.floor((numeroAdivinado - limiteMin) / 2 + limiteMin);
    adivinarNumero(numeroAdivinado);
   } 

});

document.getElementById("boton2").addEventListener("click", () => {
    document.getElementById("botones").style.display = "none";

    document.getElementById("numeroinicial").style.display = "block";

    document.getElementById("mensajesalida").innerHTML = "¡Tu número es el " + numeroAdivinado + " , excelente desición!";
   
    
    document.getElementById("reiniciarjuego").innerHTML = "Piensa en otro número y da click para iniciar de nuevo el juego"; 

    document.getElementById("reiniciarjuego").style.display = "block";
    
});


document.getElementById("boton3").addEventListener("click", () => {
    limiteMin = numeroAdivinado;
    numeroAdivinado = Math.floor(( limiteMax - limiteMin) / 2 + limiteMin);
    adivinarNumero(numeroAdivinado);

});
