import {ddcCode} from "../types/types";
import {Accordion, AccordionDetails, AccordionSummary, alpha, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import React from "react";

export function createAccordion(code: ddcCode, expanded: string | null, setExpanded: any, matchDepth: number, theme: any) {

    if (code.code.slice(0, matchDepth).slice(-1) === '.') {
        matchDepth = matchDepth + 1
    }
    const match = code.code.slice(0, matchDepth)
    let expand = false
    if (expanded) {
        expand = expanded.slice(0, matchDepth) === match
    }
    const color = expand ? theme.palette.primary.main : theme.palette.text.primary

    if (code.children) {
        return <Accordion
            elevation={code.enabled ? 4 : 0}
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
                        if(levelUp === '000'){
                            setExpanded('200')
                        } else {
                            setExpanded(levelUp)
                        }

                    }
                } else {
                    setExpanded(code.code)
                }
            }}
            sx={{bgcolor: 'background.default'}}
        >
            <AccordionSummary expandIcon={<ExpandMore/>} sx={{display: 'flex', ml: 4}}>
                <Typography sx={{color: color, flex: 1, pr: '5%', fontWeight: 'bold'}}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography sx={{color: color, fontWeight: 'bold'}}>{code.title}</Typography>
                    <Typography variant='caption' sx={{color: 'text.secondary'}}>{code.notes}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {code.children.map(nestedCode => createAccordion(nestedCode, expanded, setExpanded, matchDepth + 1, theme))}
            </AccordionDetails>
        </Accordion>
    } else {
        return <Accordion
            elevation={code.enabled ? 4 : 0}
            disabled={!code.enabled}
            expanded={expanded === code.code}
            sx={{bgcolor: 'background.default'}}
        >
            <AccordionSummary sx={{display: 'flex', ml: 4}}>
                <Typography style={{flex: 1, paddingRight: '5%', fontWeight: 'bold'}}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography style={{color: color, fontWeight: 'bold'}}>{code.title}</Typography>
                    <Typography variant='caption' sx={{color: 'text.secondary'}}>{code.notes}</Typography>
                </div>
            </AccordionSummary>
        </Accordion>
    }
}
