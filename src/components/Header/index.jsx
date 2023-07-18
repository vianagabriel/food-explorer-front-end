import { Container, Logo, Search, MyOrder, MyOrderMobile } from "./styles";
import logoImg from '../../assets/logoImg.svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { MenuMobile } from '../MenuMobile';
import { Receipt, MagnifyingGlass, SignOut, List } from '@phosphor-icons/react'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";




export function Header({ handleSearch }) {
  const [count, setCount] = useState(0)
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut(){
    signOut();
  }

  function handleHome(){
    navigate('/')
  }
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>



        <List className="menu" size={25} onClick={() => setMenuIsVisible(true)} />

        <Logo onClick={handleHome}>
          <div className="logoUser">
            <img src={logoImg} alt="" />
            <p>food explorer</p>
          </div>


          {
            user.isAdmin ?
            <div className="admin">
              <span>admin</span>
            </div>
            :
            <></>
          }
        </Logo>

      
        
        <Link to='/favorites'  className="favorites">Meus favoritos</Link>

      
        <Search>
          <Input
            placeholder='Busque por pratos ou ingredientes'
            icon={MagnifyingGlass}
            onChange={handleSearch}
          />
        </Search>

        <MyOrder>
         
            {user.isAdmin ?

              <Button
                to='/new'
                className='btn'
                title='Novo Prato '
              />

              :
              <Button to='/orders'
                className='btn'
                title='Pedidos '
                count={`(${count})`}
                icon={Receipt}

              />

            }
         
        </MyOrder>

        {user.isAdmin ?
          <></>
          :
          <MyOrderMobile>
            <Receipt size={25} />
            <p>
              <Link to='orders'>
                {count}

              </Link>
            
            </p>
          </MyOrderMobile>
        }

        <div className="signOut">

          <SignOut 
            className="signOut" size={32} 
            onClick={handleSignOut}
          />
        </div>
      </Container>
    </>
  )
};