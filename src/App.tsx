import React, {useEffect, useMemo, useState} from 'react';
import {
    CssBaseline,
    TextField, Autocomplete, Paper, PaletteMode, createTheme, ThemeProvider, Box
} from '@mui/material';
import ddcJson from './ddc.json'
import {Helmet} from 'react-helmet'
import {ddcCode, searchOption} from "./types/types";
import {flatten} from "./functions/FlattenSearchOptions";
import {createAccordion} from "./functions/CreateAccordionsRecursive";
import TopBar from "./components/TopBar";
import {ColorModeContext, getDesignTokens} from "./Theme";

function App() {
    const [mode, setMode] = useState<PaletteMode>('light');
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

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
                <TopBar height={70}/>
                <Box sx={{
                    mt: 7,
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: "column",
                    bgcolor: 'background.paper'
                }}>
                    <Helmet>
                        <title>{"DDC Index"}</title>
                    </Helmet>
                    <CssBaseline/>

                    <Box sx={{
                        textAlign: 'center',
                        paddingLeft: 2,
                        paddingTop: 2,
                        paddingRight: 2,
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
                    </Box>
                    <div style={{maxWidth: 900, padding: 20, width: '100%'}}>
                        {ddc?.map(code => createAccordion(code, expanded, setExpanded, 1, theme))}
                    </div>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
