import {ddcCode} from "../types/types";
import {Accordion, AccordionDetails, AccordionSummary, alpha, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import React from "react";
import {cyan, deepOrange, indigo, lime, orange, purple} from "@mui/material/colors";

const colors = (depth: number) => {
    switch (depth) {
        case 1:
            return purple
        case 2:
            return cyan
        case 3:
            return orange
        case 4:
            return indigo
        default:
            return deepOrange
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
    const selectedLineColor = colors(matchDepth)[theme.palette.mode === 'light' ? 'A700' : '500']
    const selectedTextColor = expand ? selectedLineColor : theme.palette.text.primary

    if (code.children) {
        return <Accordion
            disableGutters
            elevation={code.enabled ? 0 : 0}
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
                        if (levelUp === '000') {
                            setExpanded('200')
                        } else {
                            setExpanded(levelUp)
                        }

                    }
                } else {
                    setExpanded(code.code)
                }
            }}
            sx={{
                bgcolor: 'background.paper',
                borderLeft: expand ? 3 : 0,
                borderColor: selectedLineColor,
                '&:before': {
                    display: 'none',
                },
                '&.Mui-disabled': {
                    color: 'text.disabled',
                    bgcolor: 'background.paper',
                },
                '&:hover': {
                    bgcolor: (!expand && code.enabled) ? 'background.default' : 'background.paper',
                },
            }}
        >
            <AccordionSummary expandIcon={<ExpandMore/>} sx={{display: 'flex', ml: 4, borderRadius: 0}}>
                <Typography sx={{color: selectedTextColor, flex: 1, pr: '5%', fontWeight: 'bold'}}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography sx={{color: selectedTextColor, fontWeight: 'bold'}}>{code.title}</Typography>
                    <Typography variant='caption' sx={{color: 'text.secondary'}}>{code.notes}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {code.children.map(nestedCode => createAccordion(nestedCode, expanded, setExpanded, matchDepth + 1, theme))}
            </AccordionDetails>
        </Accordion>
    } else {
        return <Accordion
            disableGutters
            elevation={0}
            disabled={!code.enabled}
            expanded={expanded === code.code}
            sx={{
                bgcolor: 'background.paper',
                borderLeft: expanded === code.code ? 3 : 0,
                borderColor: selectedLineColor,
                '&.Mui-disabled': {
                    color: 'text.disabled',
                    bgcolor: 'background.paper',
                },
                '&:hover': {
                    bgcolor: (!(expanded === code.code) && code.enabled) ? 'background.default' : 'background.paper',
                },
                '&:before': {
                    display: 'none',
                }
            }}
            onChange={() => setExpanded(code.code)}
        >
            <AccordionSummary sx={{display: 'flex', ml: 4, borderRadius: 0}}>
                <Typography style={{color: selectedTextColor, flex: 1, paddingRight: '5%', fontWeight: 'bold'}}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography style={{color: selectedTextColor, fontWeight: 'bold'}}>{code.title}</Typography>
                    <Typography variant='caption' sx={{color: 'text.secondary'}}>{code.notes}</Typography>
                </div>
            </AccordionSummary>
        </Accordion>
    }
}
