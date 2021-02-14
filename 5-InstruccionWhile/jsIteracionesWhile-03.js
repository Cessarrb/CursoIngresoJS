/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese el número clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Clave incorrecta, vuelva a ingresar la clave");
	}
	alert("Clave correcta");
}//FIN DE LA FUNCIÓN
