import { Container, Close, Search } from './style';
import { X, MagnifyingGlass } from '@phosphor-icons/react';
import { Input } from '../Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    const [isAdmin, setIsAdmin] = useState(true);
    return (
        <Container isVisible={menuIsVisible}>
            <Close>
                <X size={25} onClick={() => setMenuIsVisible(false)} />
                <p>Menu</p>
            </Close>

            <Search>
                <Input
                    placeholder='Busque por pratos ou ingredientes'
                    icon={MagnifyingGlass}
                />
             { isAdmin ?
              <>
              <p>
                <Link to='/new'>Novo prato</Link>  
              </p>

              <p>Sair</p>
              </>
               :
               <p>Sair</p>
              }
            </Search>

            

        </Container>
    )
};
