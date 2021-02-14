/*
Algañaras Cesar
Ejercicio 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe
	let descuento
	let resultado 
	let porcentaje
	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe)
	porcentaje = prompt("Ingrese el porcentaje")

	descuento = importe * porcentaje / 100;
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
