# Atividade 03 — Projetos com Frameworks Front-end (Aula 03)

> **Disciplina:** Frameworks Front-end  
> **Professor:** Prof. Me. Deivison S. Takatu  
> **Deploy Oficial (Vercel):** [https://projeto-react-frontend2026.vercel.app/](https://projeto-react-frontend2026.vercel.app/)

---

## 1. Objetivo da Atividade (Slides 37–39 — Aula 03)

1. Desenvolver e comparar **quatro implementações Web sobre o mesmo tema (Super Calc)** utilizando diferentes tecnologias Front-end:
   - **Projeto 01 — React:** [`src/App.jsx`](./src/App.jsx) (aplicação principal publicada na Vercel);
   - **Projeto 02 — Vue.js:** [`exemplos-frameworks/projeto02-vue/src/App.vue`](./exemplos-frameworks/projeto02-vue/src/App.vue) e [`CalcKey.vue`](./exemplos-frameworks/projeto02-vue/src/components/CalcKey.vue);
   - **Projeto 03 — Angular:** [`exemplos-frameworks/projeto03-angular/src/app/app.component.ts`](./exemplos-frameworks/projeto03-angular/src/app/app.component.ts) e [`app.component.html`](./exemplos-frameworks/projeto03-angular/src/app/app.component.html);
   - **Projeto 04 — Next.js:** [`exemplos-frameworks/projeto04-nextjs/app/page.jsx`](./exemplos-frameworks/projeto04-nextjs/app/page.jsx);
   - **Projeto 05 — Reutilização de Projeto Modelo:** [`exemplos-frameworks/projeto05-template-reutilizado/README.md`](./exemplos-frameworks/projeto05-template-reutilizado/README.md).
2. Elaborar uma análise comparativa entre **React**, **Vue.js**, **Angular** e **Next.js**, destacando suas arquiteturas, curvas de aprendizado e casos de uso.

---

## 2. Comparativo Técnico: React vs. Vue.js vs. Angular vs. Next.js

| Critério | React | Vue.js | Angular | Next.js |
| :--- | :--- | :--- | :--- | :--- |
| **Classificação Técnica** | Biblioteca JavaScript de UI | Framework Progressivo | Framework Completo (*Full-featured*) | Framework Full-Stack baseado em React |
| **Mantenedor / Criador** | Meta (Facebook) + Comunidade | Evan You + Comunidade | Google | Vercel |
| **Linguagem / Sintaxe** | JavaScript / TypeScript + **JSX** | JavaScript / TypeScript + **SFC (`.vue`)** | **TypeScript** nativo + Templates HTML | JavaScript / TypeScript + **JSX / RSC** |
| **Modelo de Estado / Reatividade** | Imutabilidade explícita via Hooks (`useState`, `useReducer`) | Reatividade automática via Proxies (`ref`, `reactive`, `computed`) | *Change Detection* (Zone.js / Signals) + RxJS | Hooks do React em Client Components (`"use client"`) + Server Actions |
| **Roteamento** | Biblioteca externa (`react-router-dom`) | Biblioteca oficial (`vue-router`) | Embutido nativamente (`@angular/router`) | Nativo baseado em arquivos (**App Router** `app/page.jsx`) |
| **Renderização Padrão** | CSR (*Client-Side Rendering*) | CSR (SSR via Nuxt) | CSR + SSR (Angular Universal/SSR) | **SSR**, **SSG**, **ISR** e **React Server Components** nativos |
| **Curva de Aprendizado** | Moderada (exige domínio de JS moderno e JSX) | Baixa / Acessível (separa `<script>`, `<template>` e `<style>`) | Íngreme (TypeScript, Decorators, Injeção de Dependência) | Moderada (adiciona conceitos de servidor/cliente ao React) |
| **Quando Escolher** | SPAs flexíveis, dashboards interativos e amplo ecossistema | Adoção gradual, alta produtividade e templates limpos | Grandes sistemas corporativos padronizados | Aplicações que exigem SEO forte, performance inicial e rotas full-stack |

---

## 3. Resumo da Aula 03 — Projetos com Frameworks Front-end

### 3.1. Framework × Biblioteca
A principal diferença está na **Inversão de Controle (IoC)**:
- **Framework (Angular, Vue, Next.js):** define a arquitetura e controla o fluxo da aplicação, chamando o código do desenvolvedor nos momentos apropriados.
- **Biblioteca (React):** fornece funções e componentes específicos para a camada de interface, deixando o controle arquitetural sob responsabilidade do desenvolvedor.

### 3.2. Pilares dos Frameworks Modernos
1. **Componentização:** divisão da interface em blocos independentes, encapsulados e reutilizáveis.
2. **Programação Reativa:** atualização automática da interface sempre que o estado subjacente muda, eliminando manipulações imperativas manuais do DOM.
3. **Virtual DOM e Reconciliação:** atualização otimizada apenas dos nós que sofreram alteração.
4. **Build e Bundling (Vite / Webpack):** transpilação, minificação, *tree-shaking* e otimização de pacotes para produção.
5. **Roteamento SPA e Integração com APIs:** navegação fluida sem recarregamento completo de página e comunicação assíncrona via HTTP.

### 3.3. Como Executar o Projeto Principal (React + Vite)
```bash
cd atividade-03
npm install
npm run dev
```
