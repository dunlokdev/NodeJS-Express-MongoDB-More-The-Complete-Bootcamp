const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json())

const tours = JSON.parse(
	fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

// app.get('/', (req, res) => {
// 	res.status(200).json({
// 		message: 'Hello from server dunlok dev',
// 		data: 'Data in comming...',
// 	})
// })

app.get('/api/v1/tours', (req, res) => {
	res.status(200).json({
		status: 'success',
		results: tours.length,
		data: {
			tours,
		},
	})
})

app.get('/api/v1/tours', (req, res) => {
	res.status(200).json({
		status: 'success',
		results: tours.length,
		data: {
			tours,
		},
	})
})

app.get('/api/v1/tours/:id', (req, res) => {
	console.log(req.params)

	const id = req.params.id * 1

	const tour = tours.find((el) => el.id === id)

	if (!tour) {
		return res.status(400).json({
			status: 'fail',
			message: 'Invalid an id, try again',
		})
	}

	res.status(200).json({
		status: 'success',
		data: {
			tour,
		},
	})
})

app.patch('/api/v1/tours/:id', (req, res) => {
	const id = req.params.id * 1

	const tour = tours.find((el) => el.id === id)

	if (!tour) {
		return res.status(400).json({
			status: 'fail',
			message: 'Invalid an id, try again',
		})
	}

	res.status(200).json({
		status: 'success',
		data: {
			tour: '<Update tour here ... >',
		},
	})
})

const port = 3000
app.listen(port, () => {
	console.log(`App running on port ${port}`)
})
