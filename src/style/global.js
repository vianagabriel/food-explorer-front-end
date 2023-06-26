import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background: ${({ theme }) => theme.Colors.Dark_400};
    color: ${({ theme }) => theme.Colors.Light_100};


    ::-webkit-scrollbar{
    width: 8px;

  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.Colors.Light_100};
    border-radius: 5px;    
  }
  }

  body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a{
    text-decoration: none;
    margin: 0;
  }

  li{
    list-style: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }
`;