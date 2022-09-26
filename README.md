# Projeto1_mod1_DEVinKnowledge
A M1P1 Software House Ltda está contratando novos desenvolvedores para o seu quadro de colaboradores, com o intuito de expandir os negócios. Os gestores entendem que com a chegada dos novos funcionários, será necessário realizar um onboarding contínuo para que todos fiquem em sintonia. Para isso, foi solicitado a criação de um sistema de Base do Conhecimento, com objetivo de manter as dicas e padronização da programação em um único lugar de fácil acesso para todos. É hora de ficar feliz, pois você foi escolhido para criar o DEVinKnowledge.

## Requisitos da Aplicação
A aplicação que deverá ser realizada individualmente deve contemplar os seguintes requisitos:
- Um título na aba do navegador, para que o usuário encontre a sua aplicação no meio das várias abas que constantemente mantém abertas;
- Um cabeçalho dentro da página, para que o usuário saiba facilmente em que página se encontra e do que se trata o conteúdo;
- Um formulário para que o usuário cadastre a dica, contendo:
Título:
Preenchimento: Obrigatório
Tipo de campo: Input
Mínimo de caracteres: 8
Máximo de caracteres: 64
Linguagem/Skill:
Preenchimento: Obrigatório
Tipo de campo: Input
Mínimo de caracteres: 4
Máximo de caracteres: 16
Categoria:
Preenchimento: Obrigatório
Tipo de campo: Input Dropdown
Pré-Cadastrado: FrontEnd, BackEnd, FullStack e Comportamental/Soft
Descrição:
Preenchimento: Obrigatório
Tipo de campo: Input Text Area
Mínimo de caracteres: 32
Máximo de caracteres: 512
Vídeo do YouTube:
Preenchimento: Opcional
Tipo de campo: Input
Caracteres: Validar URL
Botões de ação:
Botão Salvar para cadastrar caso as regras sejam atendidas
Botão Limpar para limpar os campos do formulário
- Cards indicativos que mostram ao usuário as estatísticas do sistema. Devem apresentar a quantidade total de dicas cadastradas e a quantidade de dicas para cada categoria.
- Uma barra de busca para que o usuário consiga pesquisar por uma dica através de seu título. Botões para pesquisar e limpar podem ser utilizados.
- Uma lista de dicas contendo todas as informações cadastradas.
Usar cards para agrupar as informações
Adicionar botão para deletar a dica
Adicionar botão para editar a dica
Ideia: Quando clicado pode carregar o formulário de cadastro para edição, facilitando a codificação do sistema.
Adicionar botão para abrir o vídeo com a dica
Ideia: Quando não houver vídeo cadastrado, o botão pode desaparecer do card.
- Utilização do alert para informar as ações realizadas. Por exemplo: Dica Cadastrada, Dica Deletada e etc
- Mensagens de confirmação, via confirm para as ações realizadas. Por exemplo: "Você realmente deseja deletar essa dica?"
Lógica de programação para manipulação dos dados inseridos em um array json com salvamento em localStorage (ou json-server se achar necessário)
- Lógica de programação para manipulação dos dados inseridos em um array json com salvamento em localStorage (ou json-server se achar necessário)

## Plano de Projeto
Ao construir a aplicação proposta, o aluno estará colocando em prática os aprendizados em:
Fundamentos da Programação Web:
- HTML: Principais elementos (versão 4) e Elementos semânticos (versão 5)
- CSS: Seletores, Principais Estilos, Layouts e Layout com Flexbox
- Organização: Kanban Board e Versionamento com GitHub
JavaScript: 
- Variáveis, Tipos de dados, Array, Estrutura de Controle de Fluxo (condicional e repetição) e Operadores (aritméticos, lógicos e relacionais)
- Funções, Manipulação do DOM, Utilização de Seletores, Eventos, JSON, LocalStorage, Interval e Timeout
- Apresentação do ES6+, Escopo (let, var e const), Classes, Atributos, Encapsulamento (closure) e Funções de Arrays (forEach, map, filter, find, reduce e every)
- Arrow Functions e Módulos (export e import)
- Funções Assíncronas (Promises, Async e Await), Operadores Rest e Spread, e XMLHttpRequest e Fetch