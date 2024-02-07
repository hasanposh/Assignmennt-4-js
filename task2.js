function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }
    const checkArray = ["a", "A", "y", "Y", "i", "I", "e", "E", "o", "O", "u", "U", "w", "W"]
    if (checkArray.includes(name[name.length - 1])) {
        return "GOOD NAME"
    }
    else {
        return "BAD NAME"
    }
}



console.log(checkName("Salman"))

console.log(checkName("RAFEE"))

console.log(checkName("Jhankar"))

console.log(checkName(199))

console.log(checkName(["Rashed"]))
