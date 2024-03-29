import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link as NavLink } from "react-router-dom";

const LogoLink = styled(NavLink)({
    color: 'inherit', 
    extDecoration: 'none',
    '&:hover': {
        color: 'inherit'
    }
});

const AppToolbar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    <LogoLink to="/">CompStore</LogoLink>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;