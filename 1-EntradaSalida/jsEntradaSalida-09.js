/*
Algañaras Cesar
Ejercicio 9 bis
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo
	let nuevoSueldo
	let resultado 
	let porcentaje

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo)
	porcentaje = prompt("Ingrese el porcentaje")
	nuevoSueldo = sueldo * porcentaje / 100;
	resultado = sueldo + nuevoSueldo;

	document.getElementById("txtIdResultado").value = resultado;
}
