const fetch = require('node-fetch')

async function buscarCovid(covid){
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${covid}`)
    const json = await response.json()

    return json
}
module.exports = buscarCovid