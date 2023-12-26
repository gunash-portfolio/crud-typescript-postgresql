import { Model } from "sequelize-typescript";

export class Note extends Model {


    public static NOTE_TABLE_NAME = 'note' as string;
    public static NOTE_TABLE_ID = 'id' as string;
    public static NOTE_NAME = 'name' as string;
    public static NOTE_DESCRIPTION = 'description' as string;

}