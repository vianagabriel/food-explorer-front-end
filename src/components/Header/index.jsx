import { Container, Logo, Search, MyOrder, MyOrderMobile} from "./styles";
import logoImg from '../../assets/logoImg.svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { MenuMobile } from '../MenuMobile';
import { Receipt, MagnifyingGlass, SignOut, List } from '@phosphor-icons/react'
import { useState } from "react";


export function Header(){
    const [count, setCount ] = useState(0)
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    return(
      <>
         <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        <Container>

         

            <List className="menu" size={25} onClick={() => setMenuIsVisible(true)}/>

            <Logo >
                <div className="logoUser">
                <img src={logoImg} alt="" />
                <p>food explorer</p>
                </div>
             

                {
                 isAdmin &&
                <div  className="admin">
                  <span>admin</span>
                </div>
                }
            </Logo>

            <Search>
                <Input 
                  placeholder='Busque por pratos ou ingredientes' 
                  icon={MagnifyingGlass}
                />
            </Search>

            <MyOrder>
              {isAdmin ? 
              <Button 
               
              title='Novo Prato '
            
            /> :
            <Button 
               
            title='Pedidos '
            count={`(${count})`}
            icon={Receipt}
          
          />

            }
                
            </MyOrder>

            {isAdmin ? 
             <div></div>
            :
            <MyOrderMobile>
              <Receipt size={25}/>
              <p>{count}</p>
            </MyOrderMobile>
          }
            
            
            <div className="signOut">

             <SignOut className="signOut" size={32}/>
            </div>
        </Container>
      </>
    )
};