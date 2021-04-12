function RevisarNumero(numeroSerie)
{
    let numInicial = numeroSerie.toString().substr(0,2);

    if(Number(numInicial) > 10)
    {
        return false;
    }
    else
    {
        return true;
    }
}


let DespegarNave = (numSerie, fn) =>{
    
    if(fn(numSerie))
    {
        console.log(`La Nave ha despegado ya que el número de serie comienza en ${numSerie.toString().substr(0,2)} `)
    }
    else
    {
        console.log(`La Nave NO ha despegado ya que el número de serie comienza en ${numSerie.toString().substr(0,2)} `)
    }
}


DespegarNave('01012345', RevisarNumero);




