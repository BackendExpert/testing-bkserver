const app = require('./index')

app.get('/',  (req, res) => {
    res.end("Welcome to CustomJS")
})

app.get('/about',  (req, res) => {
    res.end("Get Route")
})

app.post('/posttest',  (req, res) => {
    res.end("Post Route ")
})

app.listen(3000, () => {
    console.log("Server Run on Port Number 3000")
})
