# Atividade 06 — Gestão Ágil de Projetos Front-End

**Disciplina:** Frameworks Front-end  
**Professor:** Prof. Me. Deivison S. Takatu  
**Aula Referência:** Aula 06 — Projetos Front-End  

---

## 1. Visão Geral da Atividade

Esta atividade aplica os conceitos de **Gestão Ágil de Projetos Front-End** (Aula 06) ao **Projeto Integrador Interdisciplinar (ConsorTech — Sistema de Comunicação e Baixa de Clientes Contemplados em Consórcios)**, estruturando o ciclo completo desde o levantamento de requisitos e escrita de *User Stories* até o *Product Backlog*, estimativas em *Story Points*, divisão em *Sprints*, fluxo *Kanban*, estratégia de *Branches Git* e *Definition of Done (DoD)*.

### Arquivos da Entrega

| Arquivo | Descrição |
| :--- | :--- |
| [`planejamento-projeto-integrador.md`](./planejamento-projeto-integrador.md) | Documento completo de planejamento ágil do Projeto Integrador (Requisitos, User Stories, Backlog, Sprints, Kanban, Git Flow e DoD). |
| [`kanban-interativo/index.html`](./kanban-interativo/index.html) | Quadro Kanban interativo em HTML/CSS/JS com filtro por Sprint, cálculo automático de *Story Points* e movimentação de tarefas. |

---

## 2. Resumo Completo — Aula 06: Projetos Front-End

### 2.1. Por que Gerenciar Projetos Front-End?
O desenvolvimento Front-end moderno envolve múltiplas camadas de complexidade: estado da aplicação, consumo de APIs, responsividade, acessibilidade, performance e integração contínua com equipes de Design (UX/UI) e Back-end. Sem gestão estruturada, surgem problemas clássicos como:
- **Escopo difuso (*Scope Creep*):** Funcionalidades adicionadas sem análise de impacto;
- **Prazos irrealistas:** Subestimação de integrações, tratamento de erros e ajustes de responsividade;
- **Falta de alinhamento:** Front-end aguardando endpoints ou criando telas incompatíveis com os contratos da API;
- **Débito técnico:** Código duplicado, ausência de testes e componentes difíceis de manter.

### 2.2. Levantamento de Requisitos
- **Requisitos Funcionais (RF):** Definem **o que** o sistema deve fazer (ex.: autenticar usuário, filtrar consorciados, registrar baixa de cota).
- **Requisitos Não Funcionais (RNF):** Definem **como** o sistema deve se comportar em termos de qualidade, segurança, desempenho, usabilidade e responsividade.

### 2.3. User Stories (Histórias de Usuário) e Critérios de Aceitação
No desenvolvimento ágil, os requisitos são expressos sob a perspectiva do valor entregue ao usuário:

```text
Como [persona / tipo de usuário],
Quero [ação ou funcionalidade desejada],
Para [benefício ou objetivo de negócio alcançado].
```

Cada *User Story* deve ser acompanhada por **Critérios de Aceitação** claros e testáveis, que orientam tanto o desenvolvimento quanto a validação da entrega.

### 2.4. Product Backlog, Priorização e Quebra em Tarefas
- **Product Backlog:** Lista ordenada e dinâmica de todas as funcionalidades, melhorias e correções necessárias no produto.
- **Priorização:** Avalia valor de negócio vs. esforço técnico (utilizando matrizes ou o método **MoSCoW**: *Must have*, *Should have*, *Could have*, *Won't have*).
- **Decomposição Técnica:** Histórias maiores são quebradas em tarefas técnicas menores de Front-end (criação de layout, estados do formulário, integração com endpoint, validação e testes).

### 2.5. Estimativas Ágeis (Story Points e Planning Poker)
Em vez de estimar apenas em horas absolutas, equipes ágeis utilizam **Story Points** na sequência de **Fibonacci (`1, 2, 3, 5, 8, 13, 21`)**, considerando:
1. **Complexidade técnica** da implementação;
2. **Volume de trabalho** e repetição;
3. **Riscos e incertezas** (ex.: dependência de API externa).

### 2.6. Metodologias Ágeis: Scrum e Kanban
- **Scrum:** Baseado em ciclos iterativos de duração fixa (**Sprints**, geralmente de 1 a 4 semanas) e cerimônias bem definidas (*Sprint Planning*, *Daily Scrum*, *Sprint Review* e *Sprint Retrospective*).
- **Kanban:** Gestão visual do fluxo contínuo de trabalho em colunas (*Backlog*, *To Do*, *In Progress*, *Code Review / Testing*, *Done*), limitando o trabalho em progresso (*WIP — Work In Progress*) para evitar gargalos.

### 2.7. Definition of Done (DoD — Definição de Pronto)
Acordo formal da equipe que estabelece os critérios mínimos de qualidade para que uma tarefa seja considerada realmente concluída (código limpo, responsivo, integrado à API, revisado via Pull Request e testado).

