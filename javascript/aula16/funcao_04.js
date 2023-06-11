// let num = 5, res = 0;

// console.log(`${num} + `);

// for (let con = num - 1; con > 0; con --)
// {
//     console.log(`${con} + `);
//     num *= con;
// }
// console.log(`TOTAL =  ${num}`);



Fatorial(5);
function Fatorial(n)
{
    res = 1;
    for (c = n; c > 0; -- c )
    {
        res *= c;
        console.log(`${c} x`);
    }
    return res;
}
console.log(res);


// RECURSIVIDADE
function Fator(n)
{
    if ( n == 1)
    {
        return 1;
    }else{
        let res = n * Fator( n - 1);
        // return res;
        return n * Fator(n - 1);
    }
}
console.log(Fator(5));