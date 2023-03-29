export default function initBarrinhas() {
  const tecValor = [
    { nome: "git e github", valor: 80 },
    { nome: "html e css:", valor: 90 },
    { nome: "javascript", valor: 75 },
    { nome: "typescript", valor: 50 },
    { nome: "bootstrap", valor: 40 },
    { nome: "react", valor: 60 },
    { nome: "next", valor: 70 },
    { nome: "Banco de Dados", valor: 50 },
    { nome: "python", valor: 45 },
    { nome: "C#", valor: 65 },
    { nome: "node Js", valor: 20 },
    { nome: "Java", valor: 35 },
  ];

  const barrinhas = document.querySelectorAll(".js [data-js-grid-habilidade]");
  let span1, span2, div;

  if (barrinhas.length) {
    barrinhas.forEach((barrinha, index) => {
      span1 = barrinha.querySelector("span:nth-child(1)");
      span2 = barrinha.querySelector("span:nth-child(2)");
      span1.innerText = tecValor[index].nome.toUpperCase();
      span2.innerText = tecValor[index].valor + "%";
      div = barrinha.querySelector(".barrinha div");
      div.style.width = tecValor[index].valor + "%";
    });
  }
}






