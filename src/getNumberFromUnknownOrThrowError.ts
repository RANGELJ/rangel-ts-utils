const getNumberFromUnknownOrThrowError = (original: unknown) => {
    if (typeof original === 'number' && !Number.isNaN(original)) {
        return original
    }
    if (typeof original === 'string') {
        const formatedOriginal = original.trim()
        if (/^-?[0-9]+(.[0-9]+)?$/.test(formatedOriginal)) {
            return Number(formatedOriginal)
        }
    }

    throw new Error(`(getNumberFromUnknownOrThrowError) Cannot convert [${original}] to number`)
}

export default getNumberFromUnknownOrThrowError
