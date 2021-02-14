function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;
	while (contador < 5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado ; 
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value= acumulador / 5;
}//FIN DE LA FUNCIÓN