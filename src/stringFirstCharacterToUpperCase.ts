const stringFirstCharacterToUpperCase = (value: string) => {
    const firstLetter = value.charAt(0).toUpperCase()

    return `${firstLetter}${value.slice(1)}`
}

export default stringFirstCharacterToUpperCase
