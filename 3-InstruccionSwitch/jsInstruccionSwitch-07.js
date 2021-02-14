function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case ("Bariloche"):
			mensaje ="Oeste";
			break;
		case ("Cataratas"):
			mensaje ="Este"
			break;
		case ("Mar del plata"):
			mensaje = "Norte";
			break;
		case ("Ushuaia"):
			mensaje = "Sur";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN