//nombre, planeta, edad y estatura

function definirAprendizaje(padawan)
{
    if(padawan.edad < 15)
    {
        console.log(`El padawan ${padawan.nombre} tiene ${padawan.edad} años por lo cual debe entrenarse en el manejo de la fuerza`)
    }
    else
    {
        console.log(`El padawan ${padawan.nombre} tiene ${padawan.edad} años por lo cual debe entrenarse en el manejo del sable de la luz`)
    }
}

let registrarPadawan = (nombre, planeta, edad, estatura, fn)=>{

    let nuevoPadawan = {
        nombre : nombre,
        planeta: planeta,
        edad:edad,
        estatura: estatura
    };
    fn(nuevoPadawan);
}


registrarPadawan("Julian", "marte", 14, 2, definirAprendizaje);
