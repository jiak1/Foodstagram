import express from 'express'
import request  from 'supertest'

import Router from '../main'

const app = express()
app.use(express.json())
app.use('/', Router)

describe('The Login Route Handler', function () {
	test('Works with a valid verified account', async () => {
		const res = await request(app)
			.post('/login')
			.send({ email: 'test@uts.com', password: 'testPassword' })
			.set('Accept', 'application/json')
		expect(res.statusCode).toBe(200)
		expect(JSON.parse(res.text)).toHaveProperty('message')
		expect(JSON.parse(res.text)).toHaveProperty('accessToken')
		expect(JSON.parse(res.text).message).toBe(
			'Succesfully logged into account!'
		)
	})

	test('Fails with a valid verified account', async () => {
		const res = await request(app)
			.post('/login')
			.send({ email: 'testUnverified@uts.com', password: 'testPassword' })
			.set('Accept', 'application/json')
		expect(res.statusCode).toBe(401)
		expect(JSON.parse(res.text)).toHaveProperty('message')
		expect(JSON.parse(res.text).message).toBe('Invalid login credentials!')
	})

	test('Fails with a non existent account', async () => {
		const res = await request(app)
			.post('/login')
			.send({ email: 'ghostAccount@uts.com', password: 'ghostPassword' })
			.set('Accept', 'application/json')
		expect(res.statusCode).toBe(401)
		expect(JSON.parse(res.text)).toHaveProperty('message')
		expect(JSON.parse(res.text).message).toBe('Invalid login credentials!')
	})

	test('Fails with empty details', async () => {
		const res = await request(app)
			.post('/login')
			.send({})
			.set('Accept', 'application/json')
		expect(res.statusCode).toBe(400)
		expect(JSON.parse(res.text)).toHaveProperty('message')
		expect(JSON.parse(res.text).message).toBe(
			'Please enter more appropriate values for the following fields: email,'
		)
	})
})
