/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar el nombre del usuario
	let nombre;
	let respuesta;
	//guardo en la varibale nombre el texto que escribio en  usuario dentro de la ventana prompt
	nombre = prompt("Ingrese su nombre"); 
	respuesta = `Su nombre es ${nombre}` 


	//copio en *nombre* lo que tengo guardado en la variable dentro de la caja de texto embebida en la pagina de texto
	document.getElementById("txtIdNombre").value = respuesta;
}

