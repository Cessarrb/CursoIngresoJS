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

  acumuladorPrecioBruto = 0;
  precioTotal = 0;

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
    acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;
    contadorCantidadBolsas = contadorCantidadBolsas + cantidadIngresada;

    respuesta = prompt("Desea ingresar mas productos?");
  }
  
  alert(`El importe total a pagar es ${acumuladorPrecioBruto}`);

  if (cantidadIngresada > 10) //b)
  {
    if (cantidadIngresada < 30)
    {
      descuento = acumuladorPrecioBruto - acumuladorPrecioBruto * 0.15;

    }
    else
    {
      if (cantidadIngresada > 30)
      {
        descuento = acumuladorPrecioBruto - acumuladorPrecioBruto * 0.25; 
      }
    }
    alert(`Y el importe total a pagar con descuento es ${descuento}`);
  }

}
