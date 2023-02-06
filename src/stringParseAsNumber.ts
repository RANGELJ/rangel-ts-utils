const stringParseAsNumber = (value: string) => {
    if (/^-?[0-9]+(.[0-9]+)?$/.test(value)) {
        return Number(value)
    }
    throw new Error(`(stringParseAsNumber) Cannot convert string: [${value}] to number`)
}

export default stringParseAsNumber
