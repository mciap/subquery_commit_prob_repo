// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type PolkadotTransactionIndexerProps = Omit<PolkadotTransactionIndexer, NonNullable<FunctionPropertyNames<PolkadotTransactionIndexer>>>;

export class PolkadotTransactionIndexer implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public hash: string;

    public txTypeId: string;

    public custodianId: string;

    public receiver?: string;

    public sender?: string;

    public amount?: number;

    public fee?: number;

    public chainId: string;

    public txTimestamp?: Date;

    public blockHeight?: string;

    public blockHash?: string;

    public tickerId: string;

    public reservedBalance?: number;

    public stakingBalance?: number;

    public transferableBalance?: number;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save PolkadotTransactionIndexer entity without an ID");
        await store.set('PolkadotTransactionIndexer', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove PolkadotTransactionIndexer entity without an ID");
        await store.remove('PolkadotTransactionIndexer', id.toString());
    }

    static async get(id:string): Promise<PolkadotTransactionIndexer | undefined>{
        assert((id !== null && id !== undefined), "Cannot get PolkadotTransactionIndexer entity without an ID");
        const record = await store.get('PolkadotTransactionIndexer', id.toString());
        if (record){
            return this.create(record as PolkadotTransactionIndexerProps);
        }else{
            return;
        }
    }


    static async getByTxTypeId(txTypeId: string): Promise<PolkadotTransactionIndexer[] | undefined>{
      
      const records = await store.getByField('PolkadotTransactionIndexer', 'txTypeId', txTypeId);
      return records.map(record => this.create(record as PolkadotTransactionIndexerProps));
      
    }

    static async getByCustodianId(custodianId: string): Promise<PolkadotTransactionIndexer[] | undefined>{
      
      const records = await store.getByField('PolkadotTransactionIndexer', 'custodianId', custodianId);
      return records.map(record => this.create(record as PolkadotTransactionIndexerProps));
      
    }

    static async getByChainId(chainId: string): Promise<PolkadotTransactionIndexer[] | undefined>{
      
      const records = await store.getByField('PolkadotTransactionIndexer', 'chainId', chainId);
      return records.map(record => this.create(record as PolkadotTransactionIndexerProps));
      
    }

    static async getByTickerId(tickerId: string): Promise<PolkadotTransactionIndexer[] | undefined>{
      
      const records = await store.getByField('PolkadotTransactionIndexer', 'tickerId', tickerId);
      return records.map(record => this.create(record as PolkadotTransactionIndexerProps));
      
    }


    static create(record: PolkadotTransactionIndexerProps): PolkadotTransactionIndexer {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
