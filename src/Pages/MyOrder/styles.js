import styled from "styled-components";

export const Container = styled.div`
  > h1{
    display: flex;
    justify-content: center;
    margin-top: 20rem;
    color: ${({ theme }) => theme.Colors.Tomato_100};
  }
`;

export const Main = styled.main`
 display: flex;
 align-items: baseline;


 @media(min-width: 350px) and (max-width: 700px){
   flex-direction: column;
 }

`;

export const MyOrder = styled.div`
   margin: 5.6rem 15.6rem;
   display: flex;
   flex-direction: column;
   gap: 3.3rem;

   @media(min-width: 350px) and (max-width: 700px){
     margin: .5rem;


    
 }

   >h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.Colors.Light_300};
   }

   .order{
     display: flex;
     align-items: center;
     gap: 2rem;

     > img{
        height: 10rem;
        width: 10rem;
     }

     .plateOrder{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .remove{
            font-size: 1.2rem;
            color: ${({ theme }) => theme.Colors.Tomato_400};
            cursor: pointer;
        }

     }



     .plateDetails{
        display: flex;
        gap: .5rem;
        align-items: end;

        .price{
            color: ${({ theme }) => theme.Colors.Light_400};
            font-size: 1.2rem ;
        }
     }
   }
`;

export const Payment = styled.div`
  width: 500px;
  height: 440px;
  border: 1px solid ${({ theme }) => theme.Colors.Light_100};
  border-radius: 1rem;

  @media(min-width: 350px) and (max-width: 700px){
   width: 340px;
   height: 440px;
   margin-inline: 1rem;
   margin-top: 3rem;

   .numberCard{
      width: 100%;
   }

  .creditCard{

     .validAndCvc{
       gap: 2rem;
     }
  }
 }

  > main{
    display: flex;
    justify-content: center;
    margin-top: 4.7rem;
  }

  > header{
     display: flex;
     justify-content: space-between;
     height: 81px;

     > button{
        width: 250px;
        border: none;
        background-color: transparent;
        color:${({ theme }) => theme.Colors.Light_100};
        border: 1px solid ${({ theme }) => theme.Colors.Light_100} ;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
     }

     .select{
      background-color: ${({ theme }) => theme.Colors.Dark_800} ;
     }
  }

   .pix {
    display: flex;
    justify-content: center;
    margin-top: 47px;
    color: ${({ theme, pix }) =>  pix ? 'blue' : 'red'};
  }

  .creditCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.7rem;
    width: 100%;
    padding: 59px 91px;

    @media(min-width: 350px) and (max-width: 700px){
      padding: 40px 20px;
    }


    .numberCard{
      display: flex;
      flex-direction: column;
      gap: .8rem;
      width: 100%;


      > input{
         background-color: transparent;
         border: 1px solid ${({ theme }) => theme.Colors.Light_100};
         color: ${({ theme }) => theme.Colors.Light_100};
         padding: 12px 14px;
         border-radius: .8rem;
      }

    }

    .validAndCvc{
      display: flex;
      flex-direction: row;
    
      .valid{
         > input{
         background-color: transparent;
         border: 1px solid ${({ theme }) => theme.Colors.Light_100};
         color: ${({ theme }) => theme.Colors.Light_100};
         padding: 12px 14px;
         border-radius: .8rem;
         width: 140px;
         margin-top: 1rem ;
         }
      }

      .cvc{
         > input{
         background-color: transparent;
         border: 1px solid ${({ theme }) => theme.Colors.Light_100};
         color: ${({ theme }) => theme.Colors.Light_100};
         padding: 12px 14px;
         border-radius: .8rem;
         width: 140px;
         margin-top: 1rem ;

         }
      }
    }
  }
`;

