/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo
    let ancho
    let perimetro
    let alambre
    let radio

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    perimetro = (largo + ancho) * 2;
    alambre = perimetro * 3;

    alert(`el perimetro de alambre es ${alambre}`)
}
function Circulo () 
{
    let perimetro
    let radio
    let alambre
    const PI = 3.14;

    radio = document.getElementById("txtIdRadio").value;
    perimetro = 2 * PI * radio;
    alambre = perimetro * 3;

    alert(`El perimetro del alambre es ${alambre}`)

}
function Materiales () 
{
    let largo
    let ancho
    let area
    let cemento
    let cal

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;
    
    alert(`Para el contrapiso de ${area}m2 se necesitan comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`)

}