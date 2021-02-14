function mostrar()
{
	let mes;
	let mensaje;
	
	mes = document.getElementById("txtIdMes").value;
	
	switch(mes)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!";
			break;
		case "Marzo":
			mensaje = "A clases!";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!";
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!";
			break;
		default:
			break;
	}
	alert(mensaje)
}//FIN DE LA FUNCIÓN