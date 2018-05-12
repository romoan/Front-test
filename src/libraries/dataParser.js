const JSON_FILE_LOCATION = './src/datas.json'

const readTextFile = (file, callback) => {
    let content = ''
    let rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType("application/json")
    rawFile.open("GET", file, true)
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            content = callback(rawFile.responseText)
        }
    }
    rawFile.send(null)
    return content
}

const jsonParserCallback = (text) => {
    const parsedData = JSON.parse(text)
    console.log(parsedData)
    return parsedData
}

export const parsedData = Object.freeze(readTextFile(JSON_FILE_LOCATION, jsonParserCallback))