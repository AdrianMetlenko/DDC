export interface ddcCode {
    code: string
    title: string
    notes?: string
    children?: ddcCode[]
    enabled: boolean
}

export interface searchOption {
    id: string,
    label: string,
    group: string
    disabled: boolean
}