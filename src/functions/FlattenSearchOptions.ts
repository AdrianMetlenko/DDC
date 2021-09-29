import {ddcCode, searchOption} from "../types/types";

let groups: {[key: string]: string} = {}

export function flatten(json: ddcCode, flatArray: searchOption[]): searchOption[] {
    let notes = ''
    if (json.notes) {
        notes = ` (${json.notes})`
    }
    const group = json.code.slice(0, 2) + '0'

    if(flatArray.filter(item => item.id === json.code).length === 0 && json.code !== '200'){
        if(json.code.length === 3 && json.code[0] === '2' && json.code[2] === '0'){
            groups[json.code] = json.title
        }
        flatArray.push({id: json.code, label: `${json.code}: ${json.title}` + notes, group: `${group}: ${groups[group]}`, disabled: !json.enabled, title: json.title})
    }
    if (json.children) {
        json.children.forEach(child => flatten(child, flatArray))
    }
    return flatArray
}