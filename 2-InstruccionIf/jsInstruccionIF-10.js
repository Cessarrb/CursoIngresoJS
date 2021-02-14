function mostrar()
{
	/*let nota

	nota = Math.round(Math.random() * 9 + 1);
	
	if (nota >8)
	{
		alert(`EXCELENTE. Nota ${nota}`);
	}
	else 
	{
		if (nota >3)
		{
			alert(`APROBO. Nota ${nota}`);
		}
		else 
		{
			alert(`Vamos, la proxima se puede. Nota ${nota}`);
		}

	}*/

	let nota;
	let mensaje;

	nota = Math.round(Math.random() * 9 + 1)

	if (nota >8)
	{
		mensaje = `Execelente. ${nota}`;
	}
	else 
	{
		if (nota >3)
		{
			mensaje = `APROBO. ${nota}`;
		}
		else
		{
			mensaje = `Vamos, la proxima se puede. ${nota}`;
		}
	}
	alert(`${mensaje}`);
}//FIN DE LA FUNCIÓN