import {createTheme} from "@mui/material";
import {blueGrey} from "@mui/material/colors";

export const defaultTheme = createTheme({
    palette: {
        background:{
            default: blueGrey['A100']
        }
    },
    typography: {
        body1: {
            fontWeight: 500,
        },
    }
});