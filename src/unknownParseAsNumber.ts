import stringParseAsNumber from "./stringParseAsNumber"

const unknownParseAsNumber = (original: unknown) => {
    if (typeof original === 'number' && !Number.isNaN(original)) {
        return original
    }
    if (typeof original === 'string') {
        return stringParseAsNumber(original.trim())
    }

    throw new Error(`(unknownParseAsNumber) Cannot convert: [${original}] to number`)
}

export default unknownParseAsNumber
