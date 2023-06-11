let cad = []
let finalizar = document.getElementById("finalizar");

function Arquivo()
{
    let contem = false;
    let sel = document.getElementById("sel");
    let num = Number(document.getElementById("num").value);

    if ((num >= 1 && num <= 100 ))
    {
        for (item in cad)
        {
            if (cad[item] == num)
            {
                alert("Número inválido repetido ou fora dos limites estabelecidos.\nTente novamente.");
                contem = true;
            }
        }
        if (contem == false)
        {
            finalizar.innerHTML = '';
            cad.push(num);
            adicionado = document.createElement("option");
            adicionado.text = `Valor ${num} adicionado.`
            sel.appendChild(adicionado);
        }
    }
    else
    {
        alert("Número inválido, repetido ou fora dos limites estabelecidos.\nTente novamente.");
    }
}
function Finalizar()
{
    if (cad.length < 1)
    {
        alert("Adicione valores antes de finalizar ....");
    }
    else
    {
        let maior = cad[0],menor = maior;
        let somaTotal = media = 0;
        finalizar.innerHTML = '';

        for (item in cad)
        {
            if ( cad[item] > maior){maior = cad[item];}
            if (cad[item] < menor){menor = cad[item];}
            somaTotal += cad[item];
        }
        media = somaTotal / cad.length;

        finalizar.innerHTML = `
        Ao todo temos ${cad.length} números cadastrados.<br>
        O maior número informado foi ${maior} .<br>
        O menor número informado foi ${menor} .<br>
        Somando todos os valores, temos ${somaTotal} .<br>
        A média dos valores digitados é ${media} .<br>`
    }
}