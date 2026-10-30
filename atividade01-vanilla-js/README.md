# Atividade 01 — Projeto Vanilla JS e Contextualização da Disciplina (Aula 01)

**Disciplina:** Frameworks Front-end  
**Professor:** Prof. Me. Deivison S. Takatu  
**Tecnologias:** HTML5, CSS3, JavaScript (Vanilla JS), Git, GitHub e Vercel

---

## 1. Objetivo da Atividade

1. **Prática 01 (Slide 12 — Aula 01):** Criar um projeto utilizando **Vanilla JS** (HTML5, CSS3 e JavaScript puro), conectar a IDE (VS Code) com o GitHub e realizar o deploy na Vercel.
2. **Prática 02 (Slides 21–22 — Aula 01):** Estruturar o repositório principal da disciplina no GitHub e documentar em Markdown (`.md`) o resumo completo da **Aula 01 — Apresentação da Disciplina e Contextualização**, acompanhado da fundamentação técnica sobre o framework Front-end escolhido (**React**).

---

## 2. Estrutura do Projeto Vanilla JS

```text
atividade01-vanilla-js/
├── index.html   # Estrutura semântica principal da página
├── style.css    # Estilização da interface, container centralizado e botão interativo
├── script.js    # Lógica em JavaScript puro (função mensagem() acionada no clique)
└── README.md    # Documentação da atividade e resumo completo da Aula 01
```

### Como Executar Localmente
1. Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no VS Code.
2. Clique no botão **"Clique aqui"** para acionar a função `mensagem()` definida em `script.js`.

---

## 3. Resumo da Aula 01 — Apresentação da Disciplina e Contextualização

### 3.1. Objetivos da Aula
A primeira aula teve como objetivo apresentar a disciplina, sua metodologia, critérios de avaliação, conteúdos que serão estudados ao longo do semestre e contextualizar a importância dos Frameworks Front-end no desenvolvimento de aplicações web modernas.

### 3.2. Contexto da Disciplina
Atualmente, grande parte das aplicações web utiliza frameworks Front-end para criar interfaces modernas, organizadas e de fácil manutenção.

O desenvolvimento Front-end é responsável pela camada visual da aplicação, permitindo que o usuário interaja com o sistema de forma intuitiva. Além da interface, também engloba a experiência do usuário (UX), organização dos componentes e comunicação com o back-end.

### 3.3. Conteúdos Programáticos do Semestre
- Ambiente de desenvolvimento (VS Code, Node.js, NPM)
- Git e GitHub (versionamento de código)
- Deploy de aplicações (Vercel e Render)
- JavaScript puro (Vanilla JS) e manipulação do DOM
- Frameworks Front-end (**React**, **Vue.js**, **Angular**, **Next.js**)
- Frameworks CSS (**Tailwind CSS**, Box Model e Flexbox)
- Componentização, Props, Gerenciamento de Estado (`useState`), Efeitos (`useEffect`) e Rotas (`React Router`)
- Integração e criação de APIs REST (`fetch`, Express.js, JSON, CRUD e Postman)
- Gestão ágil de projetos Front-end (Scrum, Kanban, Backlog e *Definition of Done*)

### 3.4. Introdução ao JavaScript (Vanilla JS)
Antes de iniciar os frameworks, utiliza-se a base da tríade do desenvolvimento Front-end:
- **HTML:** estruturação semântica do conteúdo;
- **CSS:** estilização, layout e responsividade;
- **JavaScript puro (Vanilla JS):** linguagem responsável pela lógica das páginas web, manipulação do DOM, tratamento de eventos, comunicação com servidores e criação de interatividade sem dependência de bibliotecas externas.

### 3.5. Critérios de Avaliação da Disciplina

| Critério | Peso |
| :--- | ---: |
| Desenvolvimento do Projeto | **20%** |
| Apresentação do Projeto | **20%** |
| Atividades | **15%** |
| Projeto Integrador | **35%** |
| Autoavaliação | **10%** |

---

## 4. Estudo Técnico do Framework Escolhido: React

Conforme solicitado na **Atividade 02 da Aula 01 (Slide 22)**, apresentamos a síntese técnica sobre o **React**:

### 4.1. Características Principais
- **Arquitetura Baseada em Componentes:** Permite dividir a interface em peças independentes, encapsuladas e reutilizáveis (funções JavaScript que retornam marcação visual).
- **JSX (JavaScript XML):** Extensão de sintaxe que combina a clareza visual do HTML com o poder de processamento do JavaScript.
- **Virtual DOM e Reconciliação:** Mantém uma representação leve da árvore de elementos em memória, calculando apenas as diferenças (*diffing*) antes de atualizar o DOM real do navegador.
- **Fluxo de Dados Unidirecional (*One-Way Data Binding*):** Os dados fluem de forma previsível dos componentes pais para os componentes filhos via **Props**, enquanto o estado interno é gerenciado por **Hooks** (`useState`, `useEffect`).

### 4.2. Vantagens Competitivas
- Alto desempenho em atualizações frequentes de interface.
- Reutilização de código e padronização visual em equipes grandes.
- Ecossistema maduro (Vite, Next.js, React Router, Tailwind CSS, Testing Library) e ampla comunidade global mantida pela Meta.

### 4.3. Aplicações no Mercado
Utilizado em larga escala por empresas como **Meta (Facebook, Instagram, WhatsApp Web)**, **Netflix**, **Airbnb**, **Uber**, **Spotify**, **Nubank** e **Mercado Livre** para construir *Single Page Applications* (SPAs), dashboards corporativos, e-commerces e plataformas SaaS de alta interatividade.
