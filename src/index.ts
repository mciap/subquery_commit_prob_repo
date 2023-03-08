//Exports all handler functions
export * from "./mappings/mappingHandlers";
import "@polkadot/api-augment";
import { Chain, Custodian, DrCrIndicator, Ticker, TransactionType } from "./types";

const POLKADOT: string = '001';
const DOT: string = '001'
const DOT_EXP: 1e-10 = 1e-10;

const DOT_STASH_1: string = '13uwV8CBHjv25W3GACLPzzvTu2v9USc2yCQdhrqPhyM3vx6w';
const DOT_STASH_PROXY: string = '19GUVUsptowyh9oj5gz687xt7QNwUwCiPNzEsN3Hykhfqne';
const DOT_FREE_DOT: string = '13fyQ7dL8uBn2FYX7QoK5ZyQVshtWLAMobzuh5wRVNV6RXwQ';
const DOT_COUNCIL_PROXY: string = '15tLX6uChEEzQqcrhjfP7NoT2a8QUabTvHL2b4nLwtTcpwqC';
const DOT_CONTROLLER_1: string = '15CzHUmiJPhpfri5AXFGKPZXcJceH1KR24a39Zodb83D1rJX';

const CREDIT: string = '001';
const DEBIT: string = '002'
const INTERNAL: string = '000';

const DEPOSIT: string = '001';
const TRANSFER_IN: string = '002';
const TRANSFER_OUT: string = '003';
const WITHDRAW: string = '004';
const SLASHED: string = '005';
const DUST_LOST: string = '006';
const BALANCE_SET: string = '007';
const ENDOWED: string = '008';
const RESERVED: string = '009';
const RESERVE_REPATRIATED: string = '010';
const UNRESERVED: string = '011';
const REWARDED: string = '012';
const BONDED: string = '013';
const UNBONDED: string = '014';
const WITHDRAW_UNBONDED: string = '015';

//initialize();
bootstrapDB();

async function initialize(){
    //check if the database schema for Polkadot is instantiated and if not initialise the schema for polkadot
    
    await Chain.get(POLKADOT)
    .then (async data => {
        if (!data) {
            await bootstrapDB();
        }
        else
        {
            logger.info ('/n Database is initialised');
        } ;
    })
}

async function bootstrapDB() {
    //This function is used to intialise reference tables
    
    //chain table
    let chainRec = new Chain(POLKADOT);
    chainRec.name = 'POLKADOT';
    await chainRec.save()
        .catch(error => {
            logger.info ('/n ' + error);
        } );

    //ticker table
    let tickerRec = new Ticker(DOT);
    tickerRec.chainId = POLKADOT;
    tickerRec.name = 'DOT';
    tickerRec.code = 'DOT';
    tickerRec.exponent = DOT_EXP;
    await tickerRec.save().
        catch(error => {
            logger.info ('/n ' + error);
        });
}




