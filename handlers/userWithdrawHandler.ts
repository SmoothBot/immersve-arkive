import { EventHandlerFor, formatUnits } from '../deps.ts'
import { ImmersveAbi } from '../abis/immersve.ts'
import { UserWithdraw } from '../entities/userWithdraw.ts'

export const userWithdrawHandler: EventHandlerFor<typeof ImmersveAbi, 'UserWithdraw'> = async (
	{ event },
) => {
	const { _to, _value } = event.args
	const doc = new UserWithdraw({
		id: `${event.transactionHash}-${event.transactionIndex}-${event.logIndex}`,
		block: Number(event.blockNumber),
		txHash: event.transactionHash,
		to: _to,
		value: Number(formatUnits(_value, 6)),
	})
	await doc.save()
}
