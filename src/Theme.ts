import {blueGrey, grey, orange} from "@mui/material/colors";
import React, {useContext} from "react";

import {
    CssBaseline,
    TextField, Autocomplete, Paper, PaletteMode, createTheme, ThemeProvider, PaletteColorOptions, ThemeOptions
} from '@mui/material';

export const ColorModeContext = React.createContext({toggleColorMode: () => {}})
export const useColorModeContext = () => useContext(ColorModeContext);

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: grey,
                secondary: orange,
                // text:{
                //     main: "#568FA6"
                // },
                background: {
                    default: grey['200'],
                    paper: grey['400']
                },
                // text: {
                //     primary: light_mode[4],
                //     secondary: light_mode[3],
                // },
            }:
            {
                // palette values for dark mode
                primary: {
                    light: "#272C4A",
                    main: "#222845",
                    dark: "#1A2039"
                },
                secondary: {
                    light: "#F2CA50",
                    main: "#F2CA50",
                    dark: "#D99E30"
                },
                background: {
                    default: "#222845",
                    paper: "#1A2039",
                },
                text: {
                    primary: "#E6EEF8",
                    secondary: "#A1A5AB",
                },
            }),
    },
} as ThemeOptions);