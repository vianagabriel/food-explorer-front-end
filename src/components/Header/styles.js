import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding-block: 2.7rem;
  padding-inline: 15rem;
  background-color: ${({ theme }) => theme.Colors.Dark_600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  .menu{
    display: none;
  }

  > .favorites{
    color: ${({ theme }) => theme.Colors.Light_100};
    font-size: 1.4rem;
    margin: 0px;
    margin-left:0;
    margin-top: 0;
    width: 10rem;
  
  }

  @media(min-width: 350px) and (max-width: 800px) {
    gap: 1.6rem;
    justify-content: space-around;
    padding-inline: 0;
    
    .favorites{
      display: none;
    }
    
    > .menu{
      display: initial;
    }

    > .signOut{
      display: none;
    }
  }

 .signOut{
  cursor: pointer;
 }
`;


export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  

  cursor: pointer;
  
  .logoUser{
    display: flex;
    align-items: center;
    gap: 1rem;

    > p {
    font-weight: 700;
    font-size: 2.4rem;
  
}
  }
  

  .admin{
    margin-top: -.9rem;
  }

  .admin span{
    color: ${({ theme }) => theme.Colors.Cake_100};
    font-size: 1.5rem;
    
  }

  @media(min-width: 350px) and (max-width: 800px) {
    flex-direction: row;
    gap: 8px;
    align-items: center;

  .logoUser{
    display: flex;
    gap: 1rem;
  }
  

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
  height: 4.8rem;
  
  .btn{
    margin: 0;
  }

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