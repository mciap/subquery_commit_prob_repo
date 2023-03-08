// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type ChainProps = Omit<Chain, NonNullable<FunctionPropertyNames<Chain>>>;

export class Chain implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public name?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Chain entity without an ID");
        await store.set('Chain', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Chain entity without an ID");
        await store.remove('Chain', id.toString());
    }

    static async get(id:string): Promise<Chain | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Chain entity without an ID");
        const record = await store.get('Chain', id.toString());
        if (record){
            return this.create(record as ChainProps);
        }else{
            return;
        }
    }



    static create(record: ChainProps): Chain {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
