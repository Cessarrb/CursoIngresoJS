/*
Algañaras Cesar
Ejercicio 5bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let apellido;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido");

	alert(`${apellido}, usted se llama ${nombre} y tiene ${edad} años.`);
} 