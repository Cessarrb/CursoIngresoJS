function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case ("Bariloche"):
			mensaje = "Frio";
			break;
		case ("Cataratas"):
			mensaje = "Calor";
			break;
		case ("Mar del plata"):
			mensaje = "Calor";
			break;
		case ("Ushuaia"):
			mensaje = "Frio";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN