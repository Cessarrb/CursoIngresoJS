function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let seguir;
    let contTempPares;
    let flag;
    let contTempBajoCero;
    let promedioDePeso;
    let contMarca;
    let pesoMax;
    let pesoMin;
    let marcaPesada;
    let sumaDeProductos;

    sumaDeProductos = 0;
    contMarca = 0;
    contTempBajoCero = 0;
    flag = 0;
    contTempPares = 0;
    seguir = "si";

    while (seguir == "si")
    {
        marca = prompt("Ingrese la marca");
        while(isNaN(marca)== false)
        {
            marca = prompt("Error, ingrese la marca")
        }
        peso = prompt("Ingres el peso");
        peso = parseInt(peso);
        while(isNaN(peso)==true || peso < 1 || peso > 100)
        {
            peso = prompt("Error, ingrese el peso")
            peso = parseInt(peso);
        }
        temperatura = prompt("Ingrese la temperatura")
        temperatura = parseInt(temperatura);
        while(isNaN(temperatura)== true || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Error, ingrese la temperatura");
            temperatura = parseInt(temperatura);
        }
        if (temperatura % 2 == 0) //a)
        {
            contTempPares = contTempPares + 1;
        }
        if (flag == 0 || peso > pesoMax) //b) y f)
        {
            pesoMax = peso;
            marcaPesada = marca;
        }
        if (flag == 0 || peso < pesoMin) //f)
        {
            pesoMin = peso;
        }
        if (temperatura < 0) //c)
        {
            contTempBajoCero = contTempBajoCero + 1;
        }

        sumaDeProductos = sumaDeProductos + peso;
        contMarca = contMarca + 1;
        flag = 1;

        seguir = prompt("Desea ingresar nuevos datos?")
    }

    promedioDePeso = sumaDeProductos / contMarca; //d)


    document.write
    (
        `Contador de temperaturas pares = ${contTempPares}
        <br>Marca pesada = ${marcaPesada}
        <br>Cantidad de produsctos bajo cero = ${contTempBajoCero}
        <br>Promedio de peso de los producots = ${promedioDePeso}
        <br>El peso maximo = ${pesoMax}
        <br>El peso minimo = ${pesoMin}`
    )

}
