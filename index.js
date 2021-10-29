const restify = require('restify')

let app = restify.createServer()
app.use(restify.plugins.queryParser())

app.get('/', (req, res, next) => {
	for (let index = 0; index < 1e8; index++) {
		res.json({
			pid: process.pid,
			echo: req.query
		})
	}
})

app.listen(4000, () => {
	console.log('App listening on port 4000')
})