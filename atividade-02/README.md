# Atividade 02 — Configuração do Ambiente de Desenvolvimento e Aplicação React (Aula 02)

> **Disciplina:** Frameworks Front-end  
> **Professor:** Prof. Me. Deivison S. Takatu  
> **Tecnologias:** React 19, Vite, JavaScript (ES6+), CSS3, Git, GitHub e Vercel

---

## 1. Objetivo da Atividade (Slide 36 — Aula 02)

1. Configurar o ambiente de desenvolvimento Front-end (**VS Code**, **Git**, **Node.js** e **NPM**).
2. Desenvolver uma aplicação **React** funcional e responsiva (**Minha Lista de Tarefas**).
3. Realizar o controle de versão com **Git** (`commit`/`push` para o **GitHub**) e publicação contínua na **Vercel**.
4. Documentar os conceitos fundamentais estudados na **Aula 02**.

---

## 2. Sobre a Aplicação Desenvolvida: Minha Lista de Tarefas

A aplicação **Minha Lista de Tarefas** foi construída em **React + Vite** (`src/App.jsx` e `src/App.css`) e implementa:
- **Adição de tarefas** via campo controlado (`useState`) com suporte à tecla `Enter` e botão `"Adicionar"`;
- **Marcação de conclusão** com atualização imutável do estado (`map`) e feedback visual imediato;
- **Remoção de tarefas** (`filter`);
- **Contador dinâmico** de tarefas cadastradas e estado vazio ilustrado (*empty state*);
- **Layout responsivo** adaptado para desktop e dispositivos móveis (`@media (max-width: 600px)`).

### Como Executar Localmente
```bash
cd atividade-02
npm install
npm run dev
```

---

## 3. Resumo da Aula 02 — Configuração do Ambiente de Desenvolvimento

### 3.1. Versionamento
**Versionamento** é o processo de identificar e registrar diferentes versões de um software, permitindo acompanhar **o que foi alterado, por quem e quando**. Diferentemente de um backup comum, ele mantém um histórico detalhado das alterações e permite colaboração entre desenvolvedores e reversão granular de mudanças.

**Benefícios:**
- Histórico completo das alterações;
- Rastreabilidade e auditoria;
- Trabalho simultâneo entre desenvolvedores;
- Recuperação de versões anteriores;
- Redução de retrabalho e maior segurança durante o desenvolvimento.

### 3.2. Versionamento Semântico (SemVer)
O **Semantic Versioning (SemVer)** utiliza o padrão `MAJOR.MINOR.PATCH`:

| Componente | Significado | Exemplo |
| :--- | :--- | :--- |
| **MAJOR** | Mudanças incompatíveis de API | `2.0.0` |
| **MINOR** | Nova funcionalidade compatível | `1.1.0` |
| **PATCH** | Correção de bugs compatível | `1.0.1` |

### 3.3. Git, Tags e Branches
- **Git:** sistema de controle de versão distribuído utilizado para registrar alterações nos arquivos de um projeto.
- **Tags:** identificam marcos importantes do histórico (ex.: releases `1.0.0`), podendo ser *leves (lightweight)* ou *anotadas (annotated)*.
- **Branches:** permitem desenvolver funcionalidades ou correções isoladamente sem modificar diretamente a versão principal (`main`) do projeto.

### 3.4. Boas Práticas com Git
- Fazer commits pequenos, atômicos e frequentes;
- Utilizar mensagens de commit claras e semânticas;
- Utilizar branches para novas funcionalidades;
- Manter a branch principal estável e executar testes antes de merges.

### 3.5. IDE (Visual Studio Code), Node.js e NPM
- **VS Code:** editor de código extensível que reúne terminal integrado, depurador, integração nativa com Git e extensões para desenvolvimento Web.
- **Node.js:** ambiente de execução JavaScript no lado do servidor e base para ferramentas de build modernas.
- **NPM (Node Package Manager):** gerenciador de pacotes do Node.js que controla dependências e scripts através do arquivo `package.json` e garante reprodutibilidade com `package-lock.json`.

### 3.6. Fluxo de Deploy com Vercel
A atividade consolida o fluxo moderno de publicação Front-end:

```text
React (Código-Fonte) ➔ VS Code ➔ Git (Commit) ➔ GitHub (Repositório) ➔ Vercel (Deploy Contínuo / CDN)
```
