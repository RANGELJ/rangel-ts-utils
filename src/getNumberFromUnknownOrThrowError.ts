import stringParseAsNumber from "./stringParseAsNumber"

const getNumberFromUnknownOrThrowError = (original: unknown) => {
    if (typeof original === 'number' && !Number.isNaN(original)) {
        return original
    }
    if (typeof original === 'string') {
        return stringParseAsNumber(original.trim())
    }

    throw new Error(`(getNumberFromUnknownOrThrowError) Cannot convert [${original}] to number`)
}

export default getNumberFromUnknownOrThrowError
