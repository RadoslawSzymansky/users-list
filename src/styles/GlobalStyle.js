import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: 'Lato', serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, main {
    overflow-x: hidden;
    font-family: 'Lato', serif;
  }

  a {
    transition: .5s;
    cursor: pointer;
    text-decoration: none;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 98%;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
  }

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  li {
    margin-left: 20px;
  }

  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }

  figcaption {
    font-style: italic;
    font-size: 0.75rem;
    margin-top: 10px;
  }

  p {
    line-height: 1.6;
    color: #282A46;
  }

  li {
    line-height: 1.6;
  }

  strong {
    font-size: inherit;
    font-weight: bold;
  }

  b {
    font-size: inherit;
    font-weight: bold;
  }
`;

export default GlobalStyle;
