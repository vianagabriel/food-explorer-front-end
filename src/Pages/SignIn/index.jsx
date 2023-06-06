import { Container, Label, Logo, Register } from "./styles";
import logoImg from '../../assets/logoImg.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
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
          />
        </Label>

        <Label>
          <p>Senha</p>
          <Input 
            placeholder='No mínimo 6 caracteres' 
            type='password'  
          />
        </Label>

        <Button title='Entrar' />

        <div className="buttonText">
          <ButtonText title='Criar uma conta' />
        </div>
      </Register>

    </Container>
  )
};
