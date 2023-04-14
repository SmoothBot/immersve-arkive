import { createEntity } from '../deps.ts'


export const LockedFunds = createEntity('LockedFunds', {
	block: { type: Number, index: true },
	txHash: String,
	from: String,
	lockedFundsId: { type: Number, index: true },
	value: Number
})

export const LockedFundsWithDeposit = createEntity('LockedFundsWithDeposit', {
	block: { type: Number, index: true },
	txHash: String,
	from: String,
	lockedFundsId: { type: Number, index: true },
	value: Number
})

export const LockedFundsRevoked = createEntity('LockedFundsRevoked', {
	block: { type: Number, index: true },
	txHash: String,
	to: String,
	lockedFundsId: { type: Number, index: true },
	value: Number
})

export const LockedFundsPaymentConfirmation = createEntity('LockedFundsPaymentConfirmation', {
	block: { type: Number, index: true },
	txHash: String,
	from: String,
	lockedFundsId: { type: Number, index: true },
	value: Number
})

export const LockedFundsPartialPaymentConfirmation = createEntity('LockedFundsPartialPaymentConfirmation', {
	block: { type: Number, index: true },
	txHash: String,
	from: String,
	lockedFundsId: { type: Number, index: true },
	value: Number
})
