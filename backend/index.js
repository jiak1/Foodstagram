require('dotenv').config()
const { response } = require('express')
const express = require('express')

let PORT = process.env.PORT

const app = express()
app.use(express.json())

app.listen(PORT, () => {
	console.log(`Server Started: Port ${PORT}`)
})

app.get('/', async (req, res) => {
	try {
		res.render('index', { title: 'Its working!' })
		return res.sendStatus(200)
	} catch (ex) {
		return res.sendStatus(500)
	}
})

app.get('/api/test', async (req, res) => {
	try {
		return res.sendStatus(200)
	} catch (ex) {
		return res.sendStatus(500)
	}
})
