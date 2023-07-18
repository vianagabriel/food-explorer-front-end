import { Container, Amount, AmountRequest } from "./styles";
import { Minus, Plus, HeartStraight, PencilSimple } from '@phosphor-icons/react';
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";



export function Card({ title, description, price, imageURL,  id }) {

  const { user } = useAuth();
  const navigate = useNavigate();

  const [isIconVisible, setIsIconVisble] = useState(true);
  const [amount , setAmount] = useState(0);
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

  function handleIncreaseAmount(){
    setAmount(amount +1)
  }
 
  function handleDecreaseAmount(){
    if(amount > 0){
      setAmount(amount -1)
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

  async function handleAddToCart() {
    if (amount > 0) {
      const order = {
        status: 'Em andamento',
        user_id: userId,
        orders: [
          {
            quantity: amount,
            plate_id: id,
            title: title,
            image: imageURL,
            price: price,
          },
        ],
      };
      const orderString = JSON.stringify(order)
      localStorage.setItem(`plateOnCart_${userId}_${id}`, orderString)
      alert('Prato adicionado ao carrinho')
    }
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
              <Minus onClick={handleDecreaseAmount}/>
              <span>{amount < 10 && amount > 0 ? `0${amount}` : amount}</span>
              <Plus onClick={handleIncreaseAmount}/>
            </Amount>

            <Button className='btn' title='Incluir' onClick={handleAddToCart} />

          </AmountRequest>
      }

    </Container>
  )
};
