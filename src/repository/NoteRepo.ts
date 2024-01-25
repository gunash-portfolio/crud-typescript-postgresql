import { Note } from "../model/Note";

interface INoteRepo {
    save(note:Note):Promise<void>;
    update(note:Note):Promise<void>;
    delete(noteId:number):Promise<void>;
    retrieveById(noteId:number):Promise<Note>;
    retrieveAll():Promise<Note[]>;

}