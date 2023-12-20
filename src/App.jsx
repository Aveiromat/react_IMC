import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const nome = "Matheus";

  const pessoa = {
    nome: "Maria Fernanda"
  }

  let estaDeDia = true;

  return (
    <>
      <Perfil nome="matheus" endereco="https://github.com/aveiromat.png" />
      <Formulario />
    </>
  )
}

export default App

  /* ESTUDOS
<h1>Olá, {pessoa.nome}</h1>
<h2>Subtitulo</h2>
{estaDeDia === true ? 'Bom dia' : 'Boa noite'}
{estaDeDia ? 'Bom dia' : 'Boa noite'}
{estaDeDia && 'Bom dia'} */