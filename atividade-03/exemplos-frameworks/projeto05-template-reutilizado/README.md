# Projeto 05 — Reutilização e Adaptação de Projeto Modelo (Open Source)

Conforme solicitado na **Aula 03 (Slides 34–38)**:

## 1. Origem do Projeto Modelo
- **Fonte:** Template oficial `create-vite` (`react`) / Comunidade Open Source no GitHub.
- **Comando de obtenção:**
  ```bash
  git clone https://github.com/vitejs/vite.git
  # ou inicialização a partir do template oficial:
  npm create vite@latest atividade-03 -- --template react
  ```

## 2. Adaptações Realizadas sobre o Modelo Base
1. **Substituição do contador padrão do template Vite (`App.jsx`):** O componente inicial de demonstração foi transformado na calculadora temática **Super Calc (Mario)** com gerenciamento de múltiplos estados (`display`, `prev`, `op`, `overwrite`, `coins`, `popups`, `shake`).
2. **Componentização Customizada:** Foram criados os componentes reutilizáveis:
   - `Key`: botão de calculadora parametrizado por `variant` (`block`, `pipe`, `fire`, `star`) e estado `active`;
   - `Coin`: ícone vetorial SVG reutilizável em dois tamanhos (`small` e padrão);
   - `Cloud`: elemento decorativo SVG posicionado via `props.style`.
3. **Publicação Contínua:** Repositório conectado à **Vercel** em `https://projeto-react-frontend2026.vercel.app/`.

