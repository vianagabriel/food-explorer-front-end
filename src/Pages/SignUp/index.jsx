import { Container, Label, Logo, Register } from "./styles";
import logoImg from '../../assets/logoImg.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo da empresa" />
        <h3>food explorer</h3>
      </Logo>

      <Register>
       <h2>Criar sua conta</h2>
        <Label>
          <p>Nome</p>
          <Input  
            placeholder='Exemplo: Maria da Silva'
          />
        </Label>

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

        <Button title='Criar conta' />

        <div className="buttonText">
          
       
           <ButtonText to='/'  title='Já tenho conta' />
          
        </div>
      </Register>

    </Container>
  )
};
