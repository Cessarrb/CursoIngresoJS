/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//Algañaras Cesar Ejercicio
function CalcularPrecio() 
{
    let lamparas;
    let precioFinal;
    let descuento;
    let marca;
    let precioLamp;
    let precio
    let iibb;

    lamparas = document.getElementById("txtIdCantidad").value;
    lamparas = parseInt(lamparas);
    marca = document.getElementById("Marca").value;

    precioLamp = 35;

    switch (lamparas) 
    {
        case 3:
            switch (marca) 
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break
                default:
                    descuento = 5;
                    break;
            }
            break;
        case 4:
            switch (marca) 
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
            break;
        case 5:
            switch (marca) 
            {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
                    break;
            }
            break;
        default:
            descuento = 50;
            break;
    }

    precio = lamparas * precioLamp;
    precioFinal = precio - (precio * descuento / 100);

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    //Ejercicio Final

    if (precioFinal > 120) 
    {
        iibb = precioFinal * 10 / 100;
        precioFinal = precioFinal + iibb;
        alert(`IIBB Usted pago $${precioFinal} siendo $${iibb} el impuesto que se pago.`);
    }
}

//VARIANTE DE DESCUENTO SOLO CON IF

/*if (lamparas > 5) //Ejercicio A
    {
        descuento = 50;
    }
    else //Ejercicio B
    {
        if (lamparas == 5)
        {
            if (marca == "ArgentinaLuz") 
            {
                descuento = 40;
            }
            else 
            { 
                descuento = 30;
            }
        } 
        else //Ejercicio C
        {
            if (lamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                {
                    descuento = 25;
                }
                else
                {  
                    descuento = 20;
                }
            }
            else //Ejercicio D
            {
                if (lamparas == 3)
                {
                    if (marca == "ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }
                }
            }
        }
    }*/