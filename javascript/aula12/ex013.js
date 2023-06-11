let data = new Date();
let dia = data.getDay();
console.log(`Agora é o ${dia+1} dia da semana...`);

switch(dia+1){
    case 1:
    case 7:
        console.log("Fim de semana")
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Meio de semana....");
        break;
}