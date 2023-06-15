import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme, isDark }) => isDark ? theme.Colors.Dark_800 : theme.Colors.Dark_900};
  color: ${({ theme }) => theme.Colors.Light_500};
  border-radius: 8px;

 

  > svg {
    margin-left: 3rem;
    font-size: ${({ iconLarge }) => iconLarge ? '35px' : '20px'};
    
  }

  > input {
    height: 4.8rem;
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 1.4rem;
    color: ${({ theme }) => theme.Colors.Light_500};

    &::placeholder {
      color: ${({ theme }) => theme.Colors.Light_500};
    }
  }
`;
