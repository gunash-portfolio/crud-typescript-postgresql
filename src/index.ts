import express, { Application,Request,Response } from "express";
import { send } from "process";
import Database from "./config/database";
import NoteRouter from "./router/NoteRouter";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.databasesync();
        this.routes();
    }

    protected plugins():void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}))
    }

    protected databasesync():void{
        const db = new Database();
        db.sequelize?.sync();
    }

    protected routes():void {
        this.app.route("/").get((req:Request,res:Response) =>{
            res.send("Welcome life");
        }

        );
        this.app.use("/api/v1/note",NoteRouter)
    }
}

const myApp = new App().app;
const port:number = 3000;

myApp.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

