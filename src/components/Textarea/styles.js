import styled from 'styled-components';

export const Container = styled.textarea`
 width: 100%;
 height: 15rem;
 background: ${({ theme }) => theme.Colors.Dark_800};
 color: ${({ theme }) => theme.Colors.Light_500};
 border: none;
 resize: none;
 margin-bottom: .8rem;
 border-radius: 1rem;
 padding: 1.6rem;
 
 &::placeholder{
    color: ${({ theme }) => theme.Colors.Light_500}
 }
`;