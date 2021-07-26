import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/formularioDeCadastro/formularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}
function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length === 11) {
    return { valido: true, texto: "" };
  } else {
    return { valido: false, texto: "CPF deve ter 11 digitos" };
  }
}
export default App;
