# Atividade 08 — Projeto React Completo (Aulas 08 e 09)

**Disciplina:** Frameworks Front-end  
**Professor:** Prof. Me. Deivison S. Takatu  
**Aulas Referência:** Aula 08 (`Projeto React`) e Aula 09 (`Projeto React 02`)  

---

## 1. Visão Geral da Aplicação (`ReactHub`)

O **ReactHub** é uma aplicação Single Page Application (SPA) desenvolvida com **React 19**, **Vite** e **React Router (`react-router-dom`)** que implementa de forma integrada todos os conceitos práticos exigidos nas **Aulas 08 e 09**.

### Estrutura de Diretórios e Árvore de Componentes

```text
atividade-08/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Barra de navegação SPA com Link e indicadores em tempo real
│   │   ├── ConceptCard.jsx        # Componente reutilizável recebendo Props e eventos de callback
│   │   └── VirtualDomDemo.jsx     # Simulador interativo de Reconciliação no Virtual DOM
│   ├── data/
│   │   └── conceitosReact.js      # Base de dados estruturada dos conceitos das Aulas 08 e 09
│   ├── pages/
│   │   ├── HomePage.jsx           # Listagem com .map(), .filter(), Keys e Renderização Condicional
│   │   ├── ConceptDetailPage.jsx  # Rota dinâmica (/conceitos/:id) utilizando useParams()
│   │   ├── NovoConceitoPage.jsx   # Formulário Controlado com useState, onSubmit e validação
│   │   └── ApiExplorerPage.jsx    # Consumo de API externa com fetch, async/await e useEffect
│   ├── App.jsx                    # Configuração de BrowserRouter, Routes, Route e useEffect global
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 2. Mapeamento dos Conceitos Implementados

### 2.1. Conceitos da Aula 08 (`Projeto React`)
| Conceito | Onde está implementado | Como foi aplicado |
| :--- | :--- | :--- |
| **JSX** | Todos os componentes (`.jsx`) | Interpolação de expressões `{}` e atributos `className` e `htmlFor`. |
| **Árvore de Componentes** | `App` → `Navbar` + `HomePage` → `ConceptCard` + `VirtualDomDemo` | Separação modular de responsabilidades e reutilização de interface. |
| **Props** | `Navbar.jsx`, `ConceptCard.jsx`, `HomePage.jsx` | Passagem de objetos (`conceito`), contadores numéricos e callbacks (`onToggleFavorito`). |
| **Virtual DOM** | `src/components/VirtualDomDemo.jsx` | Contador de ciclos de reconciliação demonstrando atualização seletiva de nós. |
| **Listas e Keys** | `src/pages/HomePage.jsx` e `ApiExplorerPage.jsx` | Filtragem com `.filter()` e transformação em elementos JSX com `.map()` e `key={conceito.id}`. |
| **Renderização Condicional** | `HomePage.jsx` e `ConceptDetailPage.jsx` | Uso de `if (!conceito) return ...` (early return) e operadores ternários (`? :`). |

### 2.2. Conceitos da Aula 09 (`Projeto React 02`)
| Conceito | Onde está implementado | Como foi aplicado |
| :--- | :--- | :--- |
| **Estado e `useState`** | `App.jsx`, `HomePage.jsx`, `NovoConceitoPage.jsx` | Controle reativo de lista de conceitos, filtros, favoritos e estados de formulário. |
| **Formulários Controlados** | `src/pages/NovoConceitoPage.jsx` | Inputs sincronizados com `value` + `onChange`, envio com `e.preventDefault()` e validação. |
| **`useEffect` e Cleanup** | `src/App.jsx` e `src/pages/ApiExplorerPage.jsx` | Sincronização de `document.title` e listener `window.addEventListener('resize', ...)` com função de limpeza `return () => window.removeEventListener(...)`. |
| **Consumo de API (`fetch`)** | `src/pages/ApiExplorerPage.jsx` | Função `async/await` consultando API REST com verificação `if (!response.ok)`, `try/catch/finally` e estados de `carregando` e `erro`. |
| **React Router** | `App.jsx`, `Navbar.jsx`, `ConceptDetailPage.jsx` | Navegação SPA sem reload com `BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate` e rota dinâmica `/conceitos/:id` com `useParams()`. |

---

## 3. Como Executar Localmente

```bash
cd atividade-08
npm install
npm run dev
```

---

## 4. Resumo Completo — Aulas 08 e 09: Desenvolvimento com React

### 4.1. Aula 08 — Fundamentos do Projeto React
1. **JSX (JavaScript XML):** Permite descrever a estrutura da interface diretamente no JavaScript de forma declarativa. Expressões JavaScript são inseridas entre chaves `{}`.
2. **Componentização e Árvore de Componentes:** Uma aplicação React é estruturada como uma árvore hierárquica a partir do componente raiz (`App`), dividindo a UI em partes pequenas, independentes e reutilizáveis.
3. **Props (Propriedades):** Mecanismo de comunicação unidirecional (*top-down*, de pai para filho). As `props` são somente leitura (imutáveis) dentro do componente filho.
4. **Virtual DOM e Reconciliação:** O React mantém uma cópia leve do DOM em memória. Quando o estado muda, ele compara a nova árvore virtual com a anterior (*Diffing*) e aplica apenas as alterações mínimas necessárias no DOM real do navegador.
5. **Listas e Keys:** Métodos funcionais como `.map()` e `.filter()` permitem transformar arrays de dados em listas de componentes. A propriedade `key` deve usar um ID único e estável de cada item para que o React identifique adições, remoções e reordenações.
6. **Renderização Condicional:** Permite exibir ou ocultar elementos conforme o estado da aplicação usando estruturas `if / return`, operador ternário (`condicao ? <A /> : <B />`) ou operador lógico `&&`.

### 4.2. Aula 09 — Estado, Formulários, Ciclo de Vida, APIs e Rotas
1. **Estado (`State`) e `useState`:** Enquanto `props` vêm de fora, o `state` é a memória interna do componente. A atualização deve ser feita sempre pela função atualizadora (`setEstado`), disparando uma nova renderização.
2. **Formulários Controlados (*Controlled Components*):** O estado do React torna-se a "única fonte da verdade" dos campos de entrada (`value={estado}` + `onChange={(e) => setEstado(e.target.value)}`), facilitando validações em tempo real antes do `onSubmit`.
3. **Hook `useEffect`:** Permite sincronizar o componente com sistemas externos (APIs, `document.title`, eventos globais do navegador). Seu array de dependências define quando o efeito executa:
   - Sem array: após toda renderização;
   - Array vazio `[]`: apenas na montagem (*mount*) do componente;
   - Com variáveis `[variavel]`: na montagem e sempre que `variavel` mudar;
   - **Função de Limpeza (*Cleanup*):** O `return () => { ... }` remove *event listeners* ou *timers* quando o componente é desmontado, evitando vazamentos de memória (*memory leaks*).
4. **Consumo de APIs com `fetch`:** Realizado com funções `async/await` dentro do `useEffect` ou em resposta a eventos, controlando obrigatoriamente três estados de interface: **carregamento (`loading`)**, **sucesso (`data`)** e **erro (`error`)**.
5. **React Router (`react-router-dom`):** Viabiliza múltiplas páginas em uma SPA (*Single Page Application*) atualizando a URL e alternando componentes sem recarregar o documento HTML completo.
