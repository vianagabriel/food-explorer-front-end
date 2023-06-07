import { Container, Close, Search } from './style';
import { X, MagnifyingGlass } from '@phosphor-icons/react';
import { Input } from '../Input';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
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

                <p>Sair</p>
            </Search>

            

        </Container>
    )
};
