import { createEntity } from '../deps.ts'

export const UserDeposit = createEntity('UserDeposit', {
	block: { type: Number, index: true },
	txHash: String,
	from: String,
	value: { type: Number, index: true },
})