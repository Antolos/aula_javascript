

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

//function soma(n1, n2) {
//    return n1 + n2;
//}

/*
var validar = 0;
function validaIdade(idade){
   // var validar; local
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/


//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//}

//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"))

//var d = new Date();

//alert(d);
//alert(d.getDay());
//alert(d.getMonth()+1);
//alert(d.getYear());
//alert(d.getHours());
//alert(d.getMinutes());


/*
var count;
for(count = 0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
} else { 
    alert("menor de idade")
}
*/

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça","pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - ")); //transforma em string e troca a virgula pelo - ou o que quiser por
//alert(lista[1]);

/*
// var tem tipagem automática
var nome = "Antônio Carlos";
var n1 = 5;//var idade = 33;
var n2 = 10;//var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(n1+n2);//console.log(idade+idade2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/