function Carregar()
{
    let msn = window.document.getElementById("msn");
    let img = window.document.getElementById("img");
    let horas = new Date().getHours();
    document.body.style.backgroundColor= "#ffb764";msn.innerHTML = `Agora são ${horas} horas .`;


    // Mudar imagens
    // horas = 13;
    // horas = 19;

    if (horas >8 && horas < 12)
    {
        img.src = "imagens/i-manha00.jpeg"
        document.body.style.backgroundColor= "#ffb764";msn.innerHTML += `\nBom dia  !!!`;
    }else if (horas >=12 && horas < 18)
    {
        img.src = "imagens/i-tarde00.jpeg"
        document.body.style.backgroundColor= "#7878ff";msn.innerHTML += `\nBoa Tarde  !!!`;
    }else{
        img.src = "imagens/i-noite00.jpeg"
        document.body.style.backgroundColor= "#515154";msn.innerHTML += `\nBoa Noite  !!!`;
    }
}