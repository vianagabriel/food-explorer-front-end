import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Dark_400};
  padding-inline: 2.2rem;
  opacity: 0;
  pointer-events: none;
  transition: all .3s;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `}
  
`;

export const Close = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.Colors.Dark_600};
  padding: 5.4rem 2.8rem 2.4rem 2.8rem;
  margin-bottom: 3.6rem;

  > p {
    font-size: 2.1rem;
  }
`;

export const Search = styled.div`
  height: 4.8rem;
  width: 100%;
  margin-top: -28rem;


  > p {
    margin-top: 3.6rem;
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.Colors.Light_300};
    border-bottom: 1px solid ${({ theme }) => theme.Colors.Light_700};

    >a{
     color: ${({ theme }) => theme.Colors.Light_300};
      
    }
  }
`;