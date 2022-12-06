const express = require('express')
const app = express ()
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello bumboclot')
})
app.set ('view engine,ejs')
    app.listen(port, () => {
        console.log(`Server started at ${port}`)
    })