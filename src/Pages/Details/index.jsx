import { Header } from "../../components/Header";
import { Container, Image, Description, Main, TagsContainer, AmountAndRequest, Amount } from "./styles";
import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react';
import plateImg from '../../assets/plate.png';
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { ButtonText } from "../../components/ButtonText";




export function Details() {
  const [isAdmin, setIsAdmin] = useState(true)
  return (
    <Container>
      <Header />

      <ButtonText to='/' title='Voltar' icon={CaretLeft} />
      <Main>
        <Image>
          <img src={plateImg} alt="" />
        </Image>

        <Description>
          <h3>Salada Ravanello</h3>

          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

          <TagsContainer>
            <Tag title='alface' />
            <Tag title='cebola' />
            <Tag title='pão naan' />
            <Tag title='pepino' />
            <Tag title='rabanete' />
            <Tag title='tomate' />
          </TagsContainer>

          <AmountAndRequest>
            {
              isAdmin ?

                <></>

                :

                <Amount>
                  <Minus />
                  <span>01</span>
                  <Plus />
                </Amount>

            }
            {isAdmin ?
              
                <Button
                  to='/new'
                  className='btn admin'
                  title='Editar prato '

                />
              

              :
              <Button
                className='btn '
                title='Pedir '
                icon={Receipt}
                count={`R$ 25,00`}
              />}
          </AmountAndRequest>

        </Description>
      </Main>

      <Footer />
    </Container>
  )
};








