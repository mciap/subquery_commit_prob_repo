// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type TransactionTypeProps = Omit<TransactionType, NonNullable<FunctionPropertyNames<TransactionType>>>;

export class TransactionType implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public description?: string;

    public drcrIndId: string;

    public chainId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save TransactionType entity without an ID");
        await store.set('TransactionType', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove TransactionType entity without an ID");
        await store.remove('TransactionType', id.toString());
    }

    static async get(id:string): Promise<TransactionType | undefined>{
        assert((id !== null && id !== undefined), "Cannot get TransactionType entity without an ID");
        const record = await store.get('TransactionType', id.toString());
        if (record){
            return this.create(record as TransactionTypeProps);
        }else{
            return;
        }
    }


    static async getByDrcrIndId(drcrIndId: string): Promise<TransactionType[] | undefined>{
      
      const records = await store.getByField('TransactionType', 'drcrIndId', drcrIndId);
      return records.map(record => this.create(record as TransactionTypeProps));
      
    }

    static async getByChainId(chainId: string): Promise<TransactionType[] | undefined>{
      
      const records = await store.getByField('TransactionType', 'chainId', chainId);
      return records.map(record => this.create(record as TransactionTypeProps));
      
    }


    static create(record: TransactionTypeProps): TransactionType {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
