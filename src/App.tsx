import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
    CssBaseline,
    TextField, Autocomplete, Paper, PaletteMode, createTheme, ThemeProvider
} from '@mui/material';
import ddcJson from './ddc.json'
import {amber, blue, deepOrange, grey} from "@mui/material/colors";
import {Helmet} from 'react-helmet'
import {ddcCode, searchOption} from "./types/types";
import {flatten} from "./functions/FlattenSearchOptions";
import {createAccordion} from "./functions/CreateAccordionsRecursive";
import TopBar from "./components/TopBar";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: blue,
                divider: blue[200],
                text: {
                    primary: blue[900],
                    secondary: blue[800],
                },
            }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});

const ColorModeContext = React.createContext({toggleColorMode: () => {}})
export const useColorModeContext = () => useContext(ColorModeContext);

function App() {
    const [mode, setMode] = useState<PaletteMode>('light');

    const colorMode = useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const [expanded, setExpanded] = useState<string | null>('200');
    const [ddc, setDDC] = useState<ddcCode[]>([]);
    const [searchOptions, setSearchOptions] = useState<searchOption[]>([]);

    useEffect(() => {
        setDDC(ddcJson)
        const flatJson = ddcJson.map(ddc => flatten(ddc, []))[2] //2 for Religion 200
        setSearchOptions(flatJson)
    }, []);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div style={{
                    background: theme.palette.background.default,
                    height: '100vh',
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Helmet>
                        <title>{"DDC Index"}</title>
                    </Helmet>
                    <CssBaseline/>
                    <TopBar/>
                    <div style={{
                        textAlign: 'center',
                        paddingLeft: 20,
                        paddingTop: 20,
                        paddingRight: 20,
                        width: '100%',
                        maxWidth: 900
                    }}>
                        <Paper style={{textAlign: 'left', marginBottom: 10, width: '100%', padding: 15}}>
                            <Autocomplete
                                options={searchOptions}
                                getOptionDisabled={(option) => option.disabled}
                                groupBy={(option) => option.group}
                                onChange={(event, newValue) => {
                                    if (newValue) {
                                        setExpanded(newValue.id)
                                    } else {
                                        setExpanded(newValue)
                                    }
                                }}
                                renderInput={(params) => <TextField {...params} variant='outlined' label="Search..."/>}
                            />
                        </Paper>
                    </div>
                    <div style={{maxWidth: 900, padding: 20, width: '100%'}}>
                        {ddc?.map(code => createAccordion(code, expanded, setExpanded, 1, theme))}
                    </div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
