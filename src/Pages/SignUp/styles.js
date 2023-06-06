import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  

 .buttonText{
  margin: 3.3rem auto;
  
 }


 @media(min-width: 900px){
   flex-direction: row;
   justify-content: space-around;
 }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.74rem;
  margin-bottom: 5rem;

  h3{
    font-size: 3.7rem;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom:  3.2rem;

  > p{
    color: ${({ theme }) => theme.Colors.Light_400};
  }
`;

export const Register = styled.div`
  width: 50rem;
  padding: 6.4rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.Colors.Dark_700};
  display: flex;
  flex-direction: column;

  > h2{
    margin: 0 auto;
    margin-bottom: 3.2rem;
  }

  @media(min-width: 350px) and (max-width: 900px){
    background-color: transparent;
    padding-inline: 3.5rem;

    h2{
      display: none;
    }
    
  }
`;