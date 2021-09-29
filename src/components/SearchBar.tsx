import {
    AppBar,
    Autocomplete,
    TextField,
    Toolbar,
} from "@mui/material";
import React from "react";
import {searchOption} from "../types/types";

function SearchBar({height, searchOptions, setExpanded}: { height: number, searchOptions: searchOption[], setExpanded: any }) {
    return (
        <AppBar position="fixed" elevation={5} sx={{height: height, justifyContent: 'center', mt: 7, zIndex: 1090, bgcolor:'primary.light', display: 'flex'}}>
            <Toolbar sx={{width: '100%', justifyContent: 'center'}}>
                <Autocomplete
                    sx={{width: 1, maxWidth: 900, padding: 2}}
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
            </Toolbar>
        </AppBar>
    )
}

export default SearchBar