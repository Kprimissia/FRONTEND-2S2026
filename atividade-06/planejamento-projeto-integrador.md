# Planejamento Ágil de Gestão de Tarefas — Projeto Integrador Interdisciplinar

**Disciplina:** Frameworks Front-end  
**Professor:** Prof. Me. Deivison S. Takatu  
**Aula Referência:** Aula 06 — Projetos Front-End  
**Projeto Integrador:** **ConsorTech** — Sistema Web para Gestão, Comunicação e Baixa de Clientes Contemplados em Consórcios  

---

## 1. Visão do Produto e Escopo Front-End

O **ConsorTech** é uma plataforma web voltada a administradoras de consórcios para centralizar o acompanhamento de cotas contempladas, automatizar o envio de notificações aos consorciados, controlar a triagem de documentos e registrar a baixa de contemplação com rastreabilidade completa.

### Principais Desafios de Gestão Mapeados (e Mitigações)
| Desafio Comum (Aula 06) | Estratégia de Mitigação no Projeto |
| :--- | :--- |
| **Escopo difuso** | Especificação formal de Requisitos Funcionais/Não Funcionais e *User Stories* com critérios de aceitação verificáveis. |
| **Prazos irrealistas** | Estimativa relativa em *Story Points* (Fibonacci) via *Planning Poker* e divisão em 4 Sprints quinzenais. |
| **Falta de alinhamento** | Contratos de API REST (`JSON`) documentados previamente entre Front-end e Back-end + reuniões de *Daily*. |
| **Débito técnico** | Aplicação rigorosa da *Definition of Done (DoD)*, componentização em React e revisão de código via *Pull Request*. |

---

## 2. Levantamento de Requisitos

### 2.1. Requisitos Funcionais (RF) — Camada Front-End
- **RF01 — Autenticação e Controle de Sessão:** Permitir login de operadores e gestores com validação de credenciais e proteção de rotas privadas.
- **RF02 — Dashboard de Indicadores:** Exibir cards de resumo (total de contemplados no mês, pendentes de documentação, em análise de crédito e baixas concluídas).
- **RF03 — Listagem e Filtro de Contemplados:** Permitir buscar consorciados por nome, CPF, grupo/cota e filtrar por status do processo.
- **RF04 — Painel de Comunicação com o Cliente:** Registrar e disparar comunicados de contemplação (e-mail/WhatsApp) exibindo o histórico de interações.
- **RF05 — Checklist de Documentação e Baixa:** Permitir aprovar ou recusar documentos enviados pelo cliente e efetivar a baixa da cota contemplada.
- **RF06 — Relatórios e Exportação:** Gerar visualização consolidada das baixas realizadas por período.

### 2.2. Requisitos Não Funcionais (RNF)
- **RNF01 — Responsividade:** Interface adaptável para desktops (`1280px+`), tablets (`768px`) e smartphones (`360px+`).
- **RNF02 — Usabilidade e Acessibilidade:** Navegação por teclado, contraste adequado (WCAG AA), feedback visual imediato (*loading spinners*, *toasts* de sucesso/erro).
- **RNF03 — Desempenho:** Tempo de carregamento inicial inferior a 2 segundos com paginação/filtragem eficiente das listas.
- **RNF04 — Manutenibilidade:** Arquitetura modular baseada em componentes reutilizáveis, serviços de API isolados e padronização com ESLint.

---

## 3. User Stories e Critérios de Aceitação

### US01 — Login e Acesso ao Painel
> **Como** analista de consórcio,  
> **Quero** realizar login com meu e-mail corporativo e senha,  
> **Para** acessar de forma segura as funcionalidades operacionais do sistema.

**Critérios de Aceitação:**
- [x] Formulário controlado valida formato de e-mail e campos obrigatórios antes do envio;
- [x] Exibe mensagem clara de erro caso as credenciais sejam inválidas (`HTTP 401`);
- [x] Redireciona automaticamente para o Dashboard após autenticação bem-sucedida.

---

### US02 — Dashboard de Indicadores de Contemplação
> **Como** gestor de operações,  
> **Quero** visualizar indicadores consolidados do funil de contemplação logo na tela inicial,  
> **Para** identificar gargalos nas etapas de comunicação, análise documental e baixa.

**Critérios de Aceitação:**
- [x] Exibe 4 indicadores principais: *Aguardando Contato*, *Documentação Pendente*, *Em Análise* e *Baixa Concluída*;
- [x] Apresenta estado de carregamento (*Skeleton/Spinner*) enquanto aguarda resposta da API;
- [x] Permite atualizar os indicadores sem recarregar a página inteira.

---

