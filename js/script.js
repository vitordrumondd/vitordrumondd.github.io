//selecionar de onde vai ser criptografado  
const entrada = document.getElementById('entrada');
// let conteudo = entrada.value

//selecionar botao para criptofagar
var botaoCriptogafar = document.getElementById('botao-criptogafar');

//ação botao criptogafar
var cliqueCriptogafar = botaoCriptogafar.addEventListener('click', encriptar);

//criar funcao para botao descriptogafar
var saida = document.getElementById('saida');

var botaoDescriptogafar = document.getElementById('botao-descriptogafar');

var cliqueDescriptogafar = botaoDescriptogafar.addEventListener('click', descriptogafar);

//funcao que criptogafa
function encriptar(){
  var texto = entrada.value.replace(/e/igm, 'enter');
  var texto = texto.replace(/a/igm, 'ai');
  var texto = texto.replace(/o/igm, 'ober');
  var texto = texto.replace(/u/igm, 'ufat');
  saida.innerHTML = `${texto}`;
}

//funcao que descriptogafa
function descriptogafar(){
  var texto = entrada.value.replace(/enter/igm, 'e');
  var texto = texto.replace(/ai/igm, 'a');
  var texto = texto.replace(/ober/igm, 'o');
  var texto = texto.replace(/ufat/igm, 'u');
  saida.innerHTML = `${texto}`;
}


//checar permissao
navigator.permissions.query({name: "clipboard-write"}).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
    
  }
});

// //funcao para copiar
document.getElementById('copiar').addEventListener('click', function(){
  let copytext = document.getElementById('saida').value;
  navigator.clipboard.writeText(copytext).then(() => {
    console.log(copytext);
  })
});