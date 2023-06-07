import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding-block: 3.7rem;
  padding-inline: 18rem;
  background-color: ${({ theme }) => theme.Colors.Dark_600};
  display: flex;
  align-items: center;
  gap: 3.2rem;

  .menu{
    display: none;
  }


  @media(min-width: 350px) and (max-width: 800px) {
    gap: 1.6rem;
    justify-content: space-around;
    padding-inline: 0;

    > .menu{
      display: initial;
    }

    > .signOut{
      display: none;
    }
  }

`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > p {
    font-weight: 700;
    font-size: 2.4rem;
  }


  @media(min-width: 350px) and (max-width: 800px) {
     p {
      font-size: 2.1rem;
     }

    img{
      width: 2rem;
    } 

  }
`;

export const Search = styled.div`
  width: 50rem;

  @media(min-width: 350px) and (max-width: 800px) {
    display: none;

  }
  
`;

export const MyOrder = styled.div`
  width: 21.6rem;




  @media(min-width: 350px) and (max-width: 800px) {
    display: none;

  }
`;

export const MyOrderMobile = styled.div`
 display: flex;
 
 
  p {
    background-color: ${({ theme }) => theme.Colors.Tomato_100};
    height: 1.5rem;
    font-size: 1.2rem;
    border-radius: 9999px;
    margin-top: -.5rem;
    margin-left: -1.3rem;
    padding: .1rem .4rem;
  }

  @media(min-width:800px){
    display: none;
  }
  
`;