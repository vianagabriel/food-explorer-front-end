import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.Colors.Light_300};


  > a{
    display: flex;
    align-items: center;
    font-family: 3.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.Colors.Light_300};
    margin-left: 5.4rem;
    margin-top: 3.6rem ;
  }


  @media (min-width: 1100px){
    a{
      margin-left: 20rem;
      margin-top: 6rem;
    }
  }

`;

export const Main = styled.div`
  padding: 2rem  5.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media(min-width: 1100px){
    flex-direction: row;
    gap: 4.7rem;
    align-items: center;
    justify-content: center;
    
  }

`;

export const Image = styled.div`
 height: 25rem;
 width: 25rem;
 margin: 0 auto;

 

 @media(min-width: 1100px){
    margin: 0;
    width: 39rem;
    height: 45rem;

    > img{
      width: 39rem;
    }
    
  }


`;

export const Description = styled.div`

 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 2.4rem;
 
  > h3, p{
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }

 > h3{
    font-weight: 500;
    font-size: 2.5rem;
 } 

 > p{
    font-weight: 300;
    font-size: 1.6rem;
    width: 28.5rem;
    margin-left: -9px;
 }

 @media (min-width: 1100px){
  align-items: flex-start;
  
  
  h3{
    font-size: 4rem;
    margin-left: -10px;
    
  }

  p{
    font-size: 2.4rem;
    width: 68rem;
    text-align: justify;
  
  }
 }
`;



export const TagsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1100px){
   gap: 1.2rem;
 }

`;

export const AmountAndRequest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2.4rem ;
  margin-bottom: 5rem;

  .btn{
    width: 18.8rem;
    height: 3.9rem;
    border-radius: 4px;
    margin: 0;
  
  }

  
`;

export const Amount = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 2.6rem;
`;