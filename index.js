// const criada para buscar #respota no arquivo HTML
const elementoResposta = document.querySelector("#resposta")
// const criada para buscar #inputPergunta no arquivo HTML
const inputPergunta = document.querySelector("#inputPergunta")
//const criada para buscar #buttonPerguntar no arquivo HTML
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde...",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso",
  "Melhor não te dizer agora",
  "Ao meu ver, sim.",
  "Minhas fontes dizem que não.",
  "Provavelmente...",
  "Não é possível prever isso agora",
  "Perspectiva boa!",
  "As perspectivas não são muito boas...",
  "Sim!",
  "Concentre-se e pergunte novamente...",
  "Sinais apontam que sim!",
]

// clicar em fazer pergunta
function fazerPergunta() {
  //comparação criada para verificar se algo foi digitado no #inputPergunta, se não tiver, sai da funcão e emite o alerta.
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta...")
    return
  }
  // desabilita o botão "fazer pergunta"
  buttonPerguntar.setAttribute("disabled", true)
  // const criada para concatenar .innerHTML
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  // tamanho do array totalRespostas
  const totalRespostas = respostas.length
  //
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
  //sumir a resposta depois de 3 segundos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  // passa para false o atributo disabled do botão "fazer pergunta"
  buttonPerguntar.removeAttribute("disabled")
}, 3000)
}

