import {AppBar, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {Brightness4, Brightness7, More, Search} from "@mui/icons-material";
import {useColorModeContext} from "../Theme";

function TopBar({height}: {height: number}) {
    const colorMode = useColorModeContext()
    const theme = useTheme()
    return (
        <AppBar position="fixed" elevation={5} sx={{height: height, justifyContent: 'center'}}>
            <Toolbar style={{width: '100%'}}>
                <div style={{flex: 1}}/>
                <Typography variant="h5" style={{color: theme.palette.text.primary, flex: 1, textAlign: 'center'}}>
                    Dewey Decimal Classification
                </Typography>
                <div style={{flex: 1, display: 'flex'}}>
                    <IconButton style={{marginLeft: 'auto'}} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/>}
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar