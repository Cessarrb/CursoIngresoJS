//Algañaras Cesar ejercicio 1
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar() {
	let tipoIngresado;
	let precioIngresado;
	let unidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let productos;
	let banderaAlcoholBarato;
	let precioAlcoholBarato;
	let cantidadUnidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let cantidadUnidadesBarbijo;
	let cantidadUnidadesJabon;
	let cantidadUnidadesAlcohol;
	let promedio;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;


	contadorBarbijo = 0;
	contadorJabon =0;
	contadorAlcohol = 0;
	cantidadUnidadesBarbijo = 0;
	cantidadUnidadesJabon = 0;
	cantidadUnidadesAlcohol = 0;
	banderaAlcoholBarato = 0;
	cantidadUnidadesAlcoholBarato = 0;
	cantidadUnidadesJabon = 0;
	productos = 0;

	while (productos < 2) 
	{
		tipoIngresado = prompt("Ingrese el tipo de unidad: barbijo, jabon o alcohol")
		while (isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol") {
			tipoIngresado = prompt("Error, Ingrese el tipo de unidad: barbijo, jabon o alcohol");
		}
		precioIngresado = prompt("Ingrese el precio entre 100 y 300");
		precioIngresado = parseInt(precioIngresado);
		while (isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300) {
			precioIngresado = prompt("Error, ingrese el precio entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}
		unidadIngresada = prompt("Ingrese la cantidad de unidad no mayor a 1000");
		unidadIngresada = parseInt(unidadIngresada);
		while (isNaN(unidadIngresada) == true || unidadIngresada < 0 || unidadIngresada > 1000) {
			unidadIngresada = prompt("Error, ingrese la cantidad de unidar no mayor a 1000");
			unidadIngresada = parseInt(unidadIngresada);
		}
		marcaIngresada = prompt("Ingrese la marca del producto")
		while (isNaN(marcaIngresada) == false) {
			marcaIngresada = prompt("Error, ingrese la marca del producto");
		}
		fabricanteIngresado = prompt("Ingrese el fabricante del producto")
		while (isNaN(fabricanteIngresado) == false) {
			fabricanteIngresado = prompt("Error, ingrese el fabricante del producto");
		}

		//b) Del tipo con mas unidades, el promedio por compra
		switch (tipoIngresado)
		{
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				cantidadUnidadesBarbijo = cantidadUnidadesBarbijo + unidadIngresada;
				break;
			case "jabon":
				contadorJabon = contadorJabon + 1;
				cantidadUnidadesJabon = cantidadUnidadesJabon + unidadIngresada; //c) Cuántas unidades de jabones hay en total
				break;
			case "alcohol":

				if (banderaAlcoholBarato == 0 || precioIngresado < precioAlcoholBarato) {
					precioAlcoholBarato = precioIngresado;
					cantidadUnidadesAlcoholBarato = unidadIngresada;
					fabricanteAlcoholBarato = fabricanteIngresado;
					banderaAlcoholBarato = 1;
				}
				contadorAlcohol = contadorAlcohol + 1;
				cantidadUnidadesAlcohol = cantidadUnidadesJabon + unidadIngresada;
				break;
		}
		productos = productos + 1;
	}

	if(cantidadUnidadesBarbijo > cantidadUnidadesJabon && cantidadUnidadesBarbijo > cantidadUnidadesAlcohol)
		{
			mayorCantidadUnidades = "barbijo";
			promedio = cantidadUnidadesBarbijo / contadorBarbijo;
		}
		else
		{
			if(cantidadUnidadesJabon > cantidadUnidadesAlcohol)
			{
				mayorCantidadUnidades = "jabon";
				promedio = cantidadUnidadesJabon / contadorJabon;
			}
			else
			{
				mayorCantidadUnidades = "alcohol";
				promedio = cantidadUnidadesAlcohol / contadorAlcohol;
			}
		}

		if(banderaAlcoholBarato == 1)
		{
			document.write(`El alcohol mas barato es ${precioAlcoholBarato}, la cantidad de unidades es ${cantidadUnidadesAlcoholBarato} y su fabricantes es ${fabricanteAlcoholBarato}`);
		}
		else
		{
			document.write(`No se ingreso alcohol`);
		}

		document.write(`<br>El tipo con mayor cantidad de unidades es ${mayorCantidadUnidades} y su promedio por compra es ${promedio}`);
		document.write(`<br>La cantidad de unidades de jabon es ${cantidadUnidadesJabon}`);
}