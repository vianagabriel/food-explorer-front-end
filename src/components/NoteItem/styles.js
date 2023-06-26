import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 12rem;
  height: 3.5rem;
  background-color: ${({ theme, isNew }) => isNew ? theme.Colors.Light_600 : 'transparent' };
  color: ${({ theme , isNew }) => isNew ? theme.Colors.Light_100 : theme.Colors.Light_500};
  border: ${({ theme, isNew }) => isNew ? 'none' : `1px dotted ${theme.Colors.Light_500}`};
  border-radius: .8rem;
  

  > button {
    border: none;
    background-color: transparent;

    > svg {
        color : ${({ theme, isNew }) => isNew ? theme.Colors.Light_100 : theme.Colors.Light_500};
        margin-right: 1rem;
        margin-top: .3rem;
    }
  }

 > input{
    height: 3.2rem;
    width: 100%;
    padding-left: 1.2rem;
    color: ${({ theme }) => theme.Colors.Light_100};
    background: transparent;
    border: none;

    &::placeholder{
        color: ${({ theme }) => theme.Colors.Light_500};
    }
 }
  

`;