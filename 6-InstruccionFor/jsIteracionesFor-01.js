//Algañaras Cesar ejercicio For 10 B
/*For 10 A-ingrese nombre , sexo , edad (validar que si es mujer 
debe ser adolescente y si el hombre debe ser niño), altura (validar), temperatura corporal
For 10 B- necesitamos saber: el nombre y el sexo de la persona mas alta , --de las mujeres
el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay*/
/*For 10 C el promedio de edad entre los hombre ,el promedio de edad entre las mujeres, la cantidad de personas
que miden mas de 1,60 metros, y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts*/

function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let edadIngresada;
	let alturaIngresada;
	let temperaturaCorporalIngresada;
	let respuesta;
	let personaMasAlta
	let nombrePersonaMasAlta;
	let sexoPersonaMasAlta;
	let banderaPersonaMasAlta;
	let banderaPersonaMasJoven;
	let nombrePersonaMasJoven;
	let banderaPersonaMasBajo
	let hombreMasBajo;
	let nombreMasBajo;
	let contadorEdadMujeres;
	let contadorMujeres;
	let contadorEdadHombres;
	let contadorHombres;
	let cantidadPersonasMayorCm;
	let cantidadMujeresMayorCm;
	let porcentajeMujeresMayorCm;
	let promedioEdadMujeres;
	let promedioEdadHombres;
	let mensajePromedioHombres;
	let mensajePromedioMujeres;

	contadorMujeres = 0;
	contadorHombres = 0;
	contadorEdadHombres = 0;
	contadorEdadMujeres = 0;
	cantidadMujeresMayorCm = 0;
	cantidadPersonasMayorCm = 0;
	banderaPersonaMasBajo = 0;
	banderaPersonaMasJoven = 0;
	banderaPersonaMasAlta = 0;
	respuesta = "si";

	while (respuesta == "si") 
	{
		nombreIngresado = prompt("Ingrese su nombre");
		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error, ingrese su nombre");
		}
		
		sexoIngresado = prompt("Ingrese su sexo, F para femenino o M para masculino");
		while (isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error, Ingrese su sexo, F para femenino o M para masculino");
		}

		alturaIngresada = prompt("Ingrese su altura, ejemplo: 1.40");
		while (isNaN(alturaIngresada) == true || alturaIngresada < 0 || alturaIngresada > 3) 
		{
			alturaIngresada = prompt("Error, Ingrese su altura, ejemplo: 1.40");
			alturaIngresada = parseFloat(alturaIngresada);
		}

		edadIngresada = prompt("Ingrese edad");
		edadIngresada = parseInt(edadIngresada);
		if (sexoIngresado == "F")
		{
			contadorEdadMujeres = contadorEdadMujeres + edadIngresada;
			contadorMujeres++;
			while (isNaN(edadIngresada) == true || edadIngresada <13 || edadIngresada >17)
			{
				edadIngresada = prompt("Error, usteded no es adolecente o no ingreso una edad correcta;");
				edadIngresada = parseInt(edadIngresada);
			}
			if(banderaPersonaMasJoven == 0 || edadIngresada<edadMasJoven)
				{
					edadMasJoven = edadIngresada;
					nombrePersonaMasJoven = nombreIngresado;
					banderaPersonaMasJoven++;
				}
		}	
		else
		{
			contadorEdadHombres = contadorEdadHombres + edadIngresada;
			contadorHombres++;
			while (isNaN(edadIngresada) == true || edadIngresada <1 || edadIngresada >12)
			{
					edadIngresada = prompt("Error, usteded no es un niño o no ingreso una edad correcta");
					edadIngresada = parseInt(edadIngresada);
			}
			if(banderaPersonaMasBajo == 0 || alturaIngresada<hombreMasBajo)
				{
					hombreMasBajo = alturaIngresada;
					nombreMasBajo = nombreIngresado;
					banderaPersonaMasBajo++;
				}
		}
		temperaturaCorporalIngresada = prompt("Ingrese su temperatura corporal")
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while (isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 25 || temperaturaCorporalIngresada > 42) 
		{
			temperaturaCorporalIngresada = prompt("Error, Ingrese su temperatura corporal");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		}

		if(banderaPersonaMasAlta == 0 || alturaIngresada>personaMasAlta)
		{
			personaMasAlta = alturaIngresada;
			nombrePersonaMasAlta = nombreIngresado;
			sexoPersonaMasAlta = sexoIngresado;
			banderaPersonaMasAlta++;

		}

		//CANTIDAD DE PERSONAS QUE MIDEN MAS DE 1.60 METROS DE ALTURA
		if (alturaIngresada>1.60)
		{
			cantidadPersonasMayorCm++;

			if(sexoIngresado=="F") //CANTIDAD DE MUJERES QUE MIEDEN MAS DE 1.60 METROS
			{
				cantidadMujeresMayorCm++;
			}
		}

		respuesta=prompt("desea ingresar mas datos? Ingrese si o no");
	}//Fin del while


	//PROMEDIO EDAD MUJERES
	if(contadorMujeres>0)
	{
		promedioEdadMujeres = contadorEdadMujeres / contadorMujeres;
		mensajePromedioMujeres = `El promedio de edad de mujeres es ${promedioEdadMujeres}`;
	}
	else
	{
		mensajePromedioMujeres = "No se ingresaron datos de mujeres para un promedio de edad";
	}

	//PROMEDIO EDAD HOMBRES
	if(contadorHombres>0)
	{
		promedioEdadHombres = contadorEdadHombres / contadorHombres;
		mensajePromedioHombres = `El promedio de edad de hombres es ${promedioEdadHombres}`;
	}
	else
	{
		mensajePromedioHombres = "No se ingresaron datos de hombres para un promedio de edad";
	}

	//PORCENTAJE MUJERES MAYOR A 1.60 METROS
	if(cantidadMujeresMayorCm>0)
	{
		porcentajeMujeresMayorCm = (cantidadMujeresMayorCm * 100) / cantidadPersonasMayorCm;
	}
	else
	{
		porcentajeMujeresMayorCm = "No hay mujeres mayor a 1.60 metros";
	}



	//DATOS A MOSTRAR
	document.write(`Nombre de la persona mas alta es ${nombrePersonaMasAlta} y su sexo es ${sexoPersonaMasAlta}`);
	if(banderaPersonaMasJoven>0)
	{
		document.write(`<br>La mujer mas joven es ${nombrePersonaMasJoven}`);
	}
	else
	{
		document.write(`<br>No se ingreso los datos de una mujer para saber la edad mas joven`);
	}
	if(banderaPersonaMasBajo>0)
	{
		document.write(`<br>El hombre mas bajito es ${nombreMasBajo}`);
	}
	else
	{
		document.write(`<br>No se ingreso los datos de un hombre para saber la altura mas baja`);
	}
	document.write(`<br>${mensajePromedioMujeres}`);
	document.write(`<br>${mensajePromedioHombres}`);
	if(cantidadPersonasMayorCm>0)
	{
		document.write(`<br>Cantidad de personas que miden mas de 1.60 metros es ${cantidadPersonasMayorCm}`);
	}
	else
	{
		document.write(`<br>No hay personas mayor a 1.60 metros`);
	}
	document.write(`<br>El porcentaje de mujeres que miden mas 1.60 metros es ${porcentajeMujeresMayorCm}%`);
}


/*function mostrar()
{
	let contador;

	for(contador=1;contador<11;contador++)
	{
		console.log(contador)
	}
}*/
