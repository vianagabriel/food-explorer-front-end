import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme, isLight }) => isLight ? theme.Colors.Tomato_400 : theme.Colors.Tomato_100 };
  border: none;
  color: ${({ theme }) => theme.Colors.Light_100};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
`;