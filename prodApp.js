// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const buscarProduto = require('./src/functions/buscarProdIbge')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

// app.set('view engine', 'ejs')
// app.set('views', './src/views')

// app.get('/',(req, res) => {
//     res.render('index')
// })

// app.post('/envia-produtos', async (req, res) => {
//     const{produtos} = req.body
//     const resultados = await buscarProduto(produtos)
//     // console.log(resultados)
//     res.render('resultados', {dado: resultados})
// })
// app.listen(3333)
