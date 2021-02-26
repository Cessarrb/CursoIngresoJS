function mostrar()
{
	let numeroIngresado;
	let numerosPares;
	let contador;

	numerosPares= 0;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)=true || numeroIngresado<1 || numeroIngresado>100)
	for(contador=1;contador<numeroIngresado;contador++)
	{
		if(contador%2==0)
		{
			numerosPares++;
		}
	}
	console.log(numerosPares);

}//FIN DE LA FUNCIÓN