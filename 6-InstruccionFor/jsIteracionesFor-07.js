//Algañaras cesar
function mostrar()
{
	let numeroIngresado;
	let numeroDivisores;
	let contador;

	numeroDivisores=0;

	numeroIngresado=prompt("Ingrese un numero")
	numeroIngresado=parseInt(numeroIngresado);

	for(contador=1;contador<numeroIngresado;contador++)
	{
		if(numeroIngresado%contador==0)
		{
			numeroDivisores++;
		}
	}
	console.log(numeroDivisores);

}//FIN DE LA FUNCIÓN