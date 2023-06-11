function Parimpar(n)
{
    if (n % 2 == 0)
    {
        return "Par";
    }else{
        return "Ímpar";
    }
}
let res = Parimpar(10);
console.log(res);