import {searchOption} from "../types/types";

    export function createBreadcrumb(code: string, searchOptions: searchOption[]): {code: string, title: string}[]{
    let crumbs: string[] = []

    let codeChars = code.replace(/0*$/, "").split('')
    while(codeChars.length > 0){
        // console.log('codeChars', codeChars)
        if(codeChars[codeChars.length-1] !== '.'){
            let pushCode = codeChars.join('')
            while (pushCode.length < 3) {
                pushCode = pushCode + '0'
            }
            crumbs.push(pushCode)
        }
        codeChars.pop()
    }

    // now codes to key:val
    let crumbKeys = crumbs.map(crumb => {
        if(crumb === '200'){
            return {code: '200', title: 'Religion'}
        } else {
            const option = searchOptions.filter(option => option.id === crumb)[0]
            const code: string = option.id
            const newCrumb: {code: string, title: string} = {code: code, title:option.title}
            return newCrumb
        }

    })
    return crumbKeys
}