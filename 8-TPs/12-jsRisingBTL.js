/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numLegajo;
	let nacionalidad;
	let flag;

	flag = 0;

	while (flag == 0) 
	{
		edad = prompt("Ingrese su edad no menor a 18 y no mayor 90 años");
		while (isNaN(edad)== true || edad < 18 || edad > 90)
		{
			edad = prompt("Edad erronea, vuelva a ingresar su edad");
		}
		sexo = prompt("Ingrese su sexo con una letra, M=masculino o F=femenino");
		while (sexo != "M" && sexo != "F")
		{
			sexo = prompt("Sexo erroneo, M para masculino o F para femenino");
		}
		switch (sexo)
		{
			case "F":
				sexo = "Femenino";
				break;
			case "M":
				sexo = "Masculino";
				break;
		}
		estadoCivil = prompt("Ingrese con un numero su estado civil: 1=Solteros 2=Casados 3=Divorciados 4=Viudos");
		while (isNaN(estadoCivil) == true || estadoCivil <0 || estadoCivil >4)
		{
			estadoCivil = prompt("Estado civil erroneo, Ingrese su estado civil: 1=Soltero/a 2=Casado/a 3=Divorciado/a 4=Viudo/a");
		} 
		switch (estadoCivil)
		{
			case 1:
				estadoCivil = "Soltero";
				break;
			case 2:
				estadoCivil = "Casado";
				break;
			case 3:
				estadoCivil = "Divorciado";
				break;
			case 4:
				estadoCivil = "Viudo";
				break;
		}		
		sueldoBruto = prompt("Ingrese su sueldo no menor a 8000");
		while (isNaN(sueldoBruto) == true || sueldoBruto < 8000) 
		{
			sueldoBruto = prompt("Sueldo erroneo, ingrese su sueldo no menor a 8000");
		}
		numLegajo = prompt("Ingrese su numero de legajo de 4 cifras");
		while (isNaN(numLegajo) == true || numLegajo.toString().length != 4 || numLegajo < 1000 || numLegajo > 9999) 
		{
			numLegajo = prompt("Lejago erroneo, ingrese su numero de legajo de 4 cifras");
		}
		nacionalidad = prompt("Ingrese su nacionalidad segun la letra: A=argentinos E=extranjeros N=nacionalizados");
		while (isNaN(nacionalidad) == false || nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
		{
			nacionalidad = prompt("Nacionalidad erronea: A=argentino/a E=extranjero/a N=nacionalizado/a");
		}
		switch (nacionalidad) 
		{
			case "A":
				nacionalidad = "Argentino";
				break;
			case "E":
				nacionalidad = "Extranjero";
				break;
			case "N":
				nacionalidad = "Nacionalizado"
				break;
		}
		flag = 1;
	}

	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;



}
