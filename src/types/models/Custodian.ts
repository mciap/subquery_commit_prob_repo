// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type CustodianProps = Omit<Custodian, NonNullable<FunctionPropertyNames<Custodian>>>;

export class Custodian implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public name?: string;

    public address?: string;

    public chainId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Custodian entity without an ID");
        await store.set('Custodian', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Custodian entity without an ID");
        await store.remove('Custodian', id.toString());
    }

    static async get(id:string): Promise<Custodian | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Custodian entity without an ID");
        const record = await store.get('Custodian', id.toString());
        if (record){
            return this.create(record as CustodianProps);
        }else{
            return;
        }
    }


    static async getByChainId(chainId: string): Promise<Custodian[] | undefined>{
      
      const records = await store.getByField('Custodian', 'chainId', chainId);
      return records.map(record => this.create(record as CustodianProps));
      
    }


    static create(record: CustodianProps): Custodian {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
