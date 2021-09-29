import React, {useContext} from "react";

import {
    PaletteMode, ThemeOptions
} from '@mui/material';
import {blueDark, grey} from "./theme/MUIColours";
import {blueGrey, lightBlue} from "@mui/material/colors";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
})
export const useColorModeContext = () => useContext(ColorModeContext);

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        ...(mode === 'light' && {
            primary: {
                main:blueGrey['100'],
                dark:blueGrey['200'],
                light:blueGrey['50']
            },
            secondary: blueDark,
            background: {
                default: blueGrey['100'],
                paper: blueGrey['50']
            },
        }),
        ...(mode === 'dark' && {
            primary: {
                main:blueDark['800'],
                dark:blueDark['900'],
                light:blueDark['700']
            },
            secondary: lightBlue,
            background: {
                default: blueDark[900],
                paper: blueDark[800],
            },
        }),
        divider: mode === 'dark' ? blueDark[700] : grey[200],
        ...(mode === 'light' && {
            text: {
                primary: grey[900],
                secondary: grey[700],
            },
        }),
        ...(mode === 'dark' && {
            text: {
                primary: blueGrey['200'],
                secondary: blueGrey['300'],
            },
        }),

    },
    shape: {
        borderRadius: 0,
    },
    spacing: 10,
} as ThemeOptions);