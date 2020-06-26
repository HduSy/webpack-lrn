const express = require('express')
const app = express()
const webpack = require('webpack')
// const config = require('../../webpack.base')
// const compiler = webpack(config)
// const middleware = require('webpack-dev-middleware') //middleware
// app.use(middleware(compiler))

app.get('/user/info', (req, res) => {
    res.json({
        name: 'TheSanTu',
        age: 25,
        university: 'Hdu',
        city: 'ShangHai',
        occupation: 'Student'
    })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})