function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;
	
	switch(mes)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias";
			break;	
		default:
			mensaje = "Este mes tiene 31 dias";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN