var nombre = "Daan Valencia";
var edad = 20;

console.log("Hello world");
//var alerta = alert("Alerta: que no se te olviden los \' simples \' \n pero tambien puedes usar \"Dobles\"");

document.write("Una forma de imprimir");

var imprimir = document.getElementById("print");

imprimir.innerHTML = `What's up!`;

imprimir.innerHTML = `
    <h2>Hola soy ${nombre} </h2>
    <h2>Y tengo ${edad} </h2>
`;

/* function no necesita retornar pero lo hace y 
retorna lo que sea que uno quiera sin ser declarado, 
el innerHTML*/