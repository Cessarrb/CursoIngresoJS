/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  let tipoIngresado;
  let cantidadIngresada;
  let precioIngresado;
  let respuesta;
  let precioBruto;
  let descuento;
  let contadorCantidadBolsas;
  let contadorCantidadArena;
  let contadorCantidadCal;
  let contadorCantidadCemento;
  let precioMasCaro;
  let flag;
  let mayorCantidadBolsas;

  contadorPrecioArena = 0;
  contadorPrecioCal = 0;
  contadorPrecioCemento = 0;
  contadorCantidadArena = 0;
  contadorCantidadCal = 0;
  contadorCantidadCemento = 0;
  acumuladorPrecioBruto = 0;
  contadorCantidadBolsas = 0;
  precioTotal = 0;
  flag = 0;

  respuesta = "si";

  while(respuesta == "si")
  {
    tipoIngresado = prompt("Ingrese el tipo de producto");
    while(isNaN(tipoIngresado) == false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
    {
      tipoIngresado = prompt("Error, ingrese un producto correcto");
    }

    cantidadIngresada = prompt("Ingrese la cantidad del producto");
    cantidadIngresada = parseInt(cantidadIngresada);
    while(isNaN(cantidadIngresada) == true || precioIngresado < 1)
    {
      cantidadIngresada = prompt("Error, ingrese la cantidad de productos")
    }

    precioIngresado = prompt("Ingrese el precio");
    precioIngresado = parseInt(precioIngresado);
    while(isNaN(precioIngresado) == true || precioIngresado < 1)
    {
      precioIngresado = prompt("Error, ingrese la cantidad de productos")
      precioIngresado = parseInt(precioIngresado);
    }

    precioBruto = precioIngresado * cantidadIngresada;
    acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto; //a) El importe total a pagar , bruto sin descuento
    contadorCantidadBolsas = contadorCantidadBolsas + cantidadIngresada;

    switch (tipoIngresado)
    {
      case "arena":
        contadorCantidadArena = contadorCantidadArena + cantidadIngresada;
        contadorPrecioArena = contadorPrecioArena + precioBruto;
        break;
      case "cal":
        contadorCantidadCal = contadorCantidadCal + cantidadIngresada;
        contadorPrecioCal = contadorPrecioCal + precioBruto;
        break;
      case "cemento":
        contadorCantidadCemento = contadorCantidadCemento + cantidadIngresada;
        contadorPrecioCemento = contadorPrecioCemento + precioBruto;
        break;
    }
     //f) El tipo mas caro
     if (flag == 0 || precioIngresado > precioMasCaro)
     {
       precioMasCaro = precioIngresado;
       tipoMasCaro = tipoIngresado;
       flag = 1;
     }

    respuesta = prompt("Desea ingresar mas productos?");
  }

  //b) el importe total a pagar con descuento(solo si corresponde)
  if (contadorCantidadBolsas > 10 && contadorCantidadBolsas < 30) //b)
  {
    descuento = acumuladorPrecioBruto - acumuladorPrecioBruto * 0.15;
  }
    else
    {
      descuento = acumuladorPrecioBruto - acumuladorPrecioBruto * 0.25; 
    }
  
  //d) Informar el tipo con mas cantidad de bolsas.
  if (contadorCantidadArena > contadorCantidadCal && contadorCantidadArena > contadorCantidadCemento)
  {
    mayorCantidadBolsas = "arena";
  }
  else
  {
    if (contadorCantidadCal > contadorCantidadCemento)
    {
      mayorCantidadBolsas = "cal";
    }
    else
    {
      mayorCantidadBolsas = "cemento";
    }
  }


  document.write(`El importe total a pagar es ${acumuladorPrecioBruto}`);

  if (contadorCantidadBolsas > 10)
  {
    document.write(`<br>El importe total a pagar con descuento es ${descuento}`);
  }
  document.write(`<br>El producto con mas cantidad de bolsas es ${mayorCantidadBolsas}`);
  document.write(`<br>El tipo de producto mas caro es ${tipoMasCaro}`);
}
