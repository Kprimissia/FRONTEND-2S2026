# Atividade 05 — Criando APIs para o Front-end (CRUD de Notas + Postman)

**Disciplina:** Frameworks Front-end  
**Professor:** Prof. Me. Deivison S. Takatu  
**Aula Referência:** Aula 05 — Criando APIs para o Front-end  

---

## 1. Estrutura da Entrega

```text
atividade-05/
├── backend-notas/                         # API REST CRUD em Node.js + Express + Persistência JSON
│   ├── data.json                          # Base de dados inicial em formato JSON
│   ├── package.json                       # Dependências: express, cors, body-parser
│   └── server.js                          # Rotas GET, GET/:id, POST, PUT/:id e DELETE/:id
├── frontend-notas/                        # Aplicação React + Vite consumindo o CRUD completo
│   ├── src/
│   │   ├── App.jsx                        # Interface de listagem, criação, edição e exclusão
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── postman/
│   └── notas-crud.postman_collection.json # Collection Postman v2.1 com as 5 rotas documentadas
└── README.md                              # Documentação completa, Resumo e Questões para Refletir
```

---

## 2. Endpoints da API CRUD (`backend-notas/server.js`)

| Operação CRUD | Método HTTP | Endpoint | Código de Sucesso | Código de Erro | Descrição |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Read (Listar)** | `GET` | `/api/notes` | `200 OK` | — | Lê `data.json` e retorna todas as notas cadastradas |
| **Read (Por ID)** | `GET` | `/api/notes/:id` | `200 OK` | `404 Not Found` | Retorna uma única nota filtrada pelo seu `id` |
| **Create (Criar)** | `POST` | `/api/notes` | `201 Created` | `400 Bad Request` | Cria nota com `id: Date.now().toString()` e `criadoEm` |
| **Update (Editar)** | `PUT` | `/api/notes/:id` | `200 OK` | `404 Not Found` | Atualiza `titulo` e `texto` da nota correspondente |
| **Delete (Excluir)** | `DELETE` | `/api/notes/:id` | `204 No Content` | `404 Not Found` | Remove a nota do arquivo `data.json` |

---

## 3. Como Executar o Projeto Completo

### 3.1. Iniciar a API REST (`backend-notas`)
```bash
cd atividade-05/backend-notas
npm install
npm start
```
O servidor iniciará em `http://localhost:3000`.

### 3.2. Iniciar o Front-end React (`frontend-notas`)
```bash
cd atividade-05/frontend-notas
npm install
npm run dev
```

### 3.3. Testar com o Postman
1. Abra o **Postman**;
2. Clique em **Import** e selecione o arquivo [`postman/notas-crud.postman_collection.json`](./postman/notas-crud.postman_collection.json);
3. Execute as 5 requisições pré-configuradas (`GET`, `GET /:id`, `POST`, `PUT /:id` e `DELETE /:id`).

---

## 4. Respostas às Questões para Refletir (Slide 33 da Aula 05)

### 1. Quais são os riscos de segurança presentes neste código e como poderiam ser mitigados?
- **CORS totalmente aberto (`app.use(cors())`):** Permite que qualquer domínio externo faça requisições à API. *Mitigação:* Restringir a origem permitida (`cors({ origin: 'https://meu-frontend.vercel.app' })`).
- **Ausência de validação e sanitização de entrada:** O servidor aceita qualquer conteúdo em `req.body.titulo` e `req.body.texto`, abrindo margem para payloads gigantescos ou injeção de scripts (XSS armazenado). *Mitigação:* Validar tipos, tamanho máximo de strings e usar bibliotecas como `zod`, `joi` ou `express-validator`, além de limitar o tamanho do body (`bodyParser.json({ limit: '10kb' })`).
- **Ausência de autenticação e Rate Limiting:** Qualquer usuário pode apagar todas as notas ou derrubar o servidor por força bruta (DoS). *Mitigação:* Implementar autenticação via JWT (`Authorization: Bearer`) e middleware `express-rate-limit`.

### 2. Quais são as vantagens e desvantagens de usar um arquivo JSON (`data.json`) como banco de dados em produção?
- **Vantagens:** Zero configuração de infraestrutura externa, excelente para prototipagem rápida, estudos didáticos de CRUD e fácil inspeção visual dos dados.
- **Desvantagens críticas em produção:**
  - **Condições de corrida (Race Conditions):** Duas requisições simultâneas lendo e sobrescrevendo `data.json` podem corromper o arquivo ou sobrescrever dados uma da outra;
  - **Operações síncronas bloqueantes (`fs.readFileSync` / `fs.writeFileSync`):** Bloqueiam a *Event Loop* do Node.js a cada leitura/escrita;
  - **Armazenamento efêmero em PaaS (como Render/Heroku):** Em plataformas de nuvem gratuitas, o sistema de arquivos do container é reiniciado a cada novo deploy ou hibernação, causando perda dos dados salvos após o deploy.

### 3. Quais limitações essa aplicação teria se precisasse lidar com 10.000 registros?
- A cada requisição (`GET`, `POST`, `PUT` ou `DELETE`), a aplicação carrega **todo o arquivo JSON para a memória RAM**, faz `JSON.parse()` de 10.000 objetos, percorre o array linearmente (`O(n)` com `.find()` ou `.filter()`) e reescreve o arquivo inteiro no disco com `JSON.stringify()`.
- Isso geraria alto consumo de CPU e memória, lentidão progressiva no tempo de resposta (latência alta) e travamento de requisições concorrentes. Um SGBD real (PostgreSQL, MySQL, MongoDB) utiliza índices (`B-Tree`) para buscas em `O(log n)` e grava apenas a linha alterada em disco.

### 4. Por que manter todo o código em `server.js` pode se tornar um problema e como organizar melhor?
- Manter configuração do servidor, middlewares, leitura de dados, validações e rotas em um único arquivo viola o **Princípio da Responsabilidade Única (SRP)**, dificultando testes unitários, manutenção em equipe e evolução do sistema.
- **Organização recomendada (Arquitetura em Camadas / MVC):**
  - `src/routes/notes.routes.js` — Definição dos endpoints HTTP;
  - `src/controllers/notes.controller.js` — Tratamento de `req` e `res` e códigos de status HTTP;
  - `src/services/notes.service.js` — Regras de negócio e validações;
  - `src/repositories/notes.repository.js` — Acesso à camada de persistência (JSON ou Banco de Dados).

---

## 5. Resumo Completo — Aula 05: Criando APIs para o Front-end

### 5.1. Objetivos e Contexto
A quinta aula apresentou os fundamentos práticos da criação de um servidor back-end RESTful utilizando **Node.js** e **Express.js** integrado ao Front-end, abordando persistência de dados, middlewares essenciais (`cors` e `body-parser`), deploy em nuvem (**Render** e **Vercel**) e documentação de APIs com **Postman**.

### 5.2. Métodos HTTP e Idempotência
- **`GET`:** Recupera dados do servidor. Seguro (não altera estado) e idempotente.
- **`POST`:** Cria novos recursos. Não é idempotente (chamadas repetidas criam múltiplos registros).
- **`PUT` / `PATCH`:** Atualização de recursos (`PUT` substitui integralmente e é idempotente; `PATCH` atualiza parcialmente).
- **`DELETE`:** Remove recursos específicos do servidor (idempotente).

### 5.3. Documentação e Testes com Postman
O **Postman** permite organizar requisições em **Collections**, configurar variáveis de ambiente (`{{baseUrl}}`), testar payloads JSON nos métodos `POST` e `PUT` e validar os códigos de resposta HTTP (`200`, `201`, `204`, `400`, `404`).

