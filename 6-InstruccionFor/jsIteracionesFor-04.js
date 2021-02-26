function mostrar()
{
	let contador;
	let numeroIngresado

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true || numemero <1)
	{
		numeroIngresado=prompt("Error, ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
	}
	for(contador=0;contador<50;contador++)
	{
		alert(contador);
		if(contador==10)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN