const fetch = require('node-fetch')

async function buscaCep(cep, numero){
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
    const json = await response.json()

    return json
}

module.exports = buscaCep