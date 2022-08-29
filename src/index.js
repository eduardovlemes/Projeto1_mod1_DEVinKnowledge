// Só para que as dicas não começem vazias.
const initialValues = [
  {
    title: "Grid vs Flex-Box",
    language: "CSS",
    category: "FrontEnd",
    description:
      "A diferença crucial entre flexbox e grid, tirando o fato do primeiro ser unidirecional e o outro bi-direcional, é que o controle do layout no grid vem do container e no flexbox vem dos elementos.",
    video: "https://www.youtube.com/watch?v=x-4z_u8LcGc",
  },
  {
    title: "A arte de comunicar",
    language: "Comunicação",
    category: "SoftSkill",
    description:
      'Um bom comunicador é sempre um bom ouvinte. Quem sabe ouvir não perde informações, faz perguntas apropriadas e entende o interlocutor. Você pode criar empatia com frases como "Fale mais sobre esse assunto" ou "Estou interessado no que você diz" Fale mais detalhes para entender por que você pensa assim.',
    video: "https://www.youtube.com/watch?v=H5L-CfmklKc",
  },
  {
    title: "5 habitos que todo dev deveria ter.",
    language: "Profissional",
    category: "SoftSkill",
    description:
      "1- Se ofereça para ajudar em coisas que você não sabe. Certamente não saberá resolver de cara, mas vai buscar entender qual é o problema e como podemos resolvê-lo. 2-Fale o que você está fazendo. Não espere acabar o prazo para informar ao chefe que estava tavado em um ponto. 3-Escreva um Blog. Colocar as coisa no papel, ou em um documento, ajuda na organização das ideias e também a criar uma linha de raciocínio rápida para a resolução de um problema. 4- Reserve um intervalo para tarefas importantes. Não se trata de trabalho em si, mas coisas que irão te ajudar no trabalho, como ler um livro, se exercitar e oxigenar melhor o cérebro e etc. 5 - Quando você travar, faça uma pausa. Ficar parado no mesmo ponto do código não vai te ajudar a resolver o problema. As vezes é importante dar uma olhada em outra coisa para assim ter um insight para o problema original.",
    video: "https://www.youtube.com/watch?v=PGxTuv6k0KI",
  },
];

function loadTips() {
  localStorage.setItem("Tips", JSON.stringify(initialValues));
}

function saveTips(event) {
  event.preventDefault();

  const titleInput = document.getElementById("input-title").value;
  if (titleInput.length < 8 || titleInput.length > 64) {
    return alert(
      "Título inválido! \n (Obs.: o campo Título deve ter entre 8 e 64 caracteres)."
    );
  }
  const languageInput = document.getElementById("input-language").value;

  if (languageInput.length < 4 || languageInput.length > 16) {
    return alert(
      "Linguagem/Skill inválido! \n (Obs.: o campo Linguagem/Skill deve ter entre 4 e 16 caracteres)."
    );
  }

  const selectIndex = document.getElementById("select-category").selectedIndex;
  const selectedCategory =
    document.getElementsByTagName("option")[selectIndex].value;

  const descriptionInput = document.getElementById("input-description").value;
  if (descriptionInput.length < 32 || descriptionInput.length > 512) {
    alert(
      "Descrição inválido! \n (Obs.: o campo Descrição deve ter entre 32 e 512 caracteres)."
    );
  }

  const videoInput = document.getElementById("input-video").value;
  /* const validatesVideo = new RegExp("^((http(s?)://(www.)?[a-z]+.com/)|(magnet:?xt=urn:btih:))")
    if (validatesVideo.test(videoInput)) {
        alert("Link inválido.")
    } */

  const dataFromInputs = {
    title: titleInput,
    language: languageInput,
    category: selectedCategory,
    description: descriptionInput,
    video: videoInput,
  };

  tips = JSON.parse(localStorage.getItem("Tips"));

  tips.push(dataFromInputs);

  localStorage.setItem("Tips", JSON.stringify(tips));
}

function showTips() {
  tips = JSON.parse(localStorage.getItem("Tips"));
  console.log(tips);

  const showTips = document.getElementById("show-tips");
  showTips.innerHTML = "";

  tips.forEach((tip, index) => {
    const newTip = `<div id="new-tip">
           <h3>${tip.title}</h3>
            <p>${tip.language}</p>
            <p>${tip.category}</p>
            <p>${tip.description}</p>
        </div>
        <div id="button-new-tips">
            <button id="button-new-tip-edit"></button>
            <button id="button-new-tip-delete"></button>
            <button id="button-new-tip-video"></button>
        </div>`;

    showTips.innerHTML += newTip;
  });
}
