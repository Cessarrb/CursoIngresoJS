// Debemos realizar la carga de una compra de 5(cinco) productos de desinfección de cada una debo obtener los siguientes datos:
// El nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
// El precio (validar entre 100 y 300),
// La cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// El tipo de inflamable ("ignífugo", "combustible", "explosivo") y la Marca.
// Se debe Informar al usuario lo siguiente:
// a) El promedio de cantidad por tipo de producto
// b) El tipo de inflamable con más cantidad de unidades en total de la compra
// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
// d) la marca y tipo del más caro de los productos
function mostrar() 
{
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let tipoInflamable;
	let marcaProducto;
	let productos;
	let contadorAlcohol;
	let contadorIac;
	let contadorQuat;
	let sumaCantidadAlcohol;
	let sumaCantidadIac;
	let sumaCantidadQuat;
	let sumaCantidadIgnifugo;
	let sumaCantidadCombustible;
	let sumaCantidadExplosivo;
	let sumadorCantidadPrecioMenor;
	let productoMasCaro;
	let marcaProductoMasCaro;
	let tipoProductoMasCaro;
	let banderaProductoMasCaro;
	let mayorCantidadInflamable;

	banderaProductoMasCaro=0;
	sumadorCantidadPrecioMenor=0;
	sumaCantidadIgnifugo=0;
	sumaCantidadCombustible=0;
	sumaCantidadExplosivo=0;
	sumaCantidadAlcohol=0;
	sumaCantidadIac=0;
	sumaCantidadQuat=0;
	contadorAlcohol=0;
	contadorIac=0;
	contadorQuat=0;
	productos=0;

	while(productos<2)
	{
		tipoProducto=prompt("Ingrese el tipo de producto: alcohol, iac o quat")
		while(isNaN(tipoProducto)==false || tipoProducto!="alcohol" && tipoProducto!="iac" && tipoProducto!="quat")
		{
			tipoProducto=prompt("Error, ingrese el tipo de producto: alcohol, iac o quat")
		}
		precioProducto=prompt("Ingrese el precio del producto entre 100 y 300")
		precioProducto=parseInt(precioProducto);
		while(isNaN(precioProducto)==true || precioProducto<100 || precioProducto>300)
		{
			precioProducto=prompt("Error, ingrese el precio del producto entre 100 y 300");
			precioProducto=parseInt(precioProducto);
		}
		cantidadProducto=prompt("Ingrese la cantidad de unidades del producto entre 1 y 1000");
		cantidadProducto=parseInt(cantidadProducto);
		while(isNaN(cantidadProducto)==true || cantidadProducto<1 || cantidadProducto>1000)
		{
			cantidadProducto=prompt("Error, ingrese la cantidad de unidades del producto entre 1 y 1000");
			cantidadProducto=parseInt(cantidadProducto);
		}
		tipoInflamable=prompt("Ingrese el tipo de inflamable: ignifugo, combustible o explosivo");
		while(isNaN(tipoInflamable)==false || tipoInflamable!="ignifugo" && tipoInflamable!="combustible" && tipoInflamable!="explosivo")
		{
			tipoInflamable=prompt("Error, ingrese el tipo de inflamable: ignifugo, combustible o explosivo");
		}
		marcaProducto=prompt("Ingrese la marca");
		while(isNaN(marcaProducto)==false)
		{
			marcaProducto=prompt("Ingrese la marca");
		}

		// a) El promedio de cantidad por tipo de producto
		switch(tipoProducto)
		{
			case "alcohol":
				sumaCantidadAlcohol=sumaCantidadAlcohol+cantidadProducto;
				contadorAlcohol++;
				break;
			case "iac":
				sumaCantidadIac=+sumaCantidadIac+cantidadProducto;
				contadorIac++;
				if(precioProducto<200)
				{
					sumadorCantidadPrecioMenor=sumadorCantidadPrecioMenor+cantidadProducto;
				}
				break;
			case "quat":
				sumaCantidadQuat=sumaCantidadIac+cantidadProducto;
				contadorQuat++;
				break;
		}

		//(b) El tipo de inflamable ("ignífugo", "combustible", "explosivo") y la Marca.
		switch(tipoInflamable)
		{
			case "ignifugo":
				sumaCantidadIgnifugo=sumaCantidadIgnifugo+cantidadProducto;
				break;
			case "combustible":
				sumaCantidadCombustible=sumaCantidadCombustible+cantidadProducto;
				break;
			case "explosivo":
				sumaCantidadExplosivo=sumaCantidadExplosivo+cantidadProducto;
				break;
		}

		// d) la marca y tipo del más caro de los productos
		if(banderaProductoMasCaro==0 || precioProducto>productoMasCaro)
		{
			productoMasCaro=precioProducto;
			marcaProductoMasCaro=marcaProducto;
			tipoProductoMasCaro=tipoProducto;
			banderaProductoMasCaro=1;
		}

		productos++;
	}
	document.write("Hola señor thompson")
	if(sumaCantidadIgnifugo>sumaCantidadCombustible && sumaCantidadIgnifugo>sumaCantidadExplosivo)
	{
		mayorCantidadInflamable="ignifugo";
	}
	else
	{
		if(sumaCantidadCombustible>sumaCantidadExplosivo)
		{
			mayorCantidadInflamable="combustible";
		}
		else
		{
			mayorCantidadInflamable="explosivo";
		}
	}

	// a) El promedio de cantidad por tipo de producto
	if(contadorAlcohol!=0)
	{
		promedioAlcohol=sumaCantidadAlcohol/contadorAlcohol;
		document.write(`El promedio de alcohol es ${promedioAlcohol}`);
	}
	else
	{
		promedioAlcohol="<br>No se ingreso alcohol";
	}
	if(contadorIac!=0)
	{
		promedioIac=sumaCantidadIac/contadorIac;
		document.write(`<br>El promedio de iac es ${promedioIac}`);

	}
	else
	{
		promedioIac="<br>No se ingreso iac";
	}
	if(contadorQuat!=0)
	{
		promedioQaut=sumaCantidadQuat/contadorQuat;
		document.write(`<br>El promedio de qaut es ${promedioQaut}`);
	}
	else
	{
		promedioQaut="<br>No se ingreso Quat";
	}



	document.write(`<br>El tipo de inflamable con mas cantidad es ${mayorCantidadInflamable}`);
	if(sumadorCantidadPrecioMenor!=0)
	{
		document.write(`<br>Hay ${sumadorCantidadPrecioMenor} unidades de iac con preio menor a 200`);
	}
	else
	{
		document.write(`<br>No se ingreso el producto iac`);
	}
	document.write(`<br>El producto mas caro es ${productoMasCaro} y la marca es ${marcaProductoMasCaro}`);
	
}//FIN DE LA FUNCIÓN