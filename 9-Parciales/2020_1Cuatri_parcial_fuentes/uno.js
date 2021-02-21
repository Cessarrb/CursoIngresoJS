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

function mostrar() 


{
	let contadorProducto;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let banderaDelPrimero;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let mayorCantidad;
	let promedio;
	let contadorCantidadBarbijo;
	let contadorCantidadJabon;
	let contadorCantidadAlcohol;

	contadorProducto = 0;
	banderaDelPrimero = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	contadorCantidadBarbijo = 0;
	contadorCantidadJabon = 0;
	contadorCantidadAlcohol = 0;



	while(contadorProducto < 3)
	{
		contadorProducto = contadorProducto + 1;

		tipoIngresado = prompt("Ingrese el tipo de producto");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado !="jabon" && tipoIngresado != "alcohol")
		{
			tipoIngresado = prompt("Error, ingrese el tipo de producto")
		}

		precioIngresado = prompt("Ingrese el precio");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado == true) || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error, ingrese un precio entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese la cantidad de productos entre 1 y 1000");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada) == true || cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("Error, ingrese una cantidad de productos entre 1 y 1000");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		marcaIngresada = prompt("Ingrese la marca");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error, ingrese la marca");
		}

		fabricanteIngresado = prompt("Ingrese el fabricante");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado = prompt("Error, ingrese el fabricante");
		}

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		/*banderaDelPrimero = 0;

		if (tipoIngresado == "alcohol")
		{
			if (banderaDelPrimero = 0 || precioAlcoholBarato < precioIngresado)
			{
				precioAlcoholBarato = precioIngresado;
				cantidadAlcoholBarato = cantidadIngresada;
				fabricanteAlcholBarato = fabricanteIngresado;
				banderaDelPrimero = 1;
			}
		}*/
		
		//b) Del tipo con mas unidades, el promedio por compra

		switch (tipoIngresado)
		{
			case "barbijo":
				contadorCantidadBarbijo = cantidadIngresada + contadorCantidadBarbijo;
				contadorBarbijo = contadorBarbijo + 1;
				break;
			case "jabon": //c) Cuántas unidades de jabones hay en total
				contadorCantidadJabon= contadorCantidadJabon + cantidadIngresada;
				contadorJabon = contadorJabon + 1;
				break;
			case "alcohol":
				contadorCantidadAlcohol = contadorCantidadAlcohol + cantidadIngresada;
				contadorAlcohol = contadorAlcohol + 1;

				//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
					if (banderaDelPrimero == 0 || precioIngresado < precioAlcoholBarato)
					{
						precioAlcoholBarato = precioIngresado;
						cantidadAlcoholBarato = cantidadIngresada;
						fabricanteAlcoholBarato = fabricanteIngresado;
						banderaDelPrimero = 1;
					}
				break;
		}
	}//Fin de while

	if (contadorCantidadJabon > contadorCantidadBarbijo && contadorCantidadJabon > contadorCantidadAlcohol)
	{
		mayorCantidad = "jabon";
		promedio = contadorCantidadJabon / contadorJabon;
	}
	else
	{
		if (contadorCantidadBarbijo > contadorCantidadAlcohol)
		{
			mayorCantidad = "barbijo";
			promedio = contadorCantidadBarbijo / contadorBarbijo;
		}
		else
		{
			mayorCantidad = "alcohol";
			promedio = contadorCantidadAlcohol / contadorAlcohol;
		}
	}

	if (banderaDelPrimero == 1)
	{
		document.write(`El precio de alcohol mas barato es ${precioAlcoholBarato} Cantidad de unidades ${cantidadAlcoholBarato} y el fabricante es ${fabricanteAlcoholBarato}`);
	}
	else
	{
		document.write(`No se ingreso el producto alcohol`);
	}
	document.write(`<br>El producto con mayor unidades es ${mayorCantidad} y el promedio es ${promedio}`);
	document.write(`<br>La cantidad de unidades de jabon es ${contadorCantidadJabon}`);
}