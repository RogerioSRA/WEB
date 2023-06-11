let num = [5, 8, 2];

num[3] = 6;
num.push(1);
num.push(7);
num.sort();

console.log(`Números do vetor: ${num}.\nE tem ${num.length} números.`);

let a = 4;
let pos = num.indexOf(a);
console.log(`Posição valor ${a} é ${pos}`);
