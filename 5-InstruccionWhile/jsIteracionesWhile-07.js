/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir;
	let acumulador;
	let numeroIngresado;

	acumulador = 0;
	
	seguir = "Si";

	while ( seguir == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado ;
		
		seguir = prompt("¿Desea ingresar otro numero? ingrese Si o No");
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value= acumulador / 5;

}//FIN DE LA FUNCIÓN