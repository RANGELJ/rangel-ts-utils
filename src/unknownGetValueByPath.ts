import valueIsArray from 'ts-validators/valueIsArray'
import valueIsString from 'ts-validators/valueIsString'
import valueIsRecord from 'ts-validators/valueIsRecord'
import unknownParseAsNumber from './unknownParseAsNumber'

const unknownGetValueByPath = (
    value: unknown,
    path: (string | number)[],
): unknown => {
    if (path.length < 1) {
        return value
    }

    const [link, ...restOfPath] = path

    if (valueIsArray(value) || valueIsString(value)) {
        if (link === 'length') {
            return value.length
        }

        try {
            const index = unknownParseAsNumber(link)
            return unknownGetValueByPath(value[index], restOfPath)
        } catch {
            return undefined
        }
    }

    if (!valueIsRecord(value)) {
        return undefined
    }

    return unknownGetValueByPath(value[link], restOfPath)
}

export default unknownGetValueByPath
