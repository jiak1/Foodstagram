import { json, Request, Response } from 'express'
import { Query } from '../db'
import { validationResult } from 'express-validator'
import formatErrors from '../util/formatErrors'

const editProfileQuery = `
	UPDATE accounts
	SET
		name = ?
		username = ?
		bio = ?
		email = ?
		phone = ?
	WHERE
		account_id = '10'
`

async function EditProfile(req: Request, res: Response) {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json(formatErrors(errors))
	}

	const { fullName, username, bio, email, phone } = req.body

	try {
		await Query(editProfileQuery, [fullName, username, bio, email, phone])

		return res.status(201).json({
			message: 'Succesfully updated account!',
		})
	} catch {
		return res
			.status(400)
			.json({ message: 'An account with those details already exists' })
	}
}

export { EditProfile }
