const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')
const buscarCovid = require('./src/functions/buscarStatusCovid')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/',(req, res) => {
    res.render('index')
})

app.post('/envia-cep', async (req, res) => {
    const{cep} = req.body
    const resultado = await buscaCep(cep)
    console.log(resultado)
    res.render('resultado', {dado: resultado})
    

})

app.get('/envia-covid', async (req, res) => {
    const{covid} = req.body
    const resultadoCovid= await buscarCovid(covid)
    console.log(resultadoCovid)
    res.render('resultadoCovid', {dado: resultadoCovid})

})


app.listen(3333)

