function mostrar()
{
	/* Primera forma
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if (!(edad >12 && edad <18))
	{
		alert("No es adolecente");
	}
	*/
	//Segunda forma

	{
		let edad;
	
		edad = document.getElementById("txtIdEdad").value;
		edad = parseInt(edad);
		if (edad >12 || edad <18)
		{
			alert("Es adolecente");
		}
	}

}//FIN DE LA FUNCIÓN