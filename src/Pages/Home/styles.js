import styled from "styled-components";

export const Container = styled.div`
  
`;


export const BannerContainer = styled.div`
  background: rgb(9,30,38);
  background: linear-gradient(90deg, rgba(9,30,38,1) 27%, rgba(0,19,28,1) 100%);
  margin: 4.4rem  1.5rem;
  display: flex;
  align-items: center;

  > img{
    width: 16.1rem;

    height: 18rem;
    margin-top: -5rem;
    margin-left: -1rem;
  }
  
  @media (min-width:800px){
    width: 1100px;
    height: 26rem;
    margin:  16rem auto;



  >img{
    height:40rem;
    width: 63.2rem;
    margin-top: -14.6rem;
    margin-left: -8rem;
  } 
  }
`;


export const TextsBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.Colors.Light_300};

  h2{
    font-size: 1.8rem;
  }

  p{ 
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  @media (min-width: 800px){

  > h2{
    font-size: 4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  > p{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
  }
  }

`;