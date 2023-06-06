import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Dark_900};
  color: ${({ theme }) => theme.Colors.Light_500};
  border-radius: 8px;

  > input{
    height: 4.8rem;
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 1.4rem;
    color: ${({ theme }) => theme.Colors.Light_500};

    &::placeholder{
        color: ${({ theme }) => theme.Colors.Light_500};
    }

    &:hover{
        border: 1px solid ${({ theme }) => theme.Colors.Light_500};
        border-radius: 8px;
        transition: all .2s;
    }
  }

`;