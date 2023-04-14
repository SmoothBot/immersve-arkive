import { Manifest } from './deps.ts'
import { ImmersveAbi } from './abis/immersve.ts'
import { UserDeposit } from './entities/userDeposit.ts'
import { userDepositHandler } from './handlers/userDepositHandler.ts'
import { userWithdrawHandler } from './handlers/userWithdrawHandler.ts'
import { 
	lockedFundsHandler, 
	lockedFundsPartialPaymentConfirmationHandler, 
	lockedFundsPaymentConfirmationHandler, 
	lockedFundsRevokedHandler, 
	lockedFundsWithDepositHandler 
} from './handlers/lockedFundsHandlers.ts'
import { UserWithdraw } from './entities/userWithdraw.ts'
import { 
	LockedFunds, 
	LockedFundsPartialPaymentConfirmation, 
	LockedFundsPaymentConfirmation, 
	LockedFundsRevoked, 
	LockedFundsWithDeposit 
} from './entities/lockedFunds.ts'

const manifest = new Manifest('immersve')

manifest
	.addEntities([
		UserDeposit, 
		UserWithdraw, LockedFunds, 
		LockedFundsPartialPaymentConfirmation, 
		LockedFundsPaymentConfirmation, 
		LockedFundsRevoked, 
		LockedFundsWithDeposit
	])
	.chain('mumbai')
	.contract(ImmersveAbi)
	.addSources({ '0xd73c2deE4604a1af3Db4E8E07Cf6Fb798aB77982': 31371857n })
	.addEventHandlers({ 'UserDeposit': userDepositHandler })
	.addEventHandlers({ 'UserWithdraw': userWithdrawHandler })
	.addEventHandlers({ 'LockedFunds': lockedFundsHandler })
	.addEventHandlers({ 'LockedFundsWithDeposit': lockedFundsWithDepositHandler })
	.addEventHandlers({ 'LockedFundsRevoked': lockedFundsRevokedHandler })
	.addEventHandlers({ 'LockedFundsPaymentConfirmation': lockedFundsPaymentConfirmationHandler })
	.addEventHandlers({ 'LockedFundsPartialPaymentConfirmation': lockedFundsPartialPaymentConfirmationHandler })

export default manifest.build()
