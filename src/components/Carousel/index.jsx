import { Container,CarouselContainer } from "./styles";
import { Card } from '../Card';
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";

export function Carousel() {
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
                <Card />
                <Card />
                <Card />
                <Card />
            </CarouselContainer>
            <CaretRight size={47} onClick={handleRightClick} className="noneMobile" />
        </Container>
    )
};
