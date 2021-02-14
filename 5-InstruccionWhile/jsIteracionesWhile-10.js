/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadNegativos;
	let cantidadPositivos;
	let cantidadCeros;
	let cantidadNumPares;
	let promedioNegativos;
	let promedioPositivos;
	let difereneciaNegYPos;

	respuesta="si";

	while ( seguir == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	}//fin del while
	seguir = prompt("¿Desea ingresar otro numero? ingrese Si o No");

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN