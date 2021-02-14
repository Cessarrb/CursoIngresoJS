/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let seguir;
	let numeroIngresado;
	let numeroPositivo;
	let numeroNegativo;

	numeroPositivo = 0;
	numeroNegativo = 1;

	seguir = "Si";

	while ( seguir == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado>0)
		{
			numeroPositivo = numeroPositivo + numeroIngresado;
		}
		else
		{
			numeroNegativo = numeroNegativo * numeroIngresado;
		}
		
		seguir = prompt("¿Desea ingresar otro numero? ingrese Si o No");
	}
	
	document.getElementById("txtIdSuma").value = numeroPositivo;
	document.getElementById("txtIdProducto").value = numeroNegativo;

}//FIN DE LA FUNCIÓN