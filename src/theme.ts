import { createTheme } from "@mui/material";


const theme = createTheme ({
    palette: {
        primary: {
            main: '#1976d2', //Azul padrão
        },
        secondary: {
            main: '#ff5722', //Laranja para destaque
        }
    },

    typography: {
        h1: {
            fontSize: '#2rem',
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1rem',
        },
    },
});



export default theme;