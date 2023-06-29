import { Container,CarouselContainer } from "./styles";
import { Card } from '../Card';
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";



export function Carousel({ category }) {
  const [plates, setPlates] = useState([]);
   
    useEffect(() => {
        async function fetchPlates() {
          try {
            const response = await api.get('/plates?title=');
            setPlates(response.data);
            console.log(plates)
           
            
          } catch (error) {
            console.log(error);
          }
        }
        fetchPlates();
      }, []);
    const carousel = useRef(null)
    
    function handleLeftClick(event){
        event.preventDefault();    
        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }

    function handleRightClick(event){
        event.preventDefault();    
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    return (
        <Container>
            <CaretLeft size={47} onClick={handleLeftClick} className="noneMobile"/>
            <CarouselContainer ref={carousel}>
                
              {  
                plates.filter(plate => plate.category === category).map((plate, index )=> {
                    return(
                    <Card 
                        key={plate.id || index}
                        title={plate.title} 
                        description={plate.description} 
                        price={`R$ ${plate.price}`}
                        imageURL={`${api.defaults.baseURL}/files/${plate.image}`}
                        amount='01'
                        id={plate.id}
                   />
                    )           
                 })      
              }
                
            </CarouselContainer>
            <CaretRight size={47} onClick={handleRightClick} className="noneMobile" />
        </Container>
    )
};
