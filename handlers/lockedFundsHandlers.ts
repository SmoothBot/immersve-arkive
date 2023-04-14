import { EventHandlerFor, formatUnits } from '../deps.ts'
import { ImmersveAbi } from '../abis/immersve.ts'
import { LockedFunds, LockedFundsPartialPaymentConfirmation, LockedFundsPaymentConfirmation, LockedFundsRevoked, LockedFundsWithDeposit } from '../entities/lockedFunds.ts'

export const lockedFundsHandler: EventHandlerFor<typeof ImmersveAbi, 'LockedFunds'> = async (
	{ event },
) => {
	const { _from, _lockedFundsId, _value } = event.args
	const doc = new LockedFunds({
		id: `${event.transactionHash}-${event.transactionIndex}-${event.logIndex}`,
		block: Number(event.blockNumber),
		txHash: event.transactionHash,
		from: _from,
		lockedFundsId: Number(_lockedFundsId),
		value: Number(formatUnits(_value, 6)),
	})
	await doc.save()
}

export const lockedFundsWithDepositHandler: EventHandlerFor<typeof ImmersveAbi, 'LockedFundsWithDeposit'> = async (
	{ event },
) => {
	const { _from, _lockedFundsId, _value } = event.args
	const doc = new LockedFundsWithDeposit({
		id: `${event.transactionHash}-${event.transactionIndex}-${event.logIndex}`,
		block: Number(event.blockNumber),
		txHash: event.transactionHash,
		from: _from,
		lockedFundsId: Number(_lockedFundsId),
		value: Number(formatUnits(_value, 6)),
	})
	await doc.save()
}

export const lockedFundsRevokedHandler: EventHandlerFor<typeof ImmersveAbi, 'LockedFundsRevoked'> = async (
	{ event },
) => {
	const { _to, _lockedFundsId, _value } = event.args
	const doc = new LockedFundsRevoked({
		id: `${event.transactionHash}-${event.transactionIndex}-${event.logIndex}`,
		block: Number(event.blockNumber),
		txHash: event.transactionHash,
		to: _to,
		lockedFundsId: Number(_lockedFundsId),
		value: Number(formatUnits(_value, 6)),
	})
	await doc.save()
}

export const lockedFundsPaymentConfirmationHandler: EventHandlerFor<typeof ImmersveAbi, 'LockedFundsPaymentConfirmation'> = async (
	{ event },
) => {
	const { _from, _lockedFundsId, _value } = event.args
	const doc = new LockedFundsPaymentConfirmation({
		id: `${event.transactionHash}-${event.transactionIndex}-${event.logIndex}`,
		block: Number(event.blockNumber),
		txHash: event.transactionHash,
		from: _from,
		lockedFundsId: Number(_lockedFundsId),
		value: Number(formatUnits(_value, 6)),
	})
	await doc.save()
}

export const lockedFundsPartialPaymentConfirmationHandler: EventHandlerFor<typeof ImmersveAbi, 'LockedFundsPartialPaymentConfirmation'> = async (
	{ event },
) => {
	const { _from, _lockedFundsId, _value } = event.args
	const doc = new LockedFundsPartialPaymentConfirmation({
		id: `${event.transactionHash}-${event.transactionIndex}-${event.logIndex}`,
		block: Number(event.blockNumber),
		txHash: event.transactionHash,
		from: _from,
		lockedFundsId: Number(_lockedFundsId),
		value: Number(formatUnits(_value, 6)),
	})
	await doc.save()
}