import {AppBar, Breadcrumbs, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {Brightness4, Brightness7, NavigateNext} from "@mui/icons-material";
import {useColorModeContext} from "../Theme";

function TopBar({height, openCodes, setExpanded}: { height: number, setExpanded: any, openCodes: { [key: string]: string }[] }) {
    const colorMode = useColorModeContext()
    const theme = useTheme()
    return (
        <AppBar position="fixed" elevation={2} sx={{height: height, justifyContent: 'center', bgcolor: 'primary.dark'}}>
            <Toolbar sx={{width: '100%'}}>
                <Breadcrumbs sx={{flex: 4}} separator={<NavigateNext fontSize="medium" />}>
                    <Typography variant="h5">Dewey Decimal Classification</Typography>
                    {openCodes.map(item =>
                        <Typography
                            variant="h6"
                            sx={{ "&:hover": {color: 'primary.contrastText'}}}
                            onClick={() => setExpanded(item.code)}
                        >{item.title}</Typography>
                    )}
                </Breadcrumbs>
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