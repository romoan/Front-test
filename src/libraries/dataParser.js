export const JSON_FILE_LOCATION = './src/datas.json'

export const readTextFile = (file, callback) => {
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