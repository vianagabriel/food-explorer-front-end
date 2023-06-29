import { Container, BannerContainer, TextsBanner } from "./styles";
import { Header } from '../../components/Header';
import bannerImg from '../../assets/bannerImg.png' 
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [plates, setPlates] = useState([]);
  const [search, setSearch] = useState('');


  function handleSearch(e){
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function fetchPlates() {
      try {
        const response = await api.get(`/plates?title=${search}`);
        setPlates(response.data);           
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlates('refeições');
    fetchPlates('sobremesas');
    fetchPlates('bebidas');
  }, [search]);

  return (
    <Container>
      <Header handleSearch={handleSearch}/>

      <BannerContainer>
        <img src={bannerImg} alt="" />

        <TextsBanner>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </TextsBanner>   
      </BannerContainer>

      <Section title='Refeições'>
        <Carousel category='refeições' plates={plates} />
      </Section>

      <Section title='Sobremesas'>
        <Carousel category='sobremesas' plates={plates} />
      </Section>

      <Section title='Bebidas'>
        <Carousel category='bebidas' plates={plates} />
      </Section>

      <Footer/>
    </Container>
  )
};
