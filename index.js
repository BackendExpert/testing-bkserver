const http = require('http');

const router = {
    GET: {}
}

const app = {
    get: (path, headlr) => {
        router.GET[path] = headlr;
    },

    listen: (port, callback) => {
        const server = http.createServer((req, res) => {
            const method = req.method
            const url = req.url

            const routerHeadler = router[method]?.[url]

            if(routerHeadler){
                routerHeadler(req, res)
            }
            else{
                res.statusCode = 404
                res.end("404 Not Found")
            }
        })

        server.listen(port, callback)
    }
}

module.exports = app