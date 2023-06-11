function Tabuada()
{
    let sel = document.getElementById("sel");
    let num = Number(document.querySelector("input#num").value);

    sel.innerHTML = "";let tabu = document.createElement('option');
    tabu.text = " -- Tabuada -- ";
    sel.appendChild(tabu);

    for ( c = 0; c <= 10; c ++)
    {
        let tabu = document.createElement('option');
        tabu.text = `${num} x ${c} = ${num * c}`;
        tabu.value = `tab${c}`;
        sel.appendChild(tabu);

    }
}