function Verificar()
{
    let genero = "";
    let data = new Date();
    let ano = data.getFullYear();
    let res = document.querySelector("div#res");
    let fano = document.getElementById("txtano");
    let fsex = document.getElementsByName("radsex");
    let teste = document.querySelector("div#teste");
    fano = fano.value;
    let idade = ano - fano;

    // var img = document.createElement('img')
    // img.setAttribute('id', 'foto')
    let img = document.querySelector("img#foto");

    if (fano.length == 0 || fano > ano)
    {
        alert("[ERRO] Dados incorretos. Tente novamente ..");
    }
    else
        {
            if (fsex[0].checked)
            {
                genero = "Homem";

                if ( idade >= 0 && idade < 10)
                {
                    img.setAttribute('src','imagens/masCrianca.jpeg');
                }
                else if (idade < 21)
                {
                    img.setAttribute('src','imagens/masAdol.jpeg');
                }
                else if (idade < 50)
                {
                    img.setAttribute('src','imagens/masAdulto.jpeg');
                }
                else if ( idade >= 50)
                {
                    img.setAttribute('src','imagens/masIdoso.jpeg');
                }
            }
            else
                {
                    if (fsex[1].checked)
                    {
                        genero = "Feminino";

                        if ( idade >= 0 && idade < 10)
                        {
                            img.setAttribute('src','imagens/femCrianca.jpeg');
                        }
                        else if (idade < 21)
                        {
                            img.setAttribute('src','imagens/femAdol.jpeg');
                        }
                        else if (idade < 50)
                        {
                            img.setAttribute('src','imagens/femAdulta.jpeg');
                        }
                        else if ( idade >= 50)
                        {
                            img.setAttribute('src','imagens/femIdosa.jpeg');
                        }
                    }
                }

        }
    res.style.textAlign = 'center';
    res.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`;
}