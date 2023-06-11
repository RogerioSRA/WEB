var menu = {
    Menu : function(){
        let menu = 'Bem Vindo ao <mark>"De Tudo Um Pouco"</mark>'+
        '</br></br>Escolha uma tarefa:'+
        '</br></br>1 - Sair'+
        '</br>2 - Tabuada'+
        '</br>3 - Ler Arquivo'+
        '</br>4 - Média de Valores'+
        '</br>5 - Cadastro de Pessoas'+
        '<p>Sua escolha: <input type="number" name="escolha" id="escolha" min="1" max="5" size="1"><input type="button" value="Ok" onclick="menu.Choose();"></p>';
        xsection.innerHTML = menu;
    },
    Choose : function(){
        let choose = parseInt(document.querySelector("input").value);
        switch (choose){
            case 1:
                Sair();
                break;
            case 2:
                Tabuada.Tela();
                break;
            case 3:
                LerArquivos();
                break;
            case 4:
                Media.Tela();
                break;
            case 5:
                Cadastro.Tela();
                break;
            default:
                document.writeln("Opção inválida");
                break;
        }
    },
};
function Sair(){
    document.querySelector("body").innerHTML = "Até uma próxima  !";
}
var Tabuada = {
    Tela : function(){
        console.log("Tabuada Tela");
        telaT = '===== Tabuada ====='+
        '</br><p>Número para a tabuada: <input type="number" name="num" id="num" min="0" max="10" size="1" value="0"><input type="button" value="Ok" onclick="Tabuada.Conclusao();">',
        xsection.innerHTML = telaT
    },
    Conclusao : function(){
        console.log("Conclusao");
        let num = parseInt(document.querySelector("input").value);
        for (i = 0; i <= 10; i++){
            xsection.innerHTML += `${num} x ${i} = ${num * i}</br>`;
        }
        xsection.innerHTML += '</br>Novo número?</br>1)Sim - 2)Não <input type="number" id="nTab" min="1" max="2" size="1" value="1"><input type="button" value="Ok" onclick="Tabuada.NewChoose();"> ';
    },
    NewChoose : function(){
        let n = document.querySelector("#nTab").value;
        if(n == "1" ? this.Tela() : menu.Menu());    
    }
};
function LerArquivos(){
    let arquivo = '/home/rogerio/Documentos/GitHub_Cursos/WEB/Documento.txt';
    console.clear();
    console.log(arquivo);
}
var Media = {
    Tela : function(){
        console.log("Media Tela");
        let telaMV= '===== Média entre Valores =====</br>'+
        '</br>De quantos valores deseja tirar a média ? </br><input type="number" name="numQ" id="numQ" min="2" size="5" value="2"><input type="button" value="Ok" onclick="Media.Choose();">';
        xsection.innerHTML = telaMV;
    },
    Choose : function(){
        console.log("Media Choose");
        quant = parseInt(document.querySelector("#numQ").value);
        xsection.innerHTML = '===== Média entre Valores =====</br>'+
        `</br/>Entre com os ${quant} valores:</br>`;

        for ( i = 1; i <= quant; i ++){
            xsection.innerHTML += `</br>${i} Valor: <input type="number" id="num${+i}" min="0" size="5" value="0">`;
        }
        xsection.innerHTML += '</br></br><input type="button" value="Calcular a média" onclick="Media.Calculo();">';
    },
    Calculo : function(){
        console.log("Media Calculo");
        let res = 0;
        let num = [];
        for ( i = 1; i <= quant; i ++){
            num[i] = document.querySelector(`#num${+i}`).value;
        }
        for (i = 1; i <= quant; i++){
            res += parseInt(num[i]);
        }
        res = res / quant;
        xsection.innerHTML +=`</br></br>`+
        `A média entre esses números é ${res} .`
        xsection.innerHTML += '</br></br>Nova média?</br>1)Sim - 2)Não <input type="number" id="nMedia" min="1" max="2" size="1" value="1"><input type="button" value="Ok" onclick="Media.NewChoose();"> '
    },
    NewChoose : function(){
        let n = document.querySelector("#nMedia").value;
        if(n == "1" ? this.Tela() : menu.Menu());    
    },
};
var Cadastro = {    
    Tela : function(){
        const tela = 'Entre com os dados da pessoa pretendida:</br>'+
        '</br>Nome__: <input type="text" id="cNome">'+
        '</br>CPF____: <input type="number" id="cCpf">'+
        '</br>RG_____: <input type="number" id="cRg">'+
        '</br>Telefone:<input type="tel" id="cTel">'+ '<input type="button" value="Cadastrar" onclick="Cadastro.CapArmDados()"></input>'+
        '<input type="button" value="Menu" onclick="menu.Menu()"></input>';
        xsection.innerHTML = tela;
        if (this.numCadastro === undefined){
            this.numCadastro = 0;
        }
        arquivoCadastro = [];
    },
    CapArmDados : function(){
        nome = document.querySelector("#cNome").value;
        cpf = document.querySelector("#cCpf").value;
        rg = document.querySelector("#cRg").value;
        tel = document.querySelector("#cTel").value;

        // nome = "eu";
        // cpf = "01";
        // rg = "02";
        // tel = "03";

        arquivoCadastro[this.numCadastro] = {Nome:nome, Cpf:cpf, Rg:rg, Tel:tel};

        for (item in arquivoCadastro[this.numCadastro]){
            console.log(item+" => " + arquivoCadastro[this.numCadastro][item]);
        }
        this.numCadastro += 1;console.log(this.numCadastro);
        // console.log(arquivoCadastro.Nome);
        // console.log(arquivoCadastro.Cpf);
        // console.log(arquivoCadastro.Rg);
        // console.log(arquivoCadastro.Tel);
    }
};




/*
let a = ["Carlos Drumond de Andrade",
"Francisco José Sobrinho",
"Lin Yun Tan",
"Alberto Luiz de Oliveira",
"Lúcio da Gama",
"Adalberto José de Oliveira",
"Eduardo São Thomé",
"Carlos Villa Nova",
"Maria de Castro Xavier",
"Amarilldo da Silva",
"Diogo Costa e Silva",
"Professor Paulo Celso M. de Paula",
"José Calvalcante Neto",
"Julien E`Lion"];
console.log(a);
a.sort();
console.log(a);
for( n = 0; n < a.length; n++){
    document.writeln(a[n]+"</br>");
}
*/


let xsection = document.querySelector("section");
menu.Menu();