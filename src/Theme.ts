import React, {useContext} from "react";

import {
    PaletteMode, ThemeOptions
} from '@mui/material';
import {blue, blueDark, grey} from "./theme/MUIColours";

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
                default: blueDark[800],
                paper: blueDark[900],
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
        grey,
    },
    shape: {
        borderRadius: 10,
    },
    spacing: 10,
} as ThemeOptions);