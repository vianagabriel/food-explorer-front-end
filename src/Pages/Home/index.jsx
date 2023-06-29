import { Container, BannerContainer, TextsBanner } from "./styles";
import { Header } from '../../components/Header';
import bannerImg from '../../assets/bannerImg.png' 
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";

export function Home(){
  return(
    <Container>
       <Header />

     <BannerContainer>
        <img src={bannerImg} alt="" />

        <TextsBanner>
           <h2>Sabores inigualáveis</h2>
           <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </TextsBanner>   
     </BannerContainer>
 
     <Section title='Refeições'>
        <Carousel category='refeições'/>
     </Section>

     <Section title='Sobremesas'>
        <Carousel category='sobremesas'/>
     </Section>

     <Section title='Bebidas'>
        <Carousel category='bebidas'/>
     </Section>

     <Footer/>
    </Container>
  )
};