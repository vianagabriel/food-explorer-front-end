import { Container, Close, Search } from './style';
import { X, MagnifyingGlass } from '@phosphor-icons/react';
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

  const { user, signOut } = useAuth();

  function handleSignOut(){
    signOut();
  }
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
             { user.isAdmin ?
              <>
              <p>
                <Link to='/new'>Novo prato</Link>  
              </p>

              <p onClick={handleSignOut}>Sair</p>
              </>
               :
               <p onClick={handleSignOut}>Sair</p>
              }
            </Search>

            

        </Container>
    )
};
