import React, {useEffect, useMemo, useState} from 'react';
import {
    CssBaseline,
    PaletteMode, createTheme, ThemeProvider, Box
} from '@mui/material';
import ddcJson from './ddc.json'
import {Helmet} from 'react-helmet'
import {ddcCode, searchOption} from "./types/types";
import {flatten} from "./functions/FlattenSearchOptions";
import {createAccordion} from "./functions/CreateAccordionsRecursive";
import TopBar from "./components/TopBar";
import {ColorModeContext, getDesignTokens} from "./Theme";
import SearchBar from "./components/SearchBar";
import {createBreadcrumb} from "./functions/CreateBreadcrumb";

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
    const [openCodes, setOpenCodes] = useState<{ code: string, title: string }[]>([]);

    useEffect(() => {
        setDDC(ddcJson)
        const flatJson = ddcJson.map(ddc => flatten(ddc, []))[2] //2 for Religion 200
        setSearchOptions(flatJson)
    }, []);

    useEffect(() => {
        if (expanded) {
            setOpenCodes(createBreadcrumb(expanded, searchOptions).reverse())
        } else {
            setOpenCodes([])
        }
    }, [expanded, searchOptions]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <TopBar height={70} openCodes={openCodes} setExpanded={setExpanded}/>
                <SearchBar height={100} searchOptions={searchOptions} setExpanded={setExpanded}/>
                <Box sx={{
                    mt: 17,
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: "column",
                    bgcolor: 'background.default'
                }}>
                    <Helmet>
                        <title>{"DDC Index"}</title>
                    </Helmet>
                    <CssBaseline/>
                    <div style={{maxWidth: 900, padding: 20, width: '100%'}}>
                        {ddc?.map(code => createAccordion(code, expanded, setExpanded, 1, theme))}
                    </div>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
