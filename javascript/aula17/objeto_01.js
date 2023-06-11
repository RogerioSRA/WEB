let amigo = {nome: 'jose',
             sexo: 'm',
             peso: 85.4,
             Engordar(p=0)
             {
                console.log("Engordou ");
                this.peso += 10;
             }};


amigo.Engordar(10);
console.log(amigo);