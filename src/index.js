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
    title: "A Arte de Comunicar",
    language: "Comunicação",
    category: "SoftSkill",
    description:
      'Um bom comunicador é sempre um bom ouvinte. Quem sabe ouvir não perde informações, faz perguntas apropriadas e entende o interlocutor. Você pode criar empatia com frases como "Fale mais sobre esse assunto" ou "Estou interessado no que você diz" Fale mais detalhes para entender por que você pensa assim.',
    video: "https://www.youtube.com/watch?v=H5L-CfmklKc",
  },
  {
    title: "5 Habitos Que Todo DEV Deveria Ter",
    language: "Profissional",
    category: "SoftSkill",
    description:
      "1- Se ofereça para ajudar em coisas que você não sabe. Certamente não saberá resolver de cara, mas vai buscar entender qual é o problema e como podemos resolvê-lo. 2-Fale o que você está fazendo. Não espere acabar o prazo para informar ao chefe que estava tavado em um ponto. 3-Escreva um Blog. Colocar as coisa no papel, ou em um documento, ajuda na organização das ideias e também a criar uma linha de raciocínio rápida para a resolução de um problema. 4- Reserve um intervalo para tarefas importantes. Não se trata de trabalho em si, mas coisas que irão te ajudar no trabalho, como ler um livro, se exercitar e oxigenar melhor o cérebro e etc. 5 - Quando você travar, faça uma pausa. Ficar parado no mesmo ponto do código não vai te ajudar a resolver o problema. As vezes é importante dar uma olhada em outra coisa para assim ter um insight para o problema original.",
    video: "https://www.youtube.com/watch?v=PGxTuv6k0KI",
  },
];

function loadTipsInitial() {
  localStorage.setItem("Tips", JSON.stringify(initialValues));
}

function loadTips(){
  localStorage.setItem("Tips", JSON.stringify(tips))
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

  loadTips()
}

function showTips() {
  const tips = JSON.parse(localStorage.getItem("Tips"));

  const showTips = document.getElementById("show-tips");
  showTips.innerHTML = "";

  tips.forEach((tip, index) => {
    const newTip = `
        <div class="new-tip">
            <div id="content-tip">
            <h3>Título: ${tip.title}</h3>
                <p><strong>Linguagem|Skill:</strong> ${tip.language}</p>
                <p><strong>Categoria:</strong> ${tip.category}</p>
                <p><strong>Descrição:</strong> ${tip.description}</p>
            </div>
            <div id="button-new-tips">
                <button id="button-new-tip-edit">Edit</button>
                <button id="button-new-tip-delete">Delete</button>
                <a href="${tip.video}" target="_blank" id="button-new-tip-video">Video</a>
            </div>        
        </div>        
        `;

    showTips.innerHTML += newTip;
  });
}

function cleanForm(event) {
  event.preventDefault()
  const form = document.getElementById("container-form") 
  form.reset()
}

function buttonDeleteTip (){
    const tips = JSON.parse(localStorage.getItem("Tips"))

    tips.forEach((tip, indexItem) => {
        if (indexItem == index) {
            tip.splice (index, 1)
        }
    })
    loadTips()
    showTips()
}


function stats () {
  const statsTotal = document.getElementById("number-stats-total")
  const statsFrontend = document.getElementById("number-stats-frontend")
  const statsBackend = document.getElementById("number-stats-backend")
  const statsFullstack = document.getElementById("number-stats-fullstack")
  const statsSoftskill = document.getElementById("number-stats-softskill")

  let finalStatsTotal = 0
  let finalStatsFrontend = 0
  let finalStatsBackend = 0
  let finalStatsFullstack = 0
  let finalStatsSoftskil = 0

  const tips = JSON.parse(localStorage.getItem("Tips"))
  tips.map((tip) => {
    if (tip.category === "FrontEnd") {
      finalStatsTotal ++
      finalStatsFrontend ++      
    } else if (tip.category === "BackEnd") {
      finalStatsTotal ++
      finalStatsBackend ++
    } else if (tip.category === "FullStack") {
      finalStatsTotal ++
      finalStatsFullstack ++
    } else if (tip.category === "SoftSkill") {
      finalStatsTotal ++
      finalStatsSoftskil ++
    }
  })
  statsTotal.textContent = finalStatsTotal
  statsFrontend.textContent = finalStatsFrontend
  statsBackend.textContent = finalStatsBackend
  statsFullstack.textContent = finalStatsFullstack
  statsSoftskill.textContent = finalStatsSoftskil
}

function searchTip () {
  const searchSpace = document.getElementById("input-search")
  const searchAdjustment = searchSpace.value.toLowerCase()
  const tips = JSON.parse(localStorage.getItem("Tips"))
  const showTips = document.getElementById("show-tips");
  showTips.innerHTML = "";  

  tips.forEach((tip, index) => {
    if (tips[index].title.toLowerCase().includes(searchAdjustment)) {
      showTips.innerHTML = `
      <div class="new-tip">
          <div id="content-tip">
          <h3>Título: ${tip.title}</h3>
              <p><strong>Linguagem|Skill:</strong> ${tip.language}</p>
              <p><strong>Categoria:</strong> ${tip.category}</p>
              <p><strong>Descrição:</strong> ${tip.description}</p>
          </div>
          <div id="button-new-tips">
              <button id="button-new-tip-edit">Edit</button>
              <button id="button-new-tip-delete">Delete</button>
              <a href="${tip.video}" target="_blank" id="button-new-tip-video">Video</a>
          </div>        
      </div>        
      `
    }
  })
}



