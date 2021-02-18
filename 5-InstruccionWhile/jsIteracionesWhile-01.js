/* Algañaras Cesar Ejercicio 1
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() //Ejercicio Distinto que pidio el profe
{
	let nombre;
	let edad;
	let seguir;
	let nombreDelMasjoven;
	let nombreDelMasViejo;
	let edadMax;
	let edadMin;
	let mensaje;

	let flag;

	flag = 0;
	seguir = "Si"

	while (seguir == "Si" || seguir == "si") 
	{
		nombre = prompt("Ingrese su nombre");
		while (isNaN(nombre) == false) {
			nombre = prompt("Error, ingrese su nombre");
		}
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while (isNaN(edad) == true || edad < 1 || edad > 100) 
		{
			edad = prompt("Error, ingrese su edad");
			edad = parseInt(edad);
		}
		if (flag == 0) 
		{
			edadMax = edad;
			edadMin = edad;
			nombreDelMasViejo = nombre;
			nombreDelMasjoven = nombre;
			mensaje = `Solo se ingreso a una persona y es ${nombre} con ${edad} años`;
			flag = 1;
		}
		else 
		{
			if (edad > edadMax) 
			{
				edadMax = edad;
				nombreDelMasViejo = nombre;
			}
			else 
			{
				edadMin = edad;
				nombreDelMasjoven = nombre;
			}
			mensaje = `La persona mas vieja es ${nombreDelMasViejo} con ${edadMax} años y la persona mas joven es ${nombreDelMasjoven} con ${edadMin} años`;
		}

		seguir = prompt("Desea seguir? Ingrese Si o No")
	}
	alert(mensaje);
}

/* VARIANTE RARA AL EJERCICIO
	while (seguir == "Si" || seguir == "si")
	{
		nombre = prompt("Ingrese su nombre");
		while (isNaN(nombre) == false)
		{
			nombre = prompt("Error, ingrese su nombre");
		}
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while (isNaN(edad) == true || edad < 1 || edad > 100)
		{
			edad = prompt("Error, ingrese su edad");
			edad = parseInt(edad);
		}
		if (flag == 0 || edad > edadMax)
		{
			edadMax = edad;
			nombreDelMasViejo = nombre;
		}
		if (flag == 0 ||edad < edadMin)
		{
			edadMin = edad;
			nombreDelMasjoven = nombre;
		}
		mensaje = `La persona mas vieja es ${nombreDelMasViejo} con ${edadMax} años y la persona mas joven es ${nombreDelMasjoven} con ${edadMin} años`;

		flag = 1;
		seguir = prompt("Desea seguir? Ingrese Si o No")
	}
	alert(mensaje);*/

/*{
	let contador;

	contador = 0;

	while (contador<10)
	{
		contador = contador + 1;
		alert(contador);
	}
}//FIN DE LA FUNCIÓN*/