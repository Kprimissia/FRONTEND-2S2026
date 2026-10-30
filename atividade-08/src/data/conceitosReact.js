export const CONCEITOS_INICIAIS = [
  {
    id: 'jsx-expressions',
    aula: 'Aula 08',
    titulo: 'JSX (JavaScript XML)',
    categoria: 'Fundamentos',
    resumo: 'Extensão de sintaxe que permite escrever estruturas semelhantes a HTML dentro do JavaScript usando expressões entre chaves {}.',
    exemploCodigo: 'const saudacao = <h1 className="titulo">Olá, {usuario.nome}!</h1>;',
    favorito: true
  },
  {
    id: 'componentes-props',
    aula: 'Aula 08',
    titulo: 'Componentes e Props',
    categoria: 'Arquitetura',
    resumo: 'Divisão da interface em blocos independentes e reutilizáveis que recebem dados imutáveis do componente pai via Props.',
    exemploCodigo: 'function Card({ titulo, categoria }) { return <h2>{titulo} ({categoria})</h2>; }',
    favorito: true
  },
  {
    id: 'virtual-dom',
    aula: 'Aula 08',
    titulo: 'Virtual DOM e Reconciliação',
    categoria: 'Performance',
    resumo: 'Representação leve do DOM em memória. O React compara a árvore anterior com a nova (Diffing) e atualiza apenas os nós alterados.',
    exemploCodigo: 'setContador((atual) => atual + 1); // Atualiza somente o nó de texto no DOM real',
    favorito: false
  },
  {
    id: 'listas-e-keys',
    aula: 'Aula 08',
    titulo: 'Listas (.map / .filter) e Keys',
    categoria: 'Renderização',
    resumo: 'Renderização de coleções de dados utilizando .map() com a propriedade única key={item.id} para rastreamento eficiente.',
    exemploCodigo: 'itens.map((item) => <li key={item.id}>{item.titulo}</li>)',
    favorito: false
  },
  {
    id: 'renderizacao-condicional',
    aula: 'Aula 08',
    titulo: 'Renderização Condicional',
    categoria: 'Renderização',
    resumo: 'Exibição dinâmica de elementos da interface utilizando estruturas if/return, operador ternário (? :) ou curto-circuito lógico (&&).',
    exemploCodigo: 'return carregando ? <Spinner /> : <PainelDados />;',
    favorito: false
  },
  {
    id: 'estado-usestate',
    aula: 'Aula 09',
    titulo: 'Estado Reativo com useState',
    categoria: 'Hooks',
    resumo: 'Hook fundamental para armazenar valores mutáveis que, ao serem atualizados, disparam uma nova renderização automática do componente.',
    exemploCodigo: 'const [busca, setBusca] = useState("");',
    favorito: true
  },
  {
    id: 'formularios-controlados',
    aula: 'Aula 09',
    titulo: 'Formulários Controlados',
    categoria: 'Interatividade',
    resumo: 'Sincronização entre campos de formulário (input, select, textarea) e o estado do React via value, onChange e onSubmit com preventDefault().',
    exemploCodigo: '<input value={titulo} onChange={(e) => setTitulo(e.target.value)} />',
    favorito: false
  },
  {
    id: 'ciclo-vida-useeffect',
    aula: 'Aula 09',
    titulo: 'Efeitos Colaterais com useEffect',
    categoria: 'Hooks',
    resumo: 'Executa efeitos colaterais (chamadas de API, timers, listeners de janela) com controle por array de dependências e função de limpeza (cleanup).',
    exemploCodigo: 'useEffect(() => { document.title = titulo; }, [titulo]);',
    favorito: true
  },
  {
    id: 'consumo-api-fetch',
    aula: 'Aula 09',
    titulo: 'Consumo de APIs com Fetch (async/await)',
    categoria: 'Integração',
    resumo: 'Busca assíncrona de dados externos tratando estados de carregamento (loading), validação de response.ok e captura de erros (try/catch).',
    exemploCodigo: 'const res = await fetch(url); if (!res.ok) throw new Error("Falha HTTP");',
    favorito: false
  },
  {
    id: 'react-router-dom',
    aula: 'Aula 09',
    titulo: 'Navegação SPA com React Router',
    categoria: 'Roteamento',
    resumo: 'Mapeamento de múltiplas páginas em uma Single Page Application usando BrowserRouter, Routes, Route, Link e parâmetros dinâmicos com useParams().',
    exemploCodigo: '<Route path="/conceitos/:id" element={<ConceptDetailPage />} />',
    favorito: true
  }
];
