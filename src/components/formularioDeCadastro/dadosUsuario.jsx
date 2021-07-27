import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email, senha});
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
