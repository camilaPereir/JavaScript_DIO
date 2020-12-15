
/*var nome = "Camila Pereira";
var idade = 20;
//alert(nome + " tem " + idade + " anos");

console.log(nome);
console.log(nome.toLocaleUpperCase());

var lista = ["maçã", "pera", "laranja"];

lista.push("uva");
console.log(lista);

lista.pop();
console.log(lista);

console.log(lista.join(" - "));



//DICIONÁRIO

var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);


var idade = prompt("Qual a sua idade?");
if (idade > 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}


var count = 0;
while(count < 5){
    console.log(count);
    count++;
}


var count;
for(count = 0; count <=5; count++){
    console.log(count);
}


var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());


function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;    
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

alert(soma(5,10));

*/

function clicou() {
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://www.google.com/");
    //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página Carregada");
}

function change(elemento) {
    console.log(elemento.value);
}