import styled from "styled-components";

export const Main = styled.main`
  margin: 1.5rem 3.2rem;

  > h3{
    font-size: 2.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.Colors.Light_300};
    margin-top: 2.4rem ;
  }


  


  @media(min-width: 1000px){
    margin: 4rem 18.3rem;

    h3{
        font-size: 3.2rem;
    }
  }
`;


export const Form = styled.form`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;


  .primaryInputs, .secondaryInputs, .description{
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

  .imgPlate, .name, .category{
    display: flex;
    flex-direction: column;
    gap: 1.6rem;


  .select{
    background-color: ${({ theme }) => theme.Colors.Dark_800};
    height: 4.8rem;
    border-radius: 8px;

    > select{
      width: 95%;
      height: 100%;
      background-color: transparent;
      border: none;
      padding: 1rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.Colors.Light_500};
      outline: none;
    }
  }
  .input {
    
    > input[type='file']{
        display: initial;
        position: absolute;
        bottom: 41rem;
        
    }
  }
 }
}


.secondaryInputs{
  

  .ingredients, .price{
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  .containerIngredients{
    background-color: ${({ theme }) => theme.Colors.Dark_800};
    height: 4.8rem;
    border-radius: 8px;
    display: flex;
    gap: 2.5rem ;
    align-items: center;
    padding-left: 1rem;
  }
}




@media(min-width: 1000px){
   .primaryInputs{
    flex-direction: row;
    gap: 3.2rem;

    .name{
      width: 46rem ;
    }

    .category{
      width: 36rem ;
    }
   }

   .secondaryInputs{
     display: flex;
     flex-direction: row;


     .ingredients{
      width: 83rem ;
     }
   }

}

`;