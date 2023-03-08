// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type DrCrIndicatorProps = Omit<DrCrIndicator, NonNullable<FunctionPropertyNames<DrCrIndicator>>>;

export class DrCrIndicator implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public description?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save DrCrIndicator entity without an ID");
        await store.set('DrCrIndicator', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove DrCrIndicator entity without an ID");
        await store.remove('DrCrIndicator', id.toString());
    }

    static async get(id:string): Promise<DrCrIndicator | undefined>{
        assert((id !== null && id !== undefined), "Cannot get DrCrIndicator entity without an ID");
        const record = await store.get('DrCrIndicator', id.toString());
        if (record){
            return this.create(record as DrCrIndicatorProps);
        }else{
            return;
        }
    }



    static create(record: DrCrIndicatorProps): DrCrIndicator {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
