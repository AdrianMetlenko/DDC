import React, {useEffect, useState} from 'react';
import {AccordionDetails, AccordionSummary, Typography, CssBaseline, useTheme, Accordion} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';
import ddcJson from './ddc.json'
import Select from 'react-select'
import {grey} from "@mui/material/colors";

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

function createAccordion(code: ddcCode, expanded: string, setExpanded: any, matchDepth: number, theme: any) {

    if (code.code.slice(0, matchDepth).slice(-1) === '.') {
        matchDepth = matchDepth + 1
    }
    const match = code.code.slice(0, matchDepth)
    const expand = expanded.slice(0, matchDepth) === match
    const color = expand ? theme.palette.error.main : theme.palette.text.main


    if (code.children) {
        return <Accordion elevation={2} disabled={!code.enabled} expanded={expand}
                          onChange={() => setExpanded(code.code)} style={{background: colors(matchDepth)}}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography sx={{width: '10%', flexShrink: 0}}>{code.code}</Typography>
                <div>
                    <Typography style={{color: color}}>{code.title}</Typography>
                    <Typography variant='caption'>{code.notes}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {code.children.map(nestedCode => createAccordion(nestedCode, expanded, setExpanded, matchDepth + 1, theme))}
            </AccordionDetails>
        </Accordion>
    } else {
        return <Accordion elevation={2} disabled={!code.enabled} expanded={expanded === code.code}
                          onChange={() => setExpanded(code.code)} style={{background: colors(matchDepth)}}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography sx={{width: '10%', flexShrink: 0}}>{code.code}</Typography>
                <div>
                    <Typography style={{color: color}}>{code.title}</Typography>
                    <Typography variant='caption'>{code.notes}</Typography>
                </div>
            </AccordionSummary>
        </Accordion>
    }
}

function flatten(json: ddcCode, flatArray: option[]): option[] {
    if(json.enabled){
        flatArray.push({value: json.code, label: `${json.code}: ${json.title}`})
    }
    if (json.children) {
        json.children.forEach(child => flatten(child, flatArray))
    }
    return flatArray

}

interface option {
    value: string,
    label: string
}

function App() {
    const theme = useTheme()
    const [expanded, setExpanded] = useState<string>('210');
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
            <CssBaseline/>
            <div style={{textAlign: 'center', marginTop: 20}}>
                <Typography style={{marginBottom: 10}} variant="h4">Dewey Decimal Classification</Typography>
                <div style={{textAlign: 'left'}}>
                    <Select options={searchOptions} onChange={e => setExpanded(e!.value)} placeholder={'Search...'}/>
                </div>

            </div>
            <div style={{width: 1000, padding: 40}}>
                {ddc?.map(code => createAccordion(code, expanded, setExpanded, 1, theme))}
            </div>
        </div>
    );
}

export default App;
