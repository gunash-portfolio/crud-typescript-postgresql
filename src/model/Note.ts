import { Column, DataType, Model, Table} from "sequelize-typescript";
import Database from "../config/database";


@Table({
    tableName: Note.NOTE_TABLE_NAME
})

export class Note extends Model {


    public static NOTE_TABLE_NAME = 'note' as string;
    public static NOTE_ID = 'id' as string;
    public static NOTE_NAME = 'name' as string;
    public static NOTE_DESCRIPTION = 'description' as string;


    @Column ({ 
        type: DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field: Note.NOTE_ID
    })
    id!: number;

}