### US03 — Busca e Filtragem de Clientes Contemplados
> **Como** operador de atendimento,  
> **Quero** pesquisar consorciados por nome, grupo/cota ou status do processo,  
> **Para** localizar rapidamente o cadastro do cliente durante o atendimento.

**Critérios de Aceitação:**
- [x] Campo de busca filtra registros em tempo real por nome, CPF ou número da cota;
- [x] Seletor de status permite alternar entre *Todos*, *Pendente*, *Notificado*, *Documentação OK* e *Baixado*;
- [x] Exibe estado vazio amigável (*Empty State*) quando nenhum registro corresponde ao filtro.

---

### US04 — Registro de Comunicação com o Consorciado
> **Como** operador de atendimento,  
> **Quero** registrar o envio do comunicado de contemplação e visualizar o histórico de contatos,  
> **Para** manter rastreabilidade de todas as notificações enviadas ao cliente.

**Critérios de Aceitação:**
- [x] Modal ou painel lateral exibe os dados da cota e a linha do tempo de mensagens anteriores;
- [x] Permite selecionar o canal (*E-mail*, *WhatsApp* ou *Telefone*) e registrar observações do contato;
- [x] Atualiza o status do cliente para *Notificado* imediatamente após a confirmação da API.

---

### US05 — Conferência Documental e Efetivação de Baixa
> **Como** analista de backoffice,  
> **Quero** validar o checklist de documentos obrigatórios e confirmar a baixa da contemplação,  
> **Para** concluir o processo com segurança jurídica e atualizar a situação da cota.

**Critérios de Aceitação:**
- [x] Botão *"Efetivar Baixa"* permanece desabilitado até que todos os documentos obrigatórios estejam marcados como aprovados;
- [x] Solicita confirmação em modal antes de enviar a requisição `PUT`/`POST` de baixa definitiva;
- [x] Registra data/hora e responsável pela baixa.

---

## 4. Product Backlog Priorizado e Estimativas (Fibonacci)

Utilizamos a técnica **MoSCoW** (*Must have*, *Should have*, *Could have*) combinada com **Story Points** na escala de Fibonacci (`1, 2, 3, 5, 8, 13`):

| ID | User Story / Épico | Prioridade (MoSCoW) | Estimativa (Story Points) | Sprint Alvo |
| :--- | :--- | :---: | :---: | :---: |
| **US01** | Autenticação e Controle de Acesso | **Must Have** (Crítica) | `5 SP` | Sprint 1 |
| **US02** | Dashboard de Indicadores Operacionais | **Must Have** (Crítica) | `5 SP` | Sprint 1 |
| **US03** | Listagem, Busca e Filtro de Contemplados | **Must Have** (Crítica) | `8 SP` | Sprint 2 |
| **US04** | Painel de Comunicação e Histórico de Contatos | **Must Have** (Crítica) | `8 SP` | Sprint 3 |
| **US05** | Checklist Documental e Efetivação de Baixa | **Must Have** (Crítica) | `13 SP` | Sprint 3 / 4 |
| **US06** | Exportação de Relatório Gerencial e Filtros Avançados | **Should Have** (Importante) | `5 SP` | Sprint 4 |

---

## 5. Decomposição em Tarefas Técnicas de Front-End

| Task ID | User Story | Tarefa Técnica | Responsável / Papel | Estimativa |
| :--- | :---: | :--- | :--- | :---: |
| `FE-01` | US01 | Estruturar projeto base, rotas protegidas e layout de autenticação | Dev Front-End | 2 SP |
| `FE-02` | US01 | Implementar formulário controlado de login com validação e integração `POST /auth/login` | Dev Front-End | 3 SP |
| `FE-03` | US02 | Criar componente `StatCard` reutilizável e grid responsivo do Dashboard | Dev Front-End | 2 SP |
| `FE-04` | US02 | Integrar consumo de indicadores via `fetch` com estados de *loading* e erro | Dev Front-End | 3 SP |
| `FE-05` | US03 | Desenvolver componente `FilterBar` (busca textual + filtro por status) | Dev Front-End | 3 SP |
| `FE-06` | US03 | Construir tabela responsiva `ContempladosTable` com badges semânticos de status | Dev Front-End | 5 SP |
| `FE-07` | US04 | Criar modal de disparo de notificação e timeline de histórico de comunicações | Dev Front-End | 5 SP |
| `FE-08` | US04 | Integrar envio de comunicado (`POST /comunicacoes`) e atualização de estado | Dev Front-End | 3 SP |
| `FE-09` | US05 | Implementar componente de checklist documental interativo com bloqueio condicional | Dev Front-End | 5 SP |
| `FE-10` | US05 | Implementar fluxo de confirmação de baixa (`PUT /contemplados/:id/baixa`) e testes E2E | Dev Front-End | 8 SP |

