/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo
	let nuevoSueldo
	let resultado 

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo)
	nuevoSueldo = sueldo * 0.10;
	resultado = sueldo + nuevoSueldo;

	document.getElementById("txtIdResultado").value = resultado;
}
