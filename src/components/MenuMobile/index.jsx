import { Container, Close, Search } from './style';
import { X, MagnifyingGlass } from '@phosphor-icons/react';
import { Input } from '../Input';
import { useState } from 'react';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    const [isAdmin, setIsAdmin] = useState(false);
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
              <p>Novo prato</p>
              <p>Sair</p>
              </>
               :
               <p>Sair</p>
              }
            </Search>

            

        </Container>
    )
};
