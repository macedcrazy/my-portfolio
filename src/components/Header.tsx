import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Meu Portfolio
                </Typography>
                <Button color="inherit" component={Link} to='/'>
                    Inicio
                </Button>
                <Button color="inherit" component={Link} to='/skills'>
                    Habilidades
                </Button>
                <Button color="inherit" component={Link} to='/contact'>
                    Contato
                </Button>
            </Toolbar>
        </AppBar>

    )
}