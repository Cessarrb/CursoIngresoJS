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
	
	let seguir;
	let numIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadPositivos = 0;
	let cantidadCeros = 0;
	let cantidadNumPares = 0;
	let promedioNegativos = 0;
	let promedioPositivos = 0;
	let difereneciaNegYPos;

	seguir = true;

	while (seguir == true) 
	{
		numIngresado = prompt("Ingrese un numero");
		numIngresado = parseInt(numIngresado);

		if (numIngresado > 0) 
		{
			sumaPositivos = numIngresado + sumaPositivos;
			cantidadPositivos = cantidadPositivos + 1;
		}
		else {
			if (numIngresado < 0) 
			{
				sumaNegativos = numIngresado + sumaNegativos;
				cantidadNegativos = cantidadNegativos + 1;
			}
			else {
				cantidadCeros = cantidadCeros + 1;
			}
		}
		if (numIngresado % 2 == 0) 
		{
			cantidadNumPares = cantidadNumPares + 1
		}
		seguir = confirm("¿Desea ingresar otro numero? ingrese Si o No");
	}

	if (cantidadNegativos > 0) 
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}
	if (cantidadPositivos > 0) 
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}

	difereneciaNegYPos = sumaPositivos + sumaNegativos;

	document.write
	(
		`Suma de negativos: ${sumaNegativos}
		<br>Suma de positivos: ${sumaPositivos}
		<br>Cantidad de positivos: ${cantidadPositivos}
		<br>Cantidad de negativos: ${cantidadNegativos}
		<br>Cantidad de ceros: ${cantidadCeros}
		<br>Cantidad de numeros pares: ${cantidadNumPares}
		<br>Promedio de positivos: ${promedioPositivos}
		<br>Promedio de negativos: ${promedioNegativos}
		<br>Diferencia entre positivos y negativos: ${difereneciaNegYPos}`
	);
}//FIN DE LA FUNCIÓN