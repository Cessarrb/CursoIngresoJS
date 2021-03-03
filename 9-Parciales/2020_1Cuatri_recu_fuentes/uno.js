// Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más caro de los jabones, la cantidad de unidades y el fabricante
// b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
// c) Cuántas unidades de Barbijos se compraron en total
function mostrar() {
	let tipoProductoIngresado;
	let precioIngresado;
	let cantidadUnidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let productos;
	let banderaJabonMasCaro;
	let jabonMasCaro;
	let sumaUnidadesBarbijo;
	let sumaUnidadesJabon;
	let sumaUnidadesAlcohol;
	let sumaUnidadesJabonMasCaro;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon
	let promedio;

	sumaUnidadesJabonMasCaro = 0;
	contadorBarbijo = 0;
	contadorJabon =0;
	contadorAlcohol = 0;
	sumaUnidadesJabon = 0;
	sumaUnidadesBarbijo = 0;
	sumaUnidadesAlcohol = 0;
	banderaJabonMasCaro =0;
	productos = 0;

	while (productos < 2) {
		tipoProductoIngresado = prompt("Ingrese el tipo de producto entre barbijo, jabon o alcohol");
		while (isNaN(tipoProductoIngresado) == false || tipoProductoIngresado != "barbijo" && tipoProductoIngresado != "jabon" && tipoProductoIngresado != "alcohol") {
			tipoProductoIngresado = prompt("Error, ingrese el tipo de producto entre barbijo, jabon o alcohol");
		}
		precioIngresado = prompt("Ingrese el precio entre 100 y 300");
		precioIngresado = parseInt(precioIngresado);
		while (isNaN(precioIngresado) == true || precioIngresado < 1 || precioIngresado > 300) {
			precioIngresado = prompt("Error, ingrese el precio entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}
		cantidadUnidadIngresada = prompt("Ingrese la cantidad de unidades entre 1 y 1000");
		cantidadUnidadIngresada = parseInt(cantidadUnidadIngresada);
		while (isNaN(cantidadUnidadIngresada) == true || cantidadUnidadIngresada < 1 || cantidadUnidadIngresada > 1000) {
			cantidadUnidadIngresada = prompt("Error, ingrese la cantidad de unidades entre 1 y 1000");
			cantidadUnidadIngresada = parseInt(cantidadUnidadIngresada);
		}
		marcaIngresada = prompt("Ingrese la marca");
		while (isNaN(marcaIngresada) == false) {
			marcaIngresada = prompt("Error, Ingrese la marca");
		}
		fabricanteIngresado = prompt("Ingrese el fabricante");
		while (isNaN(fabricanteIngresado) == false) {
			fabricanteIngresado = prompt("Error, Ingrese el fabricante");
		}


		switch(tipoProductoIngresado)
		{
			case "barbijo": //// c) Cuántas unidades de Barbijos se compraron en total
				contadorBarbijo++;
				sumaUnidadesBarbijo = sumaUnidadesBarbijo + cantidadUnidadIngresada;
				break;
			case "jabon": //// a) Del más caro de los jabones, la cantidad de unidades y el fabricante
				contadorJabon++;
				sumaUnidadesJabon = sumaUnidadesJabon + cantidadUnidadIngresada;
				if(banderaJabonMasCaro==0 || precioIngresado>jabonMasCaro)
				{
					jabonMasCaro = precioIngresado;
					fabricanteJabonMasCaro = fabricanteIngresado;
					sumaUnidadesJabonMasCaro = sumaUnidadesJabonMasCaro + cantidadUnidadIngresada;
					banderaJabonMasCaro=1;
				}
				break;
			case "alcohol":
				contadorAlcohol++;
				sumaUnidadesAlcohol = sumaUnidadesAlcohol + cantidadUnidadIngresada;
				break;
								
		}

		productos++;
	}

	// b) Del tipo de producto con más unidades en total de la compra, el promedio por compra


	if(sumaUnidadesBarbijo>sumaUnidadesJabon && sumaUnidadesBarbijo>sumaUnidadesAlcohol)
	{
		mayorUnidades= "barbijo";
		promedio = sumaUnidadesBarbijo / contadorBarbijo;
	}
	else
	{
		if(sumaUnidadesJabon>sumaUnidadesAlcohol)
		{
			mayorUnidades = "jabon";
			promedio = sumaUnidadesJabon / contadorJabon;
		}
		else
		{
			mayorUnidades = "alcohol";
			promedio = sumaUnidadesAlcohol / contadorAlcohol;
		}
	}


	if (banderaJabonMasCaro==1)
	{
		document.write(`El jabon mas caro es ${jabonMasCaro}, la cantidad de unidades es ${sumaUnidadesJabon} y el fabricante es ${fabricanteJabonMasCaro}`);
	}
	else
	{
		document.write(`No se compraron jabons`);
	}


	document.write(`<br>La cantidad con mas unidades en total de la compra es ${mayorUnidades} y el promedio por compra es ${promedio}`);


	if(sumaUnidadesBarbijo!=0)
	{
		document.write(`<br>La cantidad de barbijos que se compraron en total es ${sumaUnidadesBarbijo}`);
	}
	else
	{
		document.write(`<br>No se compraron barbijos`);

	}

}
