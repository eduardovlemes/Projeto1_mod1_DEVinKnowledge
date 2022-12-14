const initialValues = [
  {
    title: "Grid vs Flexbox",
    language: "CSS3",
    category: "FrontEnd",
    description:
      "A diferença crucial entre flexbox e grid, além do fato do primeiro ser unidirecional e o outro bidirecional, é que o controle do layout no grid vem do container e no flexbox vem dos elementos.",
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
    title: "5 Hábitos Que Todo DEV Deveria Ter",
    language: "Profissional",
    category: "SoftSkill",
    description:
      "1) Se ofereça para ajudar em coisas que não saiba, assim poderás entender o problema e como resolvê-lo; 2) Informe sempre. Não espere acabar o prazo para dizer que estava travado; 3) Escreva. Colocar as coisas no papel ajuda a organizar as idéias e criar uma linha de raciocínio para a resolução do problema; 4) Reserve um intervalo para tarefas que irão te ajudar no trabalho (ler, exercícios, etc); 5) Quando você travar, faça uma pausa. Ficar parado no mesmo ponto não vai te ajudar a resolver o problema.",
    video: "https://www.youtube.com/watch?v=PGxTuv6k0KI",
  },
];

function loadTipsInitial() {
  localStorage.setItem("Tips", JSON.stringify(initialValues));
}

function loadTips() {
  localStorage.setItem("Tips", JSON.stringify(tips));
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
  window.alert("Dica salva com sucesso!");
  loadTips();
  showTips();
  stats();

  document.getElementById("input-title").value = "";
  document.getElementById("input-language").value = "";
  document.getElementById("select-category").value = "";
  document.getElementById("input-description").value = "";
  document.getElementById("input-video").value = "";
}

function showTips() {
  const tips = JSON.parse(localStorage.getItem("Tips"));
  const showTips = document.getElementById("show-tips");
  showTips.innerHTML = "";

  tips.forEach((tip, index) => {
    const newTip = `
        <div class="new-tip">
            <div id="content-tip">
              <h3 class="tip-title">${tip.title}</h3>
              <p><strong>Linguagem|Skill:</strong> ${tip.language}</p>
              <p><strong>Categoria:</strong> ${tip.category}</p>
              <p><strong>Descrição:</strong> ${tip.description}</p>
            </div>
            <div id="button-new-tips">
              <button type="button" id="button-new-tip-edit" onclick="editTip(${index})"><i class="fa-solid fa-pencil"></i></button>
              <a href="${tip.video}" target="_blank" id="button-new-tip-video"><i class="fa-solid fa-video"></i></a>
              <button type="button" id="button-new-tip-delete" onclick="buttonDeleteTip(${index})"><i class="fa-solid fa-trash-can"></i></button>
            </div>        
        </div>        
        `;

    showTips.innerHTML += newTip;
  });
}

function cleanForm(event) {
  event.preventDefault();
  const form = document.getElementById("container-form");
  form.reset();
}

function buttonDeleteTip(index) {
  const tips = JSON.parse(localStorage.getItem("Tips"));
  tips.forEach((tip, indexItem) => {
    if (indexItem == index) {
      window.confirm("Deseja realmente deletar a dica?");
      tips.splice(index, 1);
    }
  });
  localStorage.setItem("Tips", JSON.stringify(tips));
  showTips();
  stats();
}

function editTip(index) {
  const tips = JSON.parse(localStorage.getItem("Tips"));
  tips.forEach((tip, indexItem) => {
    if (indexItem == index) {
      document.getElementById("input-title").value = `${tip.title}`;
      document.getElementById("input-language").value = `${tip.language}`;
      document.getElementById("select-category").value = `${tip.category}`;
      document.getElementById("input-description").value = `${tip.description}`;
      document.getElementById("input-video").value = `${tip.video}`;
    }
  });
  const buttonForm = document.getElementById("button-form");
  buttonForm.innerHTML = "";
  buttonForm.innerHTML = `
  <button type="button" id="button-tip-change" onclick="buttonChangeValue(${index})">Editar Dica</button>`;
}

