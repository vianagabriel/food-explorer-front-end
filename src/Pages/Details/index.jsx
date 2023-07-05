import { Header } from "../../components/Header";
import { Container, Image, Description, Main, TagsContainer, AmountAndRequest, Amount } from "./styles";
import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react';
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";


export function Details() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchPlates(){
      const response = await api.get(`/plates/${params.id}`)
      setData(response.data)
    }
    
    fetchPlates();
  }, [])

  return (
    <Container>
      <Header />

      <ButtonText to='/' title='Voltar' icon={CaretLeft} />
      { data &&
        <Main>
        <Image>
          <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />
        </Image>

        <Description>
          <h3>{data.title}</h3>

          <p>{data.description}</p>

          <TagsContainer>
            {
              data.ingredients && data.ingredients.map(ingredient => (
              <Tag 
                key={ingredient.id}
                title={ingredient.name} 
              />
              ))
            }
            
          </TagsContainer>

          <AmountAndRequest>
            {
              user.isAdmin ?

                <></>

                :

                <Amount>
                  <Minus />
                  <span>01</span>
                  <Plus />
                </Amount>

            }
            {user.isAdmin ?
              
                <Button
                  to={`/edit/${params.id}`}
                  className='btn admin'
                  title='Editar prato '

                />
              

              :
              <Button
                className='btn '
                title='Pedir '
                icon={Receipt}
                count={`R$ ${data.price}`}
              />}
          </AmountAndRequest>

        </Description>
      </Main>
      }

      <Footer />
    </Container>
  )
};








