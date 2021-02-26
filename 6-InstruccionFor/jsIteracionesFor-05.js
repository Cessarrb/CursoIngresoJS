//Algañaras Cesar ejercicio 5 Algañaras Cesar
function mostrar()
{
	let repeticiones;

	for (;;)
	{
		repeticiones = prompt("Ingrese un numero");
		repeticiones = parseInt(repeticiones);
		while (isNaN(repeticiones) == true || repeticiones < 1) 
		{
			repeticiones = prompt("Error, ingrese un numero");
			repeticiones = parseInt(repeticiones);
		}
		if (repeticiones == 9) 
		{
			break;
		}
	}
	alert("Ha finalizado la repeticion al ingresar 9")
}//FIN DE LA FUNCIÓN