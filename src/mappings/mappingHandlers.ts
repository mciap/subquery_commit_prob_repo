
import { Balance } from "@polkadot/types/interfaces";
import { SubstrateEvent } from "@subql/types/dist/interfaces";
import { PolkadotTransactionIndexer } from "../types";
import "../index";

const DOT_EXP: 1e-10 = 1e-10;


export async function handleBalanceDeposits(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Deposit data ' + event.event.data));

}

export async function handleBalanceTransfers(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Transfer data ' + event.event.data));
 
}

export async function handleBalanceWithdrawal(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Withdrawal data ' + event.event.data));
  
}

export async function handleEndowed(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Endowed data ' + event.event.data));
 
}

export async function handleBalanceSlashed(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Slashed data ' + event.event.data));
  
}

export async function handleBalanceSet(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Set amount by root data ' + event.event.data));
}

export async function handleDustLost(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n DustLost data ' + event.event.data));
 
}

export async function handleReserved(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Reserved data ' + event.event.data));
  
}

export async function handleReserveRepatriated(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n ReserveRepatriated data ' + event.event.data));
  
}

export async function handleUnreserved(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Unreserved data ' + event.event.data));
  
}

export async function handleStakingRewards(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Staking Rewards data ' + event.event.data));
  
}

export async function handleStakingBonded(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Staking Bonded data ' + event.event.data));
 
}

export async function handleStakingUnbonded(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Staking Unbonded data ' + event.event.data));

}

export async function handleStakingWithdrawUnbonded(event: SubstrateEvent): Promise<void> {
  logger.info(JSON.stringify('/n Staking Withdraw Unbonded data ' + event.event.data));
  
}