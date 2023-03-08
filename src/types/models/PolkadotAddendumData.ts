// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type PolkadotAddendumDataProps = Omit<PolkadotAddendumData, NonNullable<FunctionPropertyNames<PolkadotAddendumData>>>;

export class PolkadotAddendumData implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public hash: string;

    public delegator?: string;

    public validator?: string;

    public srcValidator?: string;

    public dstValidator?: string;

    public proposer?: string;

    public voter?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save PolkadotAddendumData entity without an ID");
        await store.set('PolkadotAddendumData', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove PolkadotAddendumData entity without an ID");
        await store.remove('PolkadotAddendumData', id.toString());
    }

    static async get(id:string): Promise<PolkadotAddendumData | undefined>{
        assert((id !== null && id !== undefined), "Cannot get PolkadotAddendumData entity without an ID");
        const record = await store.get('PolkadotAddendumData', id.toString());
        if (record){
            return this.create(record as PolkadotAddendumDataProps);
        }else{
            return;
        }
    }



    static create(record: PolkadotAddendumDataProps): PolkadotAddendumData {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
