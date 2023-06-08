import styled from "styled-components";

export const Container = styled.div`
   width: 6.1rem;
   height: 3.2rem;
   border-radius: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }) => theme.Colors.Dark_1000};
   color: ${({ theme }) => theme.Colors.Light_100};
   font-size: 1.4rem;
`;
