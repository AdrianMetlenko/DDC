import React, {useContext} from "react";

import {
    PaletteMode, ThemeOptions
} from '@mui/material';
import {blue, blueDark, grey} from "./theme/MUIColours";
import {blueGrey} from "@mui/material/colors";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
})
export const useColorModeContext = () => useContext(ColorModeContext);

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        primary: {
            ...blue,
            ...(mode === 'dark' && {
                main: blue[400],
            }),
        },
        divider: mode === 'dark' ? blueDark[700] : grey[200],
        primaryDark: blueDark,
        mode,
        ...(mode === 'dark' && {
            background: {
                default: blueDark[900],
                paper: blueDark[800],
            },
        }),
        ...(mode === 'light' && {
            text: {
                primary: grey[900],
                secondary: grey[700],
            },
        }),
        ...(mode === 'dark' && {
            text: {
                primary: '#fff',
                secondary: grey[500],
            },
        }),
        ...(mode === 'light' && {
            background: {
                default: blueGrey['50'],
                paper: '#FFFFFF'
            },
        }),
        grey,
    },
    shape: {
        borderRadius: 0,
    },
    spacing: 10,
} as ThemeOptions);