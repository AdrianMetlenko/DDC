import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
    CssBaseline,
    TextField, Autocomplete, Paper, PaletteMode, createTheme, ThemeProvider, PaletteColorOptions, ThemeOptions
} from '@mui/material';
import ddcJson from './ddc.json'
import {amber, blue, deepOrange, grey, indigo} from "@mui/material/colors";
import {Helmet} from 'react-helmet'
import {ddcCode, searchOption} from "./types/types";
import {flatten} from "./functions/FlattenSearchOptions";
import {createAccordion} from "./functions/CreateAccordionsRecursive";
import TopBar from "./components/TopBar";

const dark_mode = [
    '#E6EEF8',
    '#A1A5AB',
    '#272C4A',
    '#222845',
    '#1A2039'
]

const light_mode = [
    '#FFFFFF',
    '#E6ECF0',
    '#657786',
    '#66757F',
    '#14171A'
]

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: light_mode[2]
                },
                divider: light_mode[4],
                background: {
                    default: light_mode[3],
                    paper: light_mode[1],
                },
                text: {
                    primary: light_mode[4],
                    secondary: light_mode[3],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: dark_mode[2]
                },
                divider: dark_mode[4],
                background: {
                    default: dark_mode[3],
                    paper: dark_mode[2],
                },
                text: {
                    primary: dark_mode[1],
                    secondary: dark_mode[2],
                },
            }),
    },
} as ThemeOptions);

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
                <TopBar/>
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