function buttonChangeValue(index) {
  const tips = JSON.parse(localStorage.getItem("Tips"));
  tips.forEach((tip, indexItem) => {
    if (indexItem == index) {
      var confirm = window.confirm("Confirmar alteração?");
    }
    const title = document.getElementById("input-title").value;
    const language = document.getElementById("input-language").value;
    const category = document.getElementById("select-category").value;
    const description = document.getElementById("input-description").value;
    const video = document.getElementById("input-video").value;

    /* Atualiza os dados inseridos */
    if (indexItem == index && confirm == true) {
      tip.title = title;
      tip.language = language;
      tip.category = category;
      tip.description = description;
      tip.video = video;

      localStorage.setItem("Tips", JSON.stringify(tips));
      showTips();
      stats();
    } else if (indexItem == index && confirm == false) {
      window.alert("Alterações canceladas.");
    }
    /* Limpa os inputs */
    document.getElementById("input-title").value = "";
    document.getElementById("input-language").value = "";
    document.getElementById("select-category").value = "";
    document.getElementById("input-description").value = "";
    document.getElementById("input-video").value = "";

    /* Reestabelece botões */
    const buttonForm = document.getElementById("button-form");
    buttonForm.innerHTML = "";
    buttonForm.innerHTML = `
    <button id="button-clean" onclick="cleanForm(event)">Limpar</button>
    <button type="submit" id="button-save" onclick="saveTips(event); showTips(); stats ()">Salvar</button>`;
  });
}

function stats() {
  const statsTotal = document.getElementById("number-stats-total");
  const statsFrontend = document.getElementById("number-stats-frontend");
  const statsBackend = document.getElementById("number-stats-backend");
  const statsFullstack = document.getElementById("number-stats-fullstack");
  const statsSoftskill = document.getElementById("number-stats-softskill");

  let finalStatsTotal = 0;
  let finalStatsFrontend = 0;
  let finalStatsBackend = 0;
  let finalStatsFullstack = 0;
  let finalStatsSoftskil = 0;

  const tips = JSON.parse(localStorage.getItem("Tips"));
  tips.map((tip) => {
    if (tip.category === "FrontEnd") {
      finalStatsTotal++;
      finalStatsFrontend++;
    } else if (tip.category === "BackEnd") {
      finalStatsTotal++;
      finalStatsBackend++;
    } else if (tip.category === "FullStack") {
      finalStatsTotal++;
      finalStatsFullstack++;
    } else if (tip.category === "SoftSkill") {
      finalStatsTotal++;
      finalStatsSoftskil++;
    }
  });
  statsTotal.textContent = finalStatsTotal;
  statsFrontend.textContent = finalStatsFrontend;
  statsBackend.textContent = finalStatsBackend;
  statsFullstack.textContent = finalStatsFullstack;
  statsSoftskill.textContent = finalStatsSoftskil;
}

function searchTip() {
  const searchSpace = document.getElementById("input-search");
  const searchAdjustment = searchSpace.value.toLowerCase();
  const tips = JSON.parse(localStorage.getItem("Tips"));
  const showTips = document.getElementById("show-tips");
  showTips.innerHTML = "";

  tips.forEach((tip, index) => {
    if (tips[index].title.toLowerCase().includes(searchAdjustment)) {
      showTips.innerHTML = `
      <div class="new-tip">
          <div id="content-tip">
            <h3 class="tip-title">${tip.title}</h3>
            <p><strong>Linguagem|Skill:</strong> ${tip.language}</p>
            <p><strong>Categoria:</strong> ${tip.category}</p>
            <p><strong>Descrição:</strong> ${tip.description}</p>
          </div>
          <div id="button-new-tips">
            <button type="button" id="button-new-tip-edit" onclick="editTip(${index})"><i class="fa-solid fa-pencil"></i></button>
            <button type="button" id="button-new-tip-delete" onclick="buttonDeleteTip(${index})"><i class="fa-solid fa-trash-can"></i></button>
            <a href="${tip.video}" target="_blank" id="button-new-tip-video"><i class="fa-solid fa-video"></i></a>
          </div>        
      </div>        
      `;
    }
  });
}

function cleanSearch() {
  document.getElementById("input-search").value = "";
}
