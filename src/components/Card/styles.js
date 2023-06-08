import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: 29rem;
  border-radius: 8px;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.Colors.Dark_300};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  .heart{
    margin-left: 13rem;
  }
  > h3{
    font-weight: 300;

  }

  > img{
    width: 8.8rem;
    margin-top: -3.5rem;
  }

  .btn{
    height: 3.2rem;
    border-radius: 5px;

  }

  > span {
    display: none;
  }

  > p{
    color: ${({ theme }) => theme.Colors.Cake_100};
  }


  @media (min-width: 1000px){
    width: 30rem;
    height: 46.2rem;
    gap: 1.8rem;

    .heart{
        margin-left: 20rem;
        
    }

    > img{
        width: 17.6rem;
    }

    > h3{
        font-size: 3rem;
    }


  > p{
     font-size: 3.2rem;
  }

  .btn{
    width: 9.2rem;
    height: 4.8rem;
  }

  > span{
    display: inline;
    text-align: center;
    color: ${({ theme }) => theme.Colors.Light_400};
  }
  }
`;


export const Amount = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.8rem;

`;


export const AmountRequest = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.2rem;
 
 @media (min-width: 1000px){
    flex-direction: row;
    gap: 1.6rem;
    align-items: center;
 }
`;