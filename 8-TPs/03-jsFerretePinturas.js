/*3. Algañaras Cesar
    Ejercicio de Pinturas
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempF;  
    let tempC;

    tempF = document.getElementById("txtIdTemperatura").value;
    tempF = parseFloat(tempF);
    tempC = (tempF - 32.00) / 1.8;

    alert(`${tempF} farenheit son ${tempC} centigrados`);

}

function CentigradosFahrenheit () 
{
    let tempC;  
    let tempF;

    tempC = document.getElementById("txtIdTemperatura").value;
    tempC = parseFloat(tempC);
    tempF = tempC * 1.8 + 32.00;

    alert(`${tempC} centigrados son ${tempF} farenheit`);

}