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
    return(
      <>
         <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        <Container>

         

            <List className="menu" size={25} onClick={() => setMenuIsVisible(true)}/>

            <Logo>
                <img src={logoImg} alt="" />
                <p>food explorer</p>
            </Logo>

            <Search>
                <Input 
                  placeholder='Busque por pratos ou ingredientes' 
                  icon={MagnifyingGlass}
                />
            </Search>

            <MyOrder>
                <Button 
                  title='Pedidos '
                  count={`(${count})`}
                  icon={Receipt}
                />
            </MyOrder>
            <MyOrderMobile>
              <Receipt size={25}/>
              <p>{count}</p>
            </MyOrderMobile>
            

            <SignOut className="signOut" size={32}/>
        </Container>
      </>
    )
};