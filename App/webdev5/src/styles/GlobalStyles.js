import { createGlobalStyle } from 'styled-components';
import 'typeface-kanit'; // Import the font

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; // Default font
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  /* You might want common layout styles here if needed */
  /* Example: Define the background gradient globally or in a layout component */
  /* For now, we'll keep it in the page containers */

`;

export default GlobalStyles;