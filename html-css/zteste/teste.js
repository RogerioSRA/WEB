a = 1, b = 1, c = ++a, d = b++;
a = 2, b = 1 + (a *= 2);

a = "" + 1 + 0 ;
b = "" - 1 + 0 ;
c = true + false;
d = 6 / "3" ;
e = "2" * "3";
f = 4 + 5 + "px";
g = "$" + 4 + 5;
h = "4" - 2;
i = "4px" - 2;
j = "  -9  " + 5;
k = "  -9  " - 5;
l = null + 1;
m = undefined + 1;
n = " \t \n" - 2;


a = 1, b = 2;
c = (+a + +b);



document.getElementById("um").innerHTML = a;
document.getElementById("dois").innerHTML = b;
document.getElementById("tres").innerHTML = c;
document.getElementById("quatro").innerHTML = d;
document.getElementById("cinco").innerHTML = e;
document.getElementById("seis").innerHTML = f;
document.getElementById("sete").innerHTML = g;
document.getElementById("oito").innerHTML = h;
document.getElementById("nove").innerHTML = i;
document.getElementById("dez").innerHTML = j;
document.getElementById("onze").innerHTML = k;
document.getElementById("doze").innerHTML = l;
document.getElementById("treze").innerHTML = m;
document.getElementById("quatorze").innerHTML = n;