# Atividade 04 — Consumindo APIs no Front-end

**Disciplina:** Frameworks Front-end  
**Professor:** Prof. Me. Deivison S. Takatu  
**Aula Referência:** Aula 04 — Consumindo APIs no Front-end  

---

## 1. Visão Geral da Atividade

Esta pasta consolida as duas entregas práticas da **Aula 04 — Consumindo APIs no Front-end**, demonstrando desde o levantamento arquitetural de projetos reais que consomem APIs até a implementação e publicação em nuvem de uma arquitetura Cliente-Servidor desacoplada (Back-end em **Express.js** no **Render** + Front-end em **React + Vite** na **Vercel**).

### Estrutura do Diretório

```text
atividade-04/
├── pesquisa-api/          # Parte 1: Levantamento de 10 projetos no GitHub que consomem APIs
│   └── README.md
├── backend-express/       # Parte 2A: API REST em Node.js + Express (Deploy no Render)
│   ├── api.js
│   └── package.json
├── frontend-api/          # Parte 2B: Aplicação React + Vite consumindo a API (Deploy na Vercel)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md              # Documentação consolidada e Resumo da Aula 04
```

---

## 2. Links de Deploy e Repositórios Relacionados

| Componente | Tecnologia | Hospedagem / Deploy | URL Pública / Repositório |
| :--- | :--- | :--- | :--- |
| **Back-end (API Express)** | Node.js + Express + CORS | **Render** | [https://backend-deivison.onrender.com/](https://backend-deivison.onrender.com/) ([Repositório GitHub](https://github.com/Kprimissia/backend-deivison)) |
| **Front-end (React API)** | React 19 + Vite | **Vercel** | [https://frontend-api-omega.vercel.app/](https://frontend-api-omega.vercel.app/) ([Repositório GitHub](https://github.com/Kprimissia/Frontend-Express)) |
| **Pesquisa de 10 Projetos** | Markdown | **GitHub** | [`pesquisa-api/README.md`](./pesquisa-api/README.md) |

---

## 3. Como Executar Localmente

### 3.1. Executando o Back-end (`backend-express`)

```bash
cd atividade-04/backend-express
npm install
node api.js
```

Endpoints disponíveis localmente em `http://localhost:3000`:
- `GET /` — Retorna status da API, mensagem de confirmação, data (`DD/MM/AAAA`), hora (`HH:MM:SS`), dia da semana e timestamp ISO.
- `GET /info` — Retorna metadados do sistema (`Sistema de Consulta de Data e Hora`, versão, autor e status).

### 3.2. Executando o Front-end (`frontend-api`)

```bash
cd atividade-04/frontend-api
npm install
npm run dev
```

A aplicação React realiza requisições HTTP `GET` via `fetch()` para `https://backend-deivison.onrender.com/`, exibindo:
- Indicador visual de status da conexão (`Online` / `Erro`);
- Painel em tempo real com **Data Atual**, **Horário (Brasília)** e **Dia da Semana**;
- Botão para atualizar os dados manualmente e visualização do payload **JSON bruto** retornado pela API.

---

## 4. Resumo Completo — Aula 04: Consumindo APIs no Front-end

### 4.1. API — Application Programming Interface
Uma **API** é um conjunto de protocolos, rotinas e ferramentas que define como diferentes componentes de software devem se comunicar. No desenvolvimento Web, as APIs permitem que o **Front-end** se comunique com servidores, bancos de dados e serviços externos de maneira segura e padronizada.

### 4.2. REST (Representational State Transfer)
**REST** é um estilo arquitetural utilizado no desenvolvimento de sistemas distribuídos na Web.
- Comunicação cliente-servidor **stateless** (cada requisição é independente);
- Utilização semântica dos métodos HTTP;
- Recursos identificados por **URIs**;
- Representação padronizada dos dados (principalmente **JSON**).

### 4.3. Protocolo HTTP e Métodos

| Método | Finalidade |
| :--- | :--- |
| `GET` | Recuperar informações de um recurso |
| `POST` | Criar novos recursos |
| `PUT` | Substituir completamente um recurso existente |
| `PATCH` | Atualizar parcialmente um recurso |
| `DELETE` | Remover um recurso |

### 4.4. Fluxo de Comunicação Front-end ↔ Back-end

```text
Front-end (React)
    ↓  HTTP Request (fetch GET)
Endpoint (/ ou /info)
    ↓
Express.js / Backend (Node.js)
    ↓  Processamento de Data/Hora (America/Sao_Paulo)
JSON Response ({ status, data, hora, diaSemana })
    ↓
Front-end (useState / useEffect)
    ↓
Interface atualizada em tempo real
```

### 4.5. Express.js, CORS e Deploy no Render
- **Express.js:** Framework minimalista e flexível para Node.js voltado à criação de servidores Web, rotas e APIs REST.
- **CORS (`Cross-Origin Resource Sharing`):** Mecanismo de segurança do navegador que controla requisições entre diferentes origens (ex.: Front-end na Vercel `https://frontend-api-omega.vercel.app` requisitando dados do Back-end no Render `https://backend-deivison.onrender.com`).
- **Render:** Plataforma de nuvem PaaS com integração contínua ao GitHub, SSL gratuito e suporte nativo a Web Services em Node.js.
