

import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2.4rem;


  > h2{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.Colors.Light_300};
    margin-bottom: 2.4rem;
    
  }


  @media (min-width: 1000px){
    margin-left: 17rem;
    margin-top: -10rem;


    > h2{
      font-size: 3.2rem;
    }
  }
`;