---

## 6. Planejamento de Sprints e Cerimônias Scrum

- **Duração de cada Sprint:** 2 semanas (10 dias úteis).
- **Cerimônias Adotadas:**
  - **Sprint Planning (Dia 1 — 1h):** Seleção das *User Stories* do Backlog e quebra em tarefas técnicas.
  - **Daily Scrum (Diária — 15 min):** Alinhamento rápido (*O que fiz ontem? O que farei hoje? Há algum impedimento?*).
  - **Sprint Review (Último dia — 45 min):** Demonstração do incremento funcional navegável para validação.
  - **Sprint Retrospective (Último dia — 30 min):** Inspeção do processo de trabalho e definição de ações de melhoria para a próxima Sprint.

| Sprint | Meta da Sprint (Sprint Goal) | Entregas Principais | Capacidade Planejada |
| :---: | :--- | :--- | :---: |
| **Sprint 1** | Fundação arquitetural, autenticação e visão executiva | `US01` (Login) + `US02` (Dashboard) | `10 SP` |
| **Sprint 2** | Consulta operacional e filtragem de consorciados | `US03` (Listagem, Busca e Filtros) | `8 SP` |
| **Sprint 3** | Fluxo ativo de comunicação com o cliente contemplado | `US04` (Painel de Comunicação) + Início `US05` | `13 SP` |
| **Sprint 4** | Validação documental, baixa definitiva e relatórios | Conclusão `US05` (Baixa) + `US06` (Relatórios) | `13 SP` |

---

## 7. Quadro Kanban do Projeto

Estado atual do fluxo de trabalho visualizado no quadro Kanban:

| 📋 Backlog | 📌 To Do (A Fazer) | ⚙️ In Progress (Em Andamento) | 🔍 Code Review / Testing | ✅ Done (Concluído) |
| :--- | :--- | :--- | :--- | :--- |
| **US06:** Exportação de Relatório Gerencial (`5 SP`) | **FE-09:** Checklist documental interativo (`5 SP`) | **FE-07:** Modal de notificação e timeline (`5 SP`) | **FE-06:** Tabela `ContempladosTable` com badges (`5 SP`) | **FE-01:** Estrutura base e rotas (`2 SP`) |
| | **FE-10:** Fluxo de confirmação de baixa (`8 SP`) | **FE-08:** Integração `POST /comunicacoes` (`3 SP`) | | **FE-02:** Login controlado e integração (`3 SP`) |
| | | | | **FE-03:** Componente `StatCard` e grid (`2 SP`) |
| | | | | **FE-04:** Consumo de indicadores API (`3 SP`) |
| | | | | **FE-05:** Barra de busca `FilterBar` (`3 SP`) |

---

## 8. Estratégia de Versionamento e Branches no Git

Para garantir isolamento, estabilidade e revisões seguras em equipe:

```text
main (Produção / Versão Estável Homologada)
 ↑
 └── develop (Branch de Integração da Sprint)
      ├── feature/us01-autenticacao-login
      ├── feature/us02-dashboard-indicadores
      ├── feature/us03-listagem-filtros-contemplados
      ├── feature/us04-painel-comunicacao
      ├── feature/us05-checklist-baixa-cota
      └── fix/ajuste-responsividade-tabela
```

### Regras de Colaboração Git
1. Nenhum código é enviado diretamente para a `main`;
2. Cada funcionalidade é desenvolvida em uma branch `feature/<id>-<descricao>`;
3. Commits seguem o padrão **Conventional Commits** (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`);
4. A fusão (`merge`) para `develop` exige abertura de **Pull Request (PR)** e aprovação em **Code Review** por pelo menos 1 integrante da equipe.

---

## 9. Definition of Done (DoD — Definição de Pronto)

Uma *User Story* ou Tarefa de Front-End só pode ser movida para a coluna **Done (Concluído)** quando cumprir **todos** os critérios abaixo:

- [x] **Código Implementado e Padronizado:** Componente desenvolvido seguindo os padrões do projeto, sem erros de console ou avisos de lint.
- [x] **Critérios de Aceitação Atendidos:** Todos os cenários previstos na *User Story* foram validados (fluxo principal, campos inválidos, estados de carregamento e erro da API).
- [x] **Responsividade Verificada:** Layout testado em resoluções Desktop (`1366px`) e Mobile (`375px`).
- [x] **Integração Real com API:** Comunicação HTTP testada com tratamento adequado de status (`200`, `201`, `400`, `404`, `500`).
- [x] **Code Review Aprovado:** *Pull Request* revisado e aprovado sem conflitos de merge.
- [x] **Documentação Atualizada:** Componentes, rotas ou instruções de uso atualizados no `README.md`.
