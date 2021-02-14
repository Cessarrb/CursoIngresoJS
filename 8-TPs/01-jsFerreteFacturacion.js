/*1. Algañaras Cesar
    Ejercicio de Facturacion
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1)
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2)
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3)

    resultado = precio1 + precio2 + precio3;

    alert(`La suma es ${resultado}`);
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;
    
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1)
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2)
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3)

    resultado = (precio1 + precio2 + precio3) / 3;

    //Tambien puedo escribir el "toFixed" separado para no volver a escribirlo
    //resultado = resultado.toFixed(2);
    
    alert(`El promedio es ${resultado.toFixed(2)}`);
	
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let iva;
    let resultado;
	precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1)
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2)
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3)

    iva = (precio1 + precio2 + precio3) * 0.21;
    resultado = precio1 + precio2 + precio3 + iva;
    resultado = resultado.toFixed(2);

    alert(`El precio final es ${resultado}`);
}