/*        //ticker table
        let ticker = await Ticker.get(DOT). catch(error => {
            logger.info ('/n ' + error);
        });
        if (!ticker){
            ticker = new Ticker (DOT);
            ticker.chainId = POLKADOT;
            ticker.name = 'DOT';
            ticker.code = 'DOT';
            ticker.exponent = DOT_EXP;
            await ticker.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        //custodian table
        let dotStash1 = await Custodian.get(DOT_STASH_1).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!dotStash1){
            dotStash1 = new Custodian(DOT_STASH_1);
            dotStash1.name = 'DOT Stash 1';
            dotStash1.chainId = POLKADOT;
            dotStash1.address = DOT_STASH_1;
            await dotStash1.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let dotStashProxy = await Custodian.get(DOT_STASH_PROXY).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!dotStashProxy){
            dotStashProxy = new Custodian(DOT_STASH_PROXY);
            dotStashProxy.name = 'DOT Stash Proxy';
            dotStashProxy.chainId = POLKADOT;
            dotStashProxy.address = DOT_STASH_PROXY;
            await dotStashProxy.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let dotFreeDot = await Custodian.get(DOT_FREE_DOT).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!dotFreeDot){
            dotFreeDot = new Custodian(DOT_FREE_DOT);
            dotFreeDot.name = 'DOT Free DOT';
            dotFreeDot.chainId = POLKADOT;
            dotFreeDot.address = DOT_FREE_DOT;
            await dotFreeDot.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let dotCouncilProxy = await Custodian.get(DOT_COUNCIL_PROXY).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!dotCouncilProxy){
            dotCouncilProxy = new Custodian(DOT_COUNCIL_PROXY);
            dotCouncilProxy.name = 'DOT Council Proxy';
            dotCouncilProxy.chainId = POLKADOT;
            dotCouncilProxy.address = DOT_COUNCIL_PROXY;
            await dotCouncilProxy.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let dotController1 = await Custodian.get(DOT_CONTROLLER_1).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!dotController1){
            dotController1 = new Custodian(DOT_CONTROLLER_1);
            dotController1.name = 'DOT Controller 1';
            dotController1.chainId = POLKADOT;
            dotController1.address = DOT_CONTROLLER_1;
            await dotController1.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        //DRCR Indicator table
        let crIndicator = await DrCrIndicator.get(CREDIT).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!crIndicator) {
            crIndicator = new DrCrIndicator(CREDIT);
            crIndicator.description = 'Credit';
            await crIndicator.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let drIndicator = await DrCrIndicator.get(DEBIT).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!drIndicator) {
            drIndicator = new DrCrIndicator(DEBIT);
            drIndicator.description = 'Debit';
            await drIndicator.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let internalIndicator = await DrCrIndicator.get(INTERNAL).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!internalIndicator) {
            internalIndicator = new DrCrIndicator(INTERNAL);
            internalIndicator.description = 'Internal';
            await internalIndicator.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        //Transaction Type table

        let depositType = await TransactionType.get(DEPOSIT).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!depositType) {
            depositType = new TransactionType(DEPOSIT);
            depositType.description = 'Deposit';
            depositType.chainId = POLKADOT;
            depositType.drcrIndId = CREDIT;
            await depositType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let transferInType = await TransactionType.get(TRANSFER_IN).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!transferInType) {
            transferInType = new TransactionType(TRANSFER_IN);
            transferInType.description = 'Transfer In';
            transferInType.chainId = POLKADOT;
            transferInType.drcrIndId = CREDIT;
            await transferInType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let transferOutType = await TransactionType.get(TRANSFER_OUT).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!transferOutType) {
            transferOutType = new TransactionType(TRANSFER_OUT);
            transferOutType.description = 'Transfer Out';
            transferOutType.chainId = POLKADOT;
            transferOutType.drcrIndId = DEBIT;
            await transferOutType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let withdrawType = await TransactionType.get(WITHDRAW).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!withdrawType) {
            withdrawType = new TransactionType(WITHDRAW);
            withdrawType.description = 'Withdraw';
            withdrawType.chainId = POLKADOT;
            withdrawType.drcrIndId = DEBIT;
            await withdrawType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }      
        
        let slashedType = await TransactionType.get(SLASHED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!slashedType) {
            slashedType = new TransactionType(SLASHED);
            slashedType.description = 'Slashed';
            slashedType.chainId = POLKADOT;
            slashedType.drcrIndId = DEBIT;
            await slashedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }  

        let dustlostType = await TransactionType.get(DUST_LOST).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!dustlostType) {
            dustlostType = new TransactionType(DUST_LOST);
            dustlostType.description = 'Dust Lost';
            dustlostType.chainId = POLKADOT;
            dustlostType.drcrIndId = DEBIT;
            await dustlostType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }  

        let balanceSetType = await TransactionType.get(BALANCE_SET).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!balanceSetType) {
            balanceSetType = new TransactionType(BALANCE_SET);
            balanceSetType.description = 'Balance Set';
            balanceSetType.chainId = POLKADOT;
            balanceSetType.drcrIndId = INTERNAL;
            await balanceSetType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let endowedType = await TransactionType.get(ENDOWED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!endowedType) {
            endowedType = new TransactionType(ENDOWED);
            endowedType.description = 'Endowed';
            endowedType.chainId = POLKADOT;
            endowedType.drcrIndId = CREDIT;
            await endowedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let reservedType = await TransactionType.get(RESERVED).catch(error => {
            logger.info ('/n ' + error);
       });
        if (!reservedType) {
            reservedType = new TransactionType(RESERVED);
            reservedType.description = 'Reserved';
            reservedType.chainId = POLKADOT;
            reservedType.drcrIndId = DEBIT;
            await reservedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let reservedRepatriatedType = await TransactionType.get(RESERVE_REPATRIATED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!reservedRepatriatedType) {
            reservedRepatriatedType = new TransactionType(RESERVE_REPATRIATED);
            reservedRepatriatedType.description = 'Reserved Repatriated';
            reservedRepatriatedType.chainId = POLKADOT;
            reservedRepatriatedType.drcrIndId = DEBIT;
            await reservedRepatriatedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let unreservedType = await TransactionType.get(UNRESERVED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!unreservedType) {
            unreservedType = new TransactionType(UNRESERVED);
            unreservedType.description = 'Unreserved';
            unreservedType.chainId = POLKADOT;
            unreservedType.drcrIndId = CREDIT;
            await unreservedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let rewardedType = await TransactionType.get(REWARDED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!rewardedType) {
            rewardedType = new TransactionType(REWARDED);
            rewardedType.description = 'Rewarded';
            rewardedType.chainId = POLKADOT;
            rewardedType.drcrIndId = CREDIT;
            await rewardedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let bondedType = await TransactionType.get(BONDED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!bondedType) {
            bondedType = new TransactionType(BONDED);
            bondedType.description = 'Bonded';
            bondedType.chainId = POLKADOT;
            bondedType.drcrIndId = DEBIT;
            await bondedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let unbondedType = await TransactionType.get(UNBONDED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!unbondedType) {
            unbondedType = new TransactionType(UNBONDED);
            unbondedType.description = 'Unbonded';
            unbondedType.chainId = POLKADOT;
            unbondedType.drcrIndId = CREDIT;
            await unbondedType.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }

        let withdrawUnbondedType = await TransactionType.get(WITHDRAW_UNBONDED).catch(error => {
            logger.info ('/n ' + error);
        });
        if (!withdrawUnbondedType) {
            let withdrawUnbondedTypeRec = new TransactionType(WITHDRAW_UNBONDED);
            withdrawUnbondedTypeRec.description = 'Withdraw Unbonded';
            withdrawUnbondedTypeRec.chainId = POLKADOT;
            withdrawUnbondedTypeRec.drcrIndId = DEBIT;
            await withdrawUnbondedTypeRec.save().catch(error => {
                logger.info ('/n ' + error);
            });
        }    
*/
    