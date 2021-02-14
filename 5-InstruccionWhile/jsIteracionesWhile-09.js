/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let seguir;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let flag;

	flag = 0;
	seguir = "Si";

	while ( seguir == "Si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (flag == 0 || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}

		if (flag == 0 || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			flag = 1;
		}
		seguir = prompt("¿Desea ingresar otro numero? ingrese Si o No");
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}