import {AppBar, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {Brightness4, Brightness7, More, Search} from "@mui/icons-material";
import {useColorModeContext} from "../App";

function TopBar() {
    const colorMode = useColorModeContext()
    const theme = useTheme()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    Dewey Decimal Classification
                </Typography>
                <IconButton size="large" aria-label="search" color="inherit">
                    <Search/>
                </IconButton>
                <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar