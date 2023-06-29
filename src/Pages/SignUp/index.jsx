import { Container, Label, Logo, Register } from "./styles";
import logoImg from '../../assets/logoImg.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useState } from "react";
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";


export function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignUp(){
    if(!email || !name || !password){
       return alert('Preencha todos os campos!')
    }
    if(password.length < 6){
      return alert('A senha deve conter no mínimo 6 digitos.')
    }

    setLoading(true);

    api.post('/users', {name, email, password})
    .then(() =>  {
      alert('Usuário cadastrado com sucesso!');
      navigate('/')
    }).catch((error) => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível cadastrar')
      }

      setLoading(false)
    }) 


  };

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
            onChange={(e) =>  setName(e.target.value)}
          />
        </Label>

        <Label>
          <p>Email</p>
          <Input 
            placeholder='Exemplo: exemplo@exemplo.com.br' 
            type='email'
            onChange={(e) =>  setEmail(e.target.value)}
          />
        </Label>

        <Label>
          <p>Senha</p>          
          <Input 
            placeholder='No mínimo 6 caracteres' 
            type='password'  
            minLength="6"
            onChange={(e) =>  setPassword(e.target.value)}
          />

        </Label>

        <Button 
           title='Criar conta'
           loading={loading}
           onClick={handleSignUp} 
        />

        <div className="buttonText">
          
       
           <ButtonText to='/'  title='Já tenho conta' />
          
        </div>
      </Register>

    </Container>
  )
};
