//Algañaras Cesar ejercicio 3
/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let seguir;
	let banderaDeTemperatura;
	let temperaturaCorporalMayor;
	let nombreConMayorTemperatura;
	let contadorSolteros;
	let contadorViudos;
	let contadorCasados;
	let contadorTempAltaTerceraEdad;
	let sumadorDeEdadSolteros;
	let SolterosViudos;
	let contadorViudosMayores;

	contadorViudosMayores = 0;
	sumadorDeEdadSolteros = 0;
	sumadorDeEdad = 0;
	contadorTempAltaTerceraEdad = 0;
	contadorSolteros = 0;
	contadorCasados = 0;
	contadorViudos = 0;
	banderaDeTemperatura = 0;
	seguir = "si";
	promedioSolteros = 0;

	while(seguir == "si")
	{
		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error, ingrese su nombre");
		}
		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true )
		{
			edadIngresada = prompt("Error, ingrese su edad");
		}
		sexoIngresado = prompt("Ingrese su sexo f o m");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error, ingrese su sexo f o m");
		}
		estadoCivilIngresado = prompt("Ingrese su estado civil: soltero, casado o viudo");
		while(isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo"  )
		{
			estadoCivilIngresado = prompt("Error, ingrese su estado civil: soltero, casado o viudo");
		}
		temperaturaCorporalIngresada = prompt("Ingrese su temperatura corporal");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 20 || temperaturaCorporalIngresada > 45)
		{
			temperaturaCorporalIngresada = prompt("Error, ingrese su temperatura corporal");
		}

		//a) El nombre de la persona con mas temperatura.

		if (banderaDeTemperatura == 0 || temperaturaCorporalIngresada > temperaturaCorporalMayor)
		{
			temperaturaCorporalMayor = temperaturaCorporalIngresada;
			nombreConMayorTemperatura = nombreIngresado;
			banderaDeTemperatura = 1;
		}

		switch (estadoCivilIngresado)
		{
			case "soltero":
				if (sexoIngresado == "m") //c) La cantidad de hombres que hay solteros o viudos.
				{
					contadorSolteros = contadorSolteros + 1;
					sumadorDeEdadSolteros = sumadorDeEdadSolteros + edadIngresada;
				}
				break;
			case "casado":
				contadorCasados = contadorCasados + 1;
				break;
			case "viudo":
				if (sexoIngresado == "m") //c) La cantidad de hombres que hay solteros o viudos.
				{
					contadorViudos = contadorViudos + 1;
					if (edadIngresada > 18) //b) Cuantos mayores de edad estan viudos
					{
						contadorViudosMayores = contadorViudosMayores + 1;
					}
				}
				break;
		}

		//e) El promedio de edad entre los hombres solteros.
		SolterosViudos = contadorSolteros + contadorViudos;

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edadIngresada > 60 && temperaturaCorporalIngresada > 38)
		{
			contadorTempAltaTerceraEdad = contadorTempAltaTerceraEdad + 1;
		}

		seguir = prompt("Desea ingresar mas datos? si o no");
	}

	//e) El promedio de edad entre los hombres solteros.

	if (estadoCivilIngresado == "soltero" && sexoIngresado == "m")
	{
		promedioSolteros = sumadorDeEdadSolteros / contadorSolteros;
	}

	document.write(`Nombre de la persona con mas temperatura ${nombreConMayorTemperatura}
	<br>Mayores de edad viudos ${contadorViudosMayores}
	<br>Cantidad de hombres solteros o viudos ${SolterosViudos}
	<br>Cantidad de persona de tercera edad con mas de 38 de temperatura ${contadorTempAltaTerceraEdad}
	<br>Promedio de hombres solteros ${promedioSolteros}`);
}
