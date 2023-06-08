import { Container, Logo } from "./styles";
import logoFooter from '../../assets/logoFooter.svg';

export function Footer(){

    return(
        <Container>
            <Logo>
               <img src={logoFooter} alt="" />
               <p>food explorer</p>
            </Logo>

            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )

};