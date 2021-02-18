/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let seguir;
	let numeroIngresado;
	let numeroPositivo;
	let numeroNegativo;
	let contador;

	numeroPositivo = 0;
	numeroNegativo = 0;
	contador = 0;

	seguir = "Si";

	while (seguir == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado>0)
		{
			numeroPositivo = numeroPositivo + numeroIngresado;
		}
		else
		{
			numeroNegativo = numeroNegativo + numeroIngresado;
			contador = contador + 1;
		}
		
		seguir = prompt("¿Desea ingresar otro numero? ingrese Si o No");
	}

	if (numeroNegativo < 1)
	{
		numeroNegativo = numeroNegativo / contador;
	}

	document.getElementById("txtIdSuma").value = numeroPositivo;
	document.getElementById("txtIdProducto").value = numeroNegativo;

}//FIN DE LA FUNCIÓN