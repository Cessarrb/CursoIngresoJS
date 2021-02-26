//Algañaras Cesar
function mostrar()
{
	let numeroIngresado;
	let numeroDivisores;
	let contador;

	numeroDivisores = 0;


	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(contador=2;contador<numeroIngresado;contador++)
	{
		if(numeroIngresado%contador==0)
		{
			numeroDivisores++;
		}
	}
	if(numeroDivisores!=0 || numeroIngresado<2)
	{
		alert(`${numeroIngresado} no es primo`);
	}
	else
	{
		alert(`${numeroIngresado} es primo`);
	}
}//FIN DE LA FUNCIÓN