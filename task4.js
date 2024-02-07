function password(obj) {
    if (obj.name == undefined || obj.birthYear == undefined || obj.siteName == undefined) {
        return "invalid"
    }
    else if (obj.birthYear.toString().split('').length !== 4) {
        return "invalid"
    }
    result = obj.siteName + "#" + obj.name + "@" + obj.birthYear
    return result
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }))

console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }))

console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))

console.log(password({ name: "maisha", birthYear: 2002 }))

