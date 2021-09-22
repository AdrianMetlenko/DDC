import React, {useEffect, useState} from 'react';
import {
    AccordionDetails,
    AccordionSummary,
    Typography,
    CssBaseline,
    useTheme,
    Accordion,
    TextField, Autocomplete, Paper
} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';
import ddcJson from './ddc.json'
import {grey} from "@mui/material/colors";
import {Helmet} from 'react-helmet'

interface ddcCode {
    code: string
    title: string
    notes?: string
    children?: ddcCode[]
    enabled: boolean
}

const colors = (depth: number) => {
    const color = grey
    switch (depth) {
        case 1:
            return color[50]
        case 2:
            return color[100]
        case 3:
            return color[300]
        case 4:
            return color[400]
        case 5:
            return color[500]
        case 6:
            return color[600]
    }
}

function createAccordion(code: ddcCode, expanded: string | null, setExpanded: any, matchDepth: number, theme: any) {

    if (code.code.slice(0, matchDepth).slice(-1) === '.') {
        matchDepth = matchDepth + 1
    }
    const match = code.code.slice(0, matchDepth)
    let expand = false
    if (expanded) {
        expand = expanded.slice(0, matchDepth) === match
    }
    const color = expand ? theme.palette.error.main : theme.palette.text.main


    if (code.children) {
        return <Accordion
            elevation={2}
            disabled={!code.enabled}
            expanded={expand}
            onChange={() => {
                if (expanded === code.code) {
                    if (code.code.length > 4) {
                        setExpanded(code.code.slice(0, -1))
                    } else {
                        let trimmed = code.code.replace(/[.0]/g, '')
                        let levelUp = trimmed.slice(0, -1)
                        while (levelUp.length < 3) {
                            levelUp = levelUp + '0'
                        }
                        setExpanded(levelUp)
                    }
                } else {
                    setExpanded(code.code)
                }
            }}
            style={{background: colors(matchDepth)}}>
            <AccordionSummary expandIcon={<ExpandMore/>} style={{display: 'flex'}}>
                <Typography style={{flex: 1, paddingRight: '5%', fontWeight: 'bold'}}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography style={{color: color, fontWeight: 'bold'}}>{code.title}</Typography>
                    <Typography variant='caption'>{code.notes}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {code.children.map(nestedCode => createAccordion(nestedCode, expanded, setExpanded, matchDepth + 1, theme))}
            </AccordionDetails>
        </Accordion>
    } else {
        return <Accordion
            elevation={2}
            disabled={!code.enabled}
            expanded={expanded === code.code}
            style={{background: colors(matchDepth)}}
        >
            <AccordionSummary style={{display: 'flex'}}>
                <Typography style={{flex: 1, paddingRight: '5%', fontWeight: 'bold'}}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography style={{color: color, fontWeight: 'bold'}}>{code.title}</Typography>
                    <Typography variant='caption'>{code.notes}</Typography>
                </div>
            </AccordionSummary>
        </Accordion>
    }
}

function flatten(json: ddcCode, flatArray: option[]): option[] {
    let notes = ''
    if (json.notes) {
        notes = ` (${json.notes})`
    }
    const group = json.code.slice(0, 2) + '0'
    flatArray.push({id: json.code, label: `${json.code}: ${json.title}` + notes, group: group, disabled: !json.enabled})
    if (json.children) {
        json.children.forEach(child => flatten(child, flatArray))
    }
    return flatArray

}

    interface option {
        id: string,
        label: string,
        group: string
        disabled: boolean
    }

    function App() {
        const theme = useTheme()
        const [expanded, setExpanded] = useState<string | null>('200');
        const [ddc, setDDC] = useState<ddcCode[]>([]);
        const [searchOptions, setSearchOptions] = useState<option[]>([]);

        useEffect(() => {
            setDDC(ddcJson)
            const flatJson = ddcJson.map(ddc => flatten(ddc, []))[2] //2 for Religion 200
            setSearchOptions(flatJson)
        }, []);

        return (
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
                    <Typography style={{marginBottom: 10}} variant="h4">Dewey Decimal Classification</Typography>
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
                        {/*<Select isClearable options={searchOptions} onChange={e => setExpanded(e!.value)}*/}
                        {/*        placeholder={'Search...'}/>*/}
                    </Paper>
                </div>
                <div style={{maxWidth: 900, padding: 20, width: '100%'}}>
                    {ddc?.map(code => createAccordion(code, expanded, setExpanded, 1, theme))}
                </div>
            </div>
        );
    }

    export default App;
