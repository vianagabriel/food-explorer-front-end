import { Container, Logo, Search, MyOrder, MyOrderMobile } from "./styles";
import logoImg from '../../assets/logoImg.svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { MenuMobile } from '../MenuMobile';
import { Receipt, MagnifyingGlass, SignOut, List } from '@phosphor-icons/react'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";




export function Header({ handleSearch }) {
  const [count, setCount] = useState(0)
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const { user, signOut } = useAuth();

  function handleSignOut(){
    signOut();
  }
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>



        <List className="menu" size={25} onClick={() => setMenuIsVisible(true)} />

        <Logo >
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
              <Button
                className='btn'
                title='Pedidos '
                count={`(${count})`}
                icon={Receipt}

              />

            }
         
        </MyOrder>

        {user.isAdmin ?
          <div></div>
          :
          <MyOrderMobile>
            <Receipt size={25} />
            <p>{count}</p>
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