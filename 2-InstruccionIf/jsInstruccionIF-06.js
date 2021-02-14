//Algañaras Cesar
//Ejercicio 6
function mostrar()
{

	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >17)
	{
		alert("Es mayor");
	}
	else
	{
		if (edad <13)
		{
			alert("Es un niño")
		}
		else
		{
			alert("Es adolecente")
		}
		
	}
}

/*{

	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >17)
	{
		alert("Es mayor");
	}
	else if (edad <13)
		{
			alert("Es un niño")
		}
		else
		{
			alert("Es adolecente")
		}
		
	}
}*/