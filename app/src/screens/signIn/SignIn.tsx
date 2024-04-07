import React, { useState, useContext } from "react";
import GenericInput from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import * as C from "./SignInStyled";
import AuthContext from "../../context/auth";
import { Navigate } from "react-router-dom";
const Signin = () => {
  const { signIn, user, signed } = useContext(AuthContext);

  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!name || !email || !password) {
      setError("Preencha todos os campos");
      return;
    }
    const data = {
      name,
      email,
      password,
    };
    await signIn(data);
    return <Navigate to="/" />;
  };

  return (
    <C.Container>
      <C.Image />
      <C.Content>
        <GenericInput
          label="Nome"
          input={{
            id: "name-input",
            type: "name",
            name: "name-input",
            placeholder: "correct-horse-battery-staple",
            onChange: (e) => setNome(e.target.value),
          }}
        />
        <GenericInput
          label="E-mail"
          input={{
            id: "name-input",
            type: "email",
            name: "email-input",
            placeholder: "exemplo@exemplo.com",
            onChange: (e) => setEmail(e.target.value),
          }}
        />
        <GenericInput
          label="Senha"
          input={{
            id: "password-input",
            type: "password",
            name: "password-input",
            placeholder: "correct-horse-battery-staple",
            onChange: (e) => setPassword(e.target.value),
          }}
        />
        <Button Text="Entrar" onPress={handleLogin} />
        <Button Text="Entrar" onPress={() => console.log(user, signed)} />
      </C.Content>
    </C.Container>
  );
};

export default Signin;
