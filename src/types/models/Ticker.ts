// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type TickerProps = Omit<Ticker, NonNullable<FunctionPropertyNames<Ticker>>>;

export class Ticker implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public name?: string;

    public code?: string;

    public exponent?: number;

    public chainId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Ticker entity without an ID");
        await store.set('Ticker', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Ticker entity without an ID");
        await store.remove('Ticker', id.toString());
    }

    static async get(id:string): Promise<Ticker | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Ticker entity without an ID");
        const record = await store.get('Ticker', id.toString());
        if (record){
            return this.create(record as TickerProps);
        }else{
            return;
        }
    }


    static async getByChainId(chainId: string): Promise<Ticker[] | undefined>{
      
      const records = await store.getByField('Ticker', 'chainId', chainId);
      return records.map(record => this.create(record as TickerProps));
      
    }


    static create(record: TickerProps): Ticker {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
