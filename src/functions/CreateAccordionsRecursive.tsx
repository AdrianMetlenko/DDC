import {ddcCode} from "../types/types";
import {Accordion, AccordionDetails, AccordionSummary, alpha, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import React from "react";
import {cyan, deepOrange, indigo, lime, orange, purple} from "@mui/material/colors";
import {blueDark} from "../theme/MUIColours";

const colors = (depth: number) => {
    switch (depth) {
        case 1:
            return purple
        case 2:
            return cyan
        case 3:
            return orange
        case 4:
        case 5:
            return indigo
        case 6:
            return deepOrange
        default:
            return blueDark
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
    const selectedLineColor = colors(matchDepth)[theme.palette.mode === 'light' ? '500' : '400']
    const selectedTextColor = expand ? selectedLineColor : theme.palette.text.primary

    if (code.children) {
        return <Accordion
            disableGutters
            elevation={code.enabled ? 3 : 0}
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
                pl:1,
                borderLeft: expand ? 3 : 0,
                borderTop: expand ? 3 : 0,
                borderColor: selectedLineColor,
                '&:before': {
                    display: 'none',
                }
            }}
        >
            <AccordionSummary expandIcon={<ExpandMore sx={{ color: selectedTextColor }}/>} sx={{display: 'flex', ml: 4, borderRadius: 0}}>
                <Typography sx={{
                    color: selectedTextColor,
                    flex: 1,
                    pr: '5%',
                    fontWeight: 'bold'
                }}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography sx={{fontWeight: 'bold', color: selectedTextColor }}>{code.title}</Typography>
                    <Typography variant='caption'>{code.notes}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {code.children.map(nestedCode => createAccordion(nestedCode, expanded, setExpanded, matchDepth + 1, theme))}
            </AccordionDetails>
        </Accordion>
    } else {
        return <Accordion
            disableGutters
            elevation={code.enabled ? 3 : 0}
            disabled={!code.enabled}
            expanded={expanded === code.code}
            sx={{
                pl:1,
                borderLeft: expanded === code.code ? 3 : 0,
                borderTop: expanded === code.code ? 3 : 0,
                borderColor: selectedLineColor,
                '&:before': {
                    display: 'none',
                },
                color: selectedTextColor,
                fontWeight: 'bold',
            }}
            onChange={() => setExpanded(code.code)}
        >
            <AccordionSummary sx={{display: 'flex', ml: 4}}>
                <Typography sx={{
                    flex: 1,
                    pr: '5%',
                    fontWeight: 'bold',
                    color: selectedTextColor
                }}>{code.code}</Typography>
                <div style={{flex: 10}}>
                    <Typography sx={{fontWeight: 'bold', color: selectedTextColor }}>{code.title}</Typography>
                    <Typography variant='caption'>{code.notes}</Typography>
                </div>
            </AccordionSummary>
        </Accordion>
    }
}
