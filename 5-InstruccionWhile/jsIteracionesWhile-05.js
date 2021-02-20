/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "t")
	{
		sexoIngresado = prompt("Sexo ingresado invalido, reingrese el sexo valido");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN