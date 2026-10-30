# Atividade 07 — Frameworks CSS: Box Model, Flexbox e Tailwind CSS

**Disciplina:** Frameworks Front-end  
**Professor:** Prof. Me. Deivison S. Takatu  
**Aula Referência:** Aula 07 — Frameworks CSS  

---

## 1. Estrutura do Diretório

```text
atividade-07/
├── parte1-boxmodel-flexbox/   # Atividade 01 (Slide 33): 20 elementos Box Model + 20 propriedades Flexbox
│   ├── index.html             # Estrutura HTML vinculada ao CSS externo (<link>)
│   └── style.css              # Folha de estilo externa com Box Model e Flexbox responsivo
├── parte2-tailwind/           # Atividade 02 (Slide 46): Projeto com 36+ classes diferentes do Tailwind CSS
│   └── index.html             # Interface responsiva usando Tailwind CSS v4 Play CDN
└── README.md                  # Documentação das classes Tailwind, Box Model/Flexbox e Resumo da Aula 07
```

---

## 2. Parte 1 — 20 Elementos Box Model & 20 Propriedades Flexbox (`parte1-boxmodel-flexbox/`)

No arquivo [`parte1-boxmodel-flexbox/index.html`](./parte1-boxmodel-flexbox/index.html) vinculado externamente ao [`parte1-boxmodel-flexbox/style.css`](./parte1-boxmodel-flexbox/style.css):

1. **20 Elementos com Box Model Completo (`#box-01` a `#box-20`):**
   - Todos os 20 cards possuem definição explícita das 4 camadas do **Box Model**:
     - **Content:** `width` (entre `210px` e `240px`) e `min-height` (`125px` a `140px`);
     - **Padding:** espaçamento interno entre o conteúdo e a borda (`14px` a `24px`);
     - **Border:** bordas variadas (`solid`, `dashed`, `double`, `dotted`, `groove`, `ridge`) de `2px` a `4px`;
     - **Margin:** espaçamento externo entre os elementos (`8px` a `14px`).
2. **20 Propriedades / Configurações de Flexbox Utilizadas:**
   1. `display: flex`
   2. `flex-direction: row`
   3. `flex-direction: column`
   4. `flex-direction: row-reverse`
   5. `flex-wrap: wrap`
   6. `flex-flow: row wrap`
   7. `justify-content: space-between`
   8. `justify-content: space-evenly`
   9. `justify-content: space-around`
   10. `justify-content: center`
   11. `align-items: flex-start`
   12. `align-items: stretch`
   13. `align-items: center`
   14. `align-items: flex-end`
   15. `align-items: baseline`
   16. `align-content: space-between`
   17. `gap`, `row-gap` e `column-gap`
   18. `flex-grow` (`1` e `2`)
   19. `flex-shrink: 0`, `flex-basis: 240px` e shorthand `flex: 1 1 220px`
   20. `align-self` (`flex-start`, `center`, `flex-end`) e `order` (`-1` e `2`)

---

## 3. Parte 2 — Documentação das 36 Classes do Tailwind CSS (`parte2-tailwind/index.html`)

Tabela detalhando as **36 classes utilitárias distintas** do Tailwind CSS aplicadas no arquivo [`parte2-tailwind/index.html`](./parte2-tailwind/index.html) e suas respectivas funções:

| # | Classe Tailwind CSS | Categoria | Função / Propriedade CSS Equivalente |
| :---: | :--- | :--- | :--- |
| 01 | `bg-slate-950` | Cores (Background) | Define a cor de fundo principal da página em azul-ardósia escuro (`#020617`). |
| 02 | `bg-slate-900` | Cores (Background) | Define a cor de fundo secundária para os cards (`#0f172a`). |
| 03 | `text-slate-100` | Cores (Texto) | Define a cor padrão clara do texto principal (`#f1f5f9`). |
| 04 | `text-sky-400` | Cores (Texto) | Aplica cor de destaque azul-celeste em títulos e badges (`#38bdf8`). |
| 05 | `bg-emerald-500/10` | Cores & Opacidade | Define fundo verde-esmeralda com `10%` de opacidade. |
| 06 | `bg-gradient-to-r` | Gradientes | Cria um gradiente linear da esquerda para a direita (`from-slate-900 via-slate-900 to-sky-950`). |
| 07 | `font-sans` | Tipografia | Aplica a pilha de fontes sem serifa padrão do sistema. |
| 08 | `font-mono` | Tipografia | Aplica fonte monoespaçada para exibição de trechos de código e classes. |
| 09 | `text-xs` | Tipografia | Define tamanho de fonte extra pequeno (`0.75rem` / `12px`). |
| 10 | `text-xl` | Tipografia | Define tamanho de fonte grande (`1.25rem` / `20px`). |
| 11 | `text-3xl` | Tipografia | Define tamanho de título principal (`1.875rem` / `30px`). |
| 12 | `font-extrabold` | Tipografia | Define peso da fonte extra negrito (`font-weight: 800`). |
| 13 | `uppercase` | Tipografia | Transforma o texto em letras maiúsculas (`text-transform: uppercase`). |
| 14 | `tracking-wider` | Tipografia | Aumenta o espaçamento entre letras (`letter-spacing: 0.05em`). |
| 15 | `leading-relaxed` | Tipografia | Define altura de linha confortável para leitura (`line-height: 1.625`). |
| 16 | `min-h-screen` | Dimensões | Garante altura mínima de `100vh` (toda a altura da janela). |
| 17 | `max-w-6xl` | Dimensões | Limita a largura máxima do container a `72rem` (`1152px`). |
| 18 | `w-3` / `h-3` | Dimensões | Define largura e altura fixas de `0.75rem` (`12px`) no indicador circular. |
| 19 | `mx-auto` | Espaçamento (Margin) | Centraliza horizontalmente o bloco (`margin-left: auto; margin-right: auto`). |
| 20 | `mb-6` | Espaçamento (Margin) | Adiciona margem inferior de `1.5rem` (`24px`). |
| 21 | `p-6` | Espaçamento (Padding) | Aplica preenchimento interno de `1.5rem` (`24px`) em todos os lados do card. |
| 22 | `px-6` / `py-4` | Espaçamento (Padding) | Aplica padding horizontal (`1.5rem`) e vertical (`1rem`). |
| 23 | `border` / `border-b` | Bordas | Aplica borda de `1px` em todos os lados ou apenas na parte inferior. |
| 24 | `border-slate-800` | Bordas | Define a cor da borda em tom escuro sutil (`#1e293b`). |
| 25 | `rounded-xl` / `rounded-2xl` | Bordas (Radius) | Arredonda os cantos dos containers (`0.75rem` e `1rem`). |
| 26 | `rounded-full` | Bordas (Radius) | Cria formato totalmente circular ou de pílula (`border-radius: 9999px`). |
| 27 | `shadow-xl` | Efeitos / Sombras | Adiciona sombra pronunciada para destacar o card principal. |
| 28 | `sticky` / `top-0` / `z-50` | Posicionamento | Mantém a barra de navegação fixa no topo durante a rolagem sobrepondo os demais elementos. |
| 29 | `relative` / `absolute` | Posicionamento | Permite posicionar o badge no canto superior direito (`top-4 right-4`) relativo ao card pai. |
| 30 | `flex` / `flex-col` / `flex-wrap` | Flexbox | Ativa o Flexbox em linha ou coluna com quebra automática de linha. |
| 31 | `items-center` | Flexbox | Alinha os itens verticalmente ao centro no eixo transversal (`align-items: center`). |
| 32 | `justify-between` | Flexbox | Distribui os elementos nas extremidades no eixo principal (`justify-content: space-between`). |
| 33 | `grid` / `grid-cols-1` | CSS Grid | Cria um layout de grade iniciando com 1 coluna em telas móveis (Mobile-First). |
| 34 | `gap-6` | Flexbox & Grid | Define espaçamento uniforme de `1.5rem` (`24px`) entre linhas e colunas. |
| 35 | `sm:grid-cols-2` | Responsividade (`sm:`) | Altera o Grid para **2 colunas** em telas a partir de `640px`. |
| 36 | `lg:grid-cols-3` | Responsividade (`lg:`) | Altera o Grid para **3 colunas** em telas grandes a partir de `1024px`. |

---

## 4. Resumo Completo — Aula 07: Frameworks CSS

### 4.1. Formas de Aplicar CSS no HTML
1. **CSS Inline (`style="..."`):** Aplicado diretamente na tag HTML. Dificulta a manutenção e reutilização.
2. **CSS Interno (`<style>`):** Declarado dentro do `<head>` do próprio documento HTML.
3. **CSS Externo (`<link rel="stylesheet" href="style.css">`):** Melhores práticas de separação de responsabilidades, permitindo cache pelo navegador e manutenção organizada.

### 4.2. O Modelo de Caixa (CSS Box Model)
Todo elemento HTML é representado como uma caixa retangular composta por 4 camadas concêntricas:
- **Content:** Área onde ficam textos e imagens (`width`, `height`);
- **Padding:** Espaçamento interno transparente entre o conteúdo e a borda;
- **Border:** Linha que envolve o padding e o conteúdo;
- **Margin:** Espaçamento externo que separa o elemento dos elementos vizinhos.
- A propriedade `box-sizing: border-box` faz com que `width` e `height` incluam o `padding` e a `border`, evitando que os elementos ultrapassem o tamanho planejado.

### 4.3. CSS Flexbox
Modelo unidimensional de layout projetado para distribuir espaço e alinhar itens em um **Flex Container** ao longo de dois eixos:
- **Main Axis (Eixo Principal):** Definido por `flex-direction` (`row`, `row-reverse`, `column`, `column-reverse`) e controlado por `justify-content`.
- **Cross Axis (Eixo Transversal):** Perpendicular ao eixo principal, controlado por `align-items`, `align-self` e `align-content`.

### 4.4. Frameworks CSS: Component-Based vs. Utility-First
- **Baseados em Componentes (ex.: Bootstrap, Bulma):** Fornecem componentes prontos (`.btn`, `.card`, `.navbar`). Rápidos para prototipar, mas podem gerar visuais padronizados e exigir sobrescrita de estilos.
- **Utility-First (ex.: Tailwind CSS):** Fornecem classes atômicas de propósito único (`flex`, `p-6`, `bg-slate-900`, `rounded-xl`) que são combinadas diretamente no HTML para construir qualquer design personalizado com alta produtividade e responsividade Mobile-First (`sm:`, `md:`, `lg:`, `xl:`).
