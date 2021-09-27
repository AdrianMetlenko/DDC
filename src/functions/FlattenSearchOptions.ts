import {ddcCode, searchOption} from "../types/types";

export function flatten(json: ddcCode, flatArray: searchOption[]): searchOption[] {
    let notes = ''
    if (json.notes) {
        notes = ` (${json.notes})`
    }
    const group = json.code.slice(0, 2) + '0'
    if(flatArray.filter(item => item.id == json.code).length === 0){
        flatArray.push({id: json.code, label: `${json.code}: ${json.title}` + notes, group: group, disabled: !json.enabled})

    }
    if (json.children) {
        json.children.forEach(child => flatten(child, flatArray))
    }
    return flatArray
}