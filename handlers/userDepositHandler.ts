import { EventHandlerFor, formatUnits } from '../deps.ts'
import { ImmersveAbi } from '../abis/immersve.ts'
import { UserDeposit } from '../entities/userDeposit.ts'

export const userDepositHandler: EventHandlerFor<typeof ImmersveAbi, 'UserDeposit'> = async (
	{ event },
) => {
	const { _from, _value } = event.args
	const doc = new UserDeposit({
		id: `${event.transactionHash}-${event.transactionIndex}-${event.logIndex}`,
		block: Number(event.blockNumber),
		txHash: event.transactionHash,
		from: _from,
		value: Number(formatUnits(_value, 6)),
	})
	await doc.save()
}
