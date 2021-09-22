import {ddcCode} from "../types/types";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import React from "react";
import {grey} from "@mui/material/colors";

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

export function createAccordion(code: ddcCode, expanded: string | null, setExpanded: any, matchDepth: number, theme: any) {

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
