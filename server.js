const express = require('express') 
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('<h1>Docker Test 🐳</h1>')
})

app.listen(5050, () => {
    console.log("Server is listening on port: ", 5050)
})