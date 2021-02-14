function mostrar() 
{

	let precioFinal;
	let destino;
	let estacion;
	let porcentaje
	let precio;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precio = 15000;

	switch (estacion) 
	{
		case "Invierno":
			switch (destino) 
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
				default:
					porcentaje = -10;
					break;
			}
			break;
		case "Verano":
			switch (destino) 
			{
				case "Bariloche":
					porcentaje = -20;
					break
				case "Mar del plata":
					porcentaje = 20;
					break
				default:
					porcentaje = 10;
					break;
			}
			break;
		default:
			switch (destino) 
			{
				case "Bariloche":
					porcentaje = 10;
					break;
				case "Cataratas":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 10;
					break;
				default:
					porcentaje = 0;
					break;
			}
			break
	}

	porcentaje = precio * porcentaje / 100;
	precioFinal = precio + porcentaje;

	alert(`Precio final ${precioFinal}`);

}//FIN DE LA FUNCIÓN