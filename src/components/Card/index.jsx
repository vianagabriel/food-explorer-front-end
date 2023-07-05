import { Container, Amount, AmountRequest } from "./styles";
import { Minus, Plus, HeartStraight, PencilSimple } from '@phosphor-icons/react';
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";


export function Card({ title, description, price, imageURL, amount, id }) {

  const { user } = useAuth();
  const navigate = useNavigate();

  const [isIconVisible, setIsIconVisble] = useState(true);
  const userId = user ? user.id : null;

  function handleDetails(id){
     navigate(`/details/${id}`)
  }

  function handleIconClick() {
    setIsIconVisble(!isIconVisible);
    if (isIconVisible) {
      handleFavoriteClick();
    }else{
      handleRemoveFavorite()
    }
  }


  function handleFavoriteClick() {
    const favoritePlate = {
      id,
      title,
      description,
      price,
      imageURL,
      userId
    };
  
    const convertPlate = JSON.stringify(favoritePlate);
    localStorage.setItem(`favoritePlate_${userId}_${id}`, convertPlate);
  }
  
  function handleRemoveFavorite(){

    localStorage.removeItem(`favoritePlate_${userId}_${id}`);

  }

  useEffect(() => {
    // Verifica se o prato está nos favoritos ao carregar a página
    const favoritePlate = localStorage.getItem(`favoritePlate_${userId}_${id}`);
    setIsIconVisble(favoritePlate == null);
  }, [userId, id]);

  return (
    <Container >
      <div className="heart">


        {
          user.isAdmin ?
             <Link to={`/edit/${id}`}>
             
             
              <PencilSimple size={28} />
             </Link>
             :
            <a onClick={handleIconClick}>
              {isIconVisible ? <HeartStraight size={28}/> : <HeartStraight size={28} weight="fill"/>}
              
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
