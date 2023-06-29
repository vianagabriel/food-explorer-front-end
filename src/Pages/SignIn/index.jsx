import { Container, Label, Logo, Register } from "./styles";
import logoImg from '../../assets/logoImg.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from '../../hooks/auth';
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({
       email,
       password
    })
  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo da empresa" />
        <h3>food explorer</h3>
      </Logo>

      <Register>
        <h2>Faça Login</h2>
        
        <Label>
          <p>Email</p>
          <Input 
            placeholder='Exemplo: exemplo@exemplo.com.br' 
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>

        <Label>
          <p>Senha</p>
          <Input 
            placeholder='No mínimo 6 caracteres' 
            type='password'  
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>

        <Button 
          title='Entrar'
          onClick={handleSignIn} 
        />

        <div className="buttonText">
          <ButtonText to='/register' title='Criar uma conta' />
        </div>
      </Register>

    </Container>
  )
};
