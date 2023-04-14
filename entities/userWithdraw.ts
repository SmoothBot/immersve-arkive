import { createEntity } from '../deps.ts'

export const UserWithdraw = createEntity('UserWithdraw', {
	block: { type: Number, index: true },
	txHash: String,
	to: String,
	value: { type: Number, index: true },
})