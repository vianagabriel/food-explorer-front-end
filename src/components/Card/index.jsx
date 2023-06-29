import { Container, Amount, AmountRequest } from "./styles";
import { Minus, Plus, HeartStraight, PencilSimple } from '@phosphor-icons/react';
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export function Card({ title, description, price, imageURL, amount, id }) {

  const { user } = useAuth();
  const navigate = useNavigate();

  function handleDetails(id){
     navigate(`/details/${id}`)
  }

  return (
    <Container >
      <div className="heart">


        {
          user.isAdmin ?
             <Link to='/new'>
             
              <PencilSimple size={28} />
             </Link>
             :
            <a>
              <HeartStraight size={28} />
            </a>
        }


      </div>
      
      <img src={imageURL} alt="" onClick={() => handleDetails(id)}/>
      <h3>{title}</h3>
      <span>{description} </span>
      <p>{price}</p>
      {
        user.isAdmin ?

          <></>

          :

          <AmountRequest>
            <Amount>
              <Minus />
              <span>{amount}</span>
              <Plus />
            </Amount>

            <Button className='btn' title='Incluir' />

          </AmountRequest>
      }

    </Container>
  )
};
