import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("https://express-backend-lueb.onrender.com/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao consultar a API");
        }

        return response.json();
      })
      .then((data) => {
        setDados(data);
      })
      .catch((error) => {
        setErro(error.message);
      });
  }, []);

  return (
    <div className="container">
      <h1>Status da API</h1>

      {erro && <p>Erro: {erro}</p>}

      {!dados && !erro && <p>Carregando...</p>}

      {dados && (
        <div className="card">
          <p>
            <strong>Data e hora:</strong> {dados.dataHora}
          </p>

          <p>
            <strong>Status:</strong> {dados.status}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

