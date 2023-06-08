import { Container, Amount, AmountRequest } from "./styles";
import plateImg from '../../assets/plate.png';
import { Minus, Plus, HeartStraight  } from '@phosphor-icons/react';
import { Button } from "../Button";

export function Card() {
    return (
        <Container>
            <div className="heart">
              <HeartStraight size={28}/>
            </div>
            <img src={plateImg} alt="" />
            <h3>Salada Ravanello</h3>
            <span>Massa fresca com camarões e pesto. </span>
            <p>R$ 49,97</p>
          <AmountRequest>
            <Amount>
                <Minus />
                <span>01</span>
                <Plus />
            </Amount>

            <Button className='btn' title='Incluir'/>

          </AmountRequest>
        </Container>
    )
};
