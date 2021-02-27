//Algañaras Cesar
/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/
function mostrar() 
{

	let continenteIngresado;
	let nombrePaisIngresado;
	let cantidadHabitantesIngresados;
	let nivelPobrezaIngresado;
	let temperaturaMinimaIngresada;
	let paises;
	let temperaturasPares;
	let temperaturaImparEuropa;
	let nombrePaisMenosHabitantes;
	let paisMenosHabitantes;
	let contadorPaisesTemperaturaMasCuarenta;
	let contadorPaisesTemperaturaMenosCero
	let SumacantidadHabitantesIngresados;
	let promedioCantidadHabitantes;
	let sumaCantidadHabitantesTemperaturaMasCuarenta;
	let mensaje;
	let banderaTemperaturaMasBaja;
	let temperaturaMasBaja;
	let PaisTemperaturaMasBaja;
	let sumaHabitantesAmerica;
	let sumaHabitantesAsia;
	let sumaHabitantesEuropa;
	let sumaHabitantesAfrica;
	let sumaHabitantesOceania;

	sumaHabitantesAmerica =0;
	sumaHabitantesAsia =0;
	sumaHabitantesEuropa = 0;
	sumaHabitantesAfrica = 0;
	sumaHabitantesOceania = 0;
	banderaTemperaturaMasBaja = 0;
	sumaCantidadHabitantesTemperaturaMasCuarenta = 0;
	SumacantidadHabitantesIngresados = 0;
	contadorPaisesTemperaturaMenosCero = 0;
	contadorPaisesTemperaturaMasCuarenta = 0;
	banderaPaisMenosHabitantes = 0;
	temperaturaImparEuropa = 0;
	temperaturasPares = 0;
	paises = 0;


	while (paises < 1) 
	{
		continenteIngresado = prompt("Ingrese el continente");
		while (isNaN(continenteIngresado) == false || continenteIngresado != "america" && continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania") {
			continenteIngresado = prompt("Error, ingrese un continente correcto: america, asia, europa, africa y oceania")
		}
		nombrePaisIngresado = prompt("Ingrese el nombre del pais");
		while (isNaN(nombrePaisIngresado) == false) 
		{
			nombrePaisIngresado = prompt("Error, ingrese el nombre de pais correcto");
		}
		cantidadHabitantesIngresados = prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000");
		cantidadHabitantesIngresados = parseInt(cantidadHabitantesIngresados);
		while (isNaN(cantidadHabitantesIngresados) == true || cantidadHabitantesIngresados < 1 || cantidadHabitantesIngresados > 7000) 
		{
			cantidadHabitantesIngresados = prompt("Error, ingrese la cantidad de habitantes correcta entre 1 y 7000");
			cantidadHabitantesIngresados = parseInt(cantidadHabitantesIngresados);
		}
		nivelPobrezaIngresado = prompt("Ingrese el nivel de pobreza: pobre, rico, muy rico");
		if (continenteIngresado == "europa") 
		{
			while (isNaN(nivelPobrezaIngresado) == false || nivelPobrezaIngresado == "pobre") 
			{
				nivelPobrezaIngresado = prompt("Error, ingrese el nivel de pobreza: rico o muy rico");
			}
		}
		else {
			while (isNaN(nivelPobrezaIngresado) == false || nivelPobrezaIngresado != "pobre" && nivelPobrezaIngresado != "rico" && nivelPobrezaIngresado != "muy rico")
			 {
				nivelPobrezaIngresado = prompt("Error, Ingrese el nivel de pobreza: pobre, rico, muy rico");
			}
		}
		temperaturaMinimaIngresada = prompt("Ingrese la temperatura minima del territorio (entra -50 y 50");
		temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);
		while(isNaN(temperaturaMinimaIngresada)==true || temperaturaMinimaIngresada <-50 || temperaturaMinimaIngresada >50)
		{
			temperaturaMinimaIngresada = prompt("Ingrese la temperatura minima del territorio (entra -50 y 50");
			temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);
		}

		//Temperaturas Pares
		if(temperaturaMinimaIngresada%2==0)
		{
			temperaturasPares++;
		}

		//Nombre del pais con menos habitantes
		if(banderaPaisMenosHabitantes==0 || cantidadHabitantesIngresados<paisMenosHabitantes)
		{
			paisMenosHabitantes = cantidadHabitantesIngresados;
			nombrePaisMenosHabitantes = nombrePaisIngresado;
			banderaPaisMenosHabitantes++;
		}

		//)Cantidad de paises que superan los 40 grados.
		if(temperaturaMinimaIngresada>40)
		{
			contadorPaisesTemperaturaMasCuarenta++;
			sumaCantidadHabitantesTemperaturaMasCuarenta = sumaCantidadHabitantesTemperaturaMasCuarenta + cantidadHabitantesIngresados;
		}

		//la cantidad de paises de america que tienen menos de 0 grados.

		if(banderaTemperaturaMasBaja==0 || temperaturaMinimaIngresada<temperaturaMasBaja)
		{
			temperaturaMasBaja = temperaturaMinimaIngresada;
			PaisTemperaturaMasBaja = nombrePaisIngresado;
			banderaTemperaturaMasBaja++;
		}


		SumacantidadHabitantesIngresados = SumacantidadHabitantesIngresados + cantidadHabitantesIngresados;

		switch(continenteIngresado)
		{
			case "america":
				sumaHabitantesAmerica = sumaHabitantesAmerica + cantidadHabitantesIngresados;
				if(temperaturaMinimaIngresada<1) //la cantidad de paises de america que tienen menos de 0 grados.
				{
					contadorPaisesTemperaturaMenosCero++;
				}
				break;
			case "asia":
				sumaHabitantesAsia = sumaHabitantesAsia + cantidadHabitantesIngresados;
					break;
			case "europa":
				sumaHabitantesEuropa = sumaHabitantesEuropa + cantidadHabitantesIngresados;
				if(temperaturaMinimaIngresada%2==1) //Temperaturas Impares en Europa
				{
					temperaturaImparEuropa++;
				}
				break;
			case "africa":
				sumaHabitantesAfrica = sumaHabitantesAfrica + cantidadHabitantesIngresados;
				break;
			case "oceania":
				sumaHabitantesOceania = sumaHabitantesOceania + cantidadHabitantesIngresados;
				break;
		}

		paises++;
	}//Fin del while


	//el promedio de habitantes entre los paises ingresados
	promedioCantidadHabitantes = cantidadHabitantesIngresados / 5;

	//el promedio de habitantes entre los paises que superan los 40 grados
	if(contadorPaisesTemperaturaMasCuarenta>0)
	{
		promedioCantidadHabitantesTemperaturaMasCuarenta = sumaCantidadHabitantesTemperaturaMasCuarenta / contadorPaisesTemperaturaMasCuarenta;
	}

	if(sumaHabitantesAmerica>sumaHabitantesAsia && sumaHabitantesAmerica>sumaHabitantesEuropa && sumaHabitantesAmerica>sumaHabitantesAfrica && sumaHabitantesAmerica>sumaHabitantesOceania)
	{
		continenteMayorHabitantes = "america";
	}
	else
	{
		if(sumaHabitantesAsia>sumaHabitantesEuropa && sumaHabitantesAsia>sumaHabitantesAfrica && sumaHabitantesAsia>sumaHabitantesOceania)
		{
			continenteMayorHabitantes = "asia";
		}
		else
		{
			if(sumaHabitantesEuropa>sumaHabitantesAfrica && sumaHabitantesEuropa>sumaHabitantesOceania)
			{
				continenteMayorHabitantes= "europa";
			}
			else
			{
				if(sumaHabitantesAfrica>sumaHabitantesOceania)
				{
					continenteMayorHabitantes = "africa";
				}
				else
				{
					continenteMayorHabitantes = "oceania";
				}
			}
		}
	}

	document.write(`La cantidad de temperaturas pares es ${temperaturasPares}`);
	document.write(`<br>El numero temperaturas impares en europa es ${temperaturaImparEuropa}`);
	document.write(`<br>El nombre del pais con menos habitantes es ${paisMenosHabitantes}`);
	document.write(`<br>La cantidad de paises que superan los 40 grados es ${sumaCantidadHabitantesTemperaturaMasCuarenta}`);
	document.write(`<br>La cantidad de paises America que tienen menos de 0 grados es ${contadorPaisesTemperaturaMenosCero}`);
	document.write(`<br>El promedio de habitantes entre los paises ingresados es ${promedioCantidadHabitantes}`);
	if(contadorPaisesTemperaturaMasCuarenta>0)
	{
		document.write(`<br>El promedio de habitantes entre los paises que superan 40 grados es ${promedioCantidadHabitantesTemperaturaMasCuarenta}`);
	}
	else
	{
		mensaje = "No hay pases que superen los 40 grados de temperatura";
	}
	document.write(`<br>La temperatura minima ingresada es ${temperaturaMasBaja} y el nombre del pais es ${PaisTemperaturaMasBaja}`);
	document.write(`<br>El continente que tiene mas habitantes es ${continenteMayorHabitantes}`);

}