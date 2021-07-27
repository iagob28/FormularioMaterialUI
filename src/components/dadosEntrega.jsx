import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar();
        }}
      >
        <TextField
          value={cep}
          onChange={(event) => {
            setCEP(event.target.value);
          }}
          id="cep"
          label="cep"
          type="number"
          variant="outlined"
          name="cep"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          value={endereco}
          onChange={(event) => {
            setEndereco(event.target.value);
          }}
          id="endereco"
          label="Endereço"
          type="text"
          variant="outlined"
          name="endereco"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          value={numero}
          onChange={(event) => {
            setNumero(event.target.value);
          }}
          id="numero"
          label="Número"
          type="number"
          variant="outlined"
          name="numero"
          margin="normal"
          required
        />
        <TextField
          value={estado}
          onChange={(event) => {
            setEstado(event.target.value);
          }}
          id="estado"
          label="Estado"
          type="text"
          variant="outlined"
          name="estado"
          margin="normal"
          required
        />
        <TextField
          value={cidade}
          onChange={(event) => {
            setCidade(event.target.value);
          }}
          id="cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          margin="normal"
          name="cidade"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Finalizar Cadastro
        </Button>
      </form>
    </>
  );
}

export default DadosEntrega;
