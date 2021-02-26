/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let seguir;
	let numeroIngresado;
	let numeroMenorPar;
	let numeroNegativoMayor;
	let flag;

	flag = 0;
	seguir = "Si";

	while ( seguir == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado%2==0)
		{
			numeroMenorPar = numeroIngresado;
		}
		

		if (flag == 0 || numeroIngresado < numeroMenorMayor)
		{
			numeroMenorMayor = numeroIngresado;
		}
		flag = 1;
		seguir = prompt("¿Desea ingresar otro numero? ingrese Si o No");
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}