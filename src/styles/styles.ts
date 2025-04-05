import { createGlobalStyle } from "styled-components";

import MontserratAlternatesRegular from "../assets/fonts/MontserratAlternates-Regular.ttf";
import MontserratAlternatesBold from "../assets/fonts/MontserratAlternates-ExtraBold.ttf";
import MontserratAlternatesExtraBold from "../assets/fonts/MontserratAlternates-ExtraBold.ttf";

export default createGlobalStyle`
    @font-face { 
        font-family:"Montserrat Alternates";
        font-weight: normal;
        font-style: normal;
        font-display: swap;
        src: url(${MontserratAlternatesRegular}) format("truetype")
    },
    @font-face { 
        font-family:"Montserrat Alternates";
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        src: url(${MontserratAlternatesBold}) format("truetype")
    },
    @font-face { 
        font-family:"Montserrat Alternates";
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        src: url(${MontserratAlternatesExtraBold}) format("truetype")
    },
`;
