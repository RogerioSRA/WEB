function Apaga()
{
    let contando = document.querySelector("p#contando");
    contando.innerHTML ="## "    ;
}
function Contar()
{
    let inicio = Number(document.querySelector("input#ini").value);
    let fim = Number(document.querySelector("input#fim").value);
    let passo = Number(document.querySelector("input#passo").value);
    let contando = document.querySelector("p#contando");

    if ( inicio.length == 0 || fim.length == 0 || passo.length == 0)
    {
        alert(" valor nulo, Tente novamente ...");
    }
    else
        {
            if (inicio > fim)
            {
                for( inicio = inicio ; inicio >= fim; inicio -= passo)
                {
                    contando.innerHTML += (inicio + 
                        " \u{1f3c5} ");
                }
            }
            else if (inicio < fim)
            {
                for( inicio = inicio ; inicio <= fim; inicio += passo)
                {
                    contando.innerHTML += (inicio + "  \u{1f3c5}  ");
                }
            }
            else
            {
                alert("Valores de início e fim são iguais...");
            }
        }
}