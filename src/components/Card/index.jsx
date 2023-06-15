import { Container, Amount, AmountRequest } from "./styles";
import plateImg from '../../assets/plate.png';
import { Minus, Plus, HeartStraight, PencilSimple  } from '@phosphor-icons/react';
import { Button } from "../Button";
import { useState } from "react";

export function Card() {

  const [isAdmin, setIsAdmin] = useState(false)

    return (
        <Container>
            <div className="heart">
              {
                isAdmin ? <PencilSimple size={28}/>  :  <HeartStraight size={28}/>
              }
            
            </div>
            <img src={plateImg} alt="" />
            <h3>Salada Ravanello</h3>
            <span>Massa fresca com camarões e pesto. </span>
            <p>R$ 49,97</p>
            {
              isAdmin ? 
              
              <></>

              :

              <AmountRequest>
              <Amount>
                  <Minus />
                  <span>01</span>
                  <Plus />
              </Amount>
  
              <Button className='btn' title='Incluir'/>
  
            </AmountRequest>
            }
         
        </Container>
    )
};
