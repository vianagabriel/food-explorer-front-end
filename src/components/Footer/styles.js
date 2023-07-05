import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.Colors.Dark_600 };
  position: relative;
  bottom: -3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;


  > span{
    color: ${({ theme }) => theme.Colors.Light_200};
  }



  @media (min-width: 350px) and (max-width: 800px){
    span{
        font-size: 1.2rem;
    }
  }
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  color:  ${({ theme }) => theme.Colors.Light_700} ;
  font-weight: 700;
  font-size: 2.4rem;

  > img{
    width: 3rem;
    
  }


  @media (min-width: 350px) and (max-width: 800px){
    font-size: 1.5rem ;


    img{
        width: 2rem;
    }
  }

`;