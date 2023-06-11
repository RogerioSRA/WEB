let cpf1 = {'nome':'andre', 'sexo':'m', 'idade':40, 'profissao':'carteiro'}
let cpf2 = {'nome':'joao', 'sexo':'m', 'idade':45, 'profissao':'padeiro'}
let cpf3 = {'nome': 'bugalu', 'sexo':'m', 'idade':50, 'profissao':'marceneiro'}

let cadastro = [cpf1, cpf2, cpf3];

for ( let base in cadastro)
{
    console.log(cadastro[base]);
}
cpf1.profissao='motorista';
console.log(cpf1.profissao);
cpf1.idade = 25;
console.log(cpf1.idade);

for ( let base in cadastro)
{
    console.log(cadastro[base]);
}