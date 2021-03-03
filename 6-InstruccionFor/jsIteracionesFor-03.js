//Algañaras Cesar
/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano*/
function mostrar()
{
	let tipoMascota;
	let tipoPelajeMascota;
	let edadMascota;
	let nombreMascota;
	let razaMascota;
	let pesoMascota;
	let estadoclinicoMascota;
	let temperaturaCorporalMascota;
	let seguir;
	let MascotaMasPesada;
	let banderaPerroPesado;
	let ultimoNombreMascotaOtraCosa;
	let banderaSinPeloTempMenor;
	let sumadorTemperaturaCorporalPerro;
	let sumadorTemperaturaCorporalGato;
	let sumadorTemperaturaCorporalOtraCosa;
	let contadorPerro;
	let contadorGato; //CTRL + ALT SELECCION Y DPS SHIFT + FIN
	let contadorOtraCosa;
	let sumadorGatosYperros;
	let estadoEnfermo;
	let estadoInternado;
	let estadoAdopcion;


	estadoEnfermo = 0;
	estadoInternado = 0;
	estadoAdopcion = 0;
	sumadorGatosYperros = 0;
	sumadorTemperaturaCorporalPerro = 0;
	sumadorTemperaturaCorporalGato = 0;
	sumadorTemperaturaCorporalOtraCosa = 0;
	contadorPerro = 0;
	contadorGato = 0;
	contadorOtraCosa = 0;
	banderaSinPeloTempMenor =0;
	banderaPerroPesado = 0;
	sumadorMascotas = 0;
	sumadorMascotaEnfermas = 0;
	seguir = "si";


	while(seguir == "si")
	{
		tipoMascota = prompt("Ingrese el tipo de mascota: perro, gato u otra cosa");
		while(isNaN(tipoMascota)==false || tipoMascota !="perro" && tipoMascota != "gato" && tipoMascota != "otra cosa")
		{
			tipoMascota = prompt("Error, ingrese el tipo de mascota: perro, gato u otra cosa");
		}
		tipoPelajeMascota = prompt("Ingrese el tipo de pelaje: corto, largo o sin pelo");
		while(isNaN(tipoPelajeMascota)==false || tipoPelajeMascota != "corto" && tipoPelajeMascota != "largo" && tipoPelajeMascota != "sin pelo")
		{
			tipoPelajeMascota = prompt("Error, ingrese el tipo de pelaje: corto, largo o sin pelo");
		}
		edadMascota = prompt("Ingrese la edad de la mascota");
		edadMascota = parseInt(edadMascota);
		while(isNaN(edadMascota)==true || edadMascota <1 || edadMascota >30)
		{
			edadMascota = prompt("Error, ingrese la edad de la mascota");
		}
		nombreMascota = prompt("Ingrese el nombre de la mascota");
		while(isNaN(nombreMascota)==false)
		{
			nombreMascota = prompt("Error, Ingrese el nombre de la mascota");
		}
		razaMascota = prompt("Ingrese la raza de la mascota");
		while(isNaN(razaMascota)==false)
		{
			razaMascota = prompt("Error, ingrese la raza de la mascota")
		}
		pesoMascota = prompt("Ingrese el peso de la mascota");
		pesoMascota = parseInt(pesoMascota);
		while(isNaN(pesoMascota)==true || pesoMascota <1 || pesoMascota >100)
		{
			pesoMascota = prompt("Error, ingrese el peso de la mascota");
			pesoMascota = parseInt(pesoMascota);
		}
		estadoclinicoMascota =prompt("Ingrese el estado clinico de la mascota: enfermo, internado o adopcion");
		while(isNaN(estadoclinicoMascota)==false || estadoclinicoMascota != "enfermo" && estadoclinicoMascota != "internado" && estadoclinicoMascota != "adopcion")
		{
			estadoclinicoMascota =prompt("Error, Ingrese el estado clinico de la mascota");
		}
		temperaturaCorporalMascota = prompt("Ingrese la temperatura corporal de la mascota");
		while(isNaN(temperaturaCorporalMascota)== true || temperaturaCorporalMascota <20 || temperaturaCorporalMascota > 45)
		{
			temperaturaCorporalMascota = prompt("Error, Ingrese la temperatura corporal de la mascota");
		}

		switch(tipoMascota)
		{
			case "perro":
				contadorPerro++;
				sumadorTemperaturaCorporalPerro= sumadorTemperaturaCorporalPerro + temperaturaCorporalMascota;
				if(banderaPerroPesado==0 || pesoMascota > MascotaMasPesada)
				{
					MascotaMasPesado = pesoMascota;
					banderaPerroPesado++;
				}
				if(estadoclinicoMascota=="enfermo")
				{
					sumadorMascotaEnfermas++;
				}
				break;
			case "gato":
				contadorGato++;
				sumadorTemperaturaCorporalGato = sumadorTemperaturaCorporalGato + temperaturaCorporalMascota;
				if(estadoclinicoMascota=="enfermo")
				{
					sumadorMascotaEnfermas++;
				}
				break;
			case "otra cosa":
				contadorOtraCosa++;
				sumadorTemperaturaCorporalOtraCosa = sumadorTemperaturaCorporalOtraCosa + temperaturaCorporalMascota;
				ultimoNombreMascotaOtraCosa = nombreMascota; //c)El nombre de la ultima mascota de tipo "otra cosa"
				if(estadoclinicoMascota=="enfermo")
				{
					sumadorMascotaEnfermas++;
				}
				break;
		}

		// d)El animal sin pelo con menor temperatura corporal

		if(tipoPelajeMascota=="sin pelo")
		{
			if(banderaSinPeloTempMenor==0 || temperaturaCorporalMascota<temperaturaCorporalMenorSinPelo)
			{
				temperaturaCorporalMenorSinPelo = temperaturaCorporalMascota;
				banderaSinPeloTempMenor++;
			}
	
		}

		//g)Que estado clinico tiene la menor cantidad de mascotas Parte 1
		switch(estadoclinicoMascota)
		{
			case "enfermo":
				estadoEnfermo++;
				break;
			case "internado":
				estadoInternado++;
				break;
			case "adopcion":
				estadoAdopcion++;
				break;
		}

		sumadorMascotas++;
		seguir = prompt("Desea ingresar mas datos de mascotas? Ingrese si o no");
	}//Fin del while


	//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal

	promedioTemeperaturaPerro = (sumadorTemperaturaCorporalPerro / contadorPerro);
	promedioTemeperaturaGato = (sumadorTemperaturaCorporalGato / contadorGato);
	promedioTemeperaturaOtraCosa = (sumadorTemperaturaCorporalOtraCosa / contadorOtraCosa);

	if(promedioTemeperaturaPerro>promedioTemeperaturaGato && promedioTemeperaturaPerro>promedioTemeperaturaOtraCosa)
	{
		mayorPromedioTemperatura = "perro";
	}
	else
	{
		if(promedioTemeperaturaGato>promedioTemeperaturaOtraCosa)
		{
			mayorPromedioTemperatura = "gato";
		}
		else
		{
			mayorPromedioTemperatura = "otra cosa";
		}
	}


	//f)Sumando gatos y perros que porcentaje del total de mascotas son?
	sumadorGatosYperros = contadorGato + contadorPerro;
	

	if(sumadorGatosYperros>0)
	{
		porcentajeGatosYperros = (sumadorGatosYperros * 100) / sumadorMascotas;
	}
	
	//g)Que estado clinico tiene la menor cantidad de mascotas Part 2
	if(estado)
	{
		
	}

	/*g)Que estado clinico tiene la menor cantidad de mascotas
	H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	i)El nombre y raza del gato sin pelos mas liviano*/
}//FIN DE LA FUNCIÓN






















/*let repeticiones;
	let contador;
	
	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);
	
	for(contador=0;contador<repeticiones;contador++)
	{
		console.log("Hola UTN FRA");
	}
*/