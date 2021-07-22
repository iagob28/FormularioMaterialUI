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
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
