import express, { Application,Request,Response } from "express";
import { send } from "process";
import Database from "./config/database";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.databasesync();
        this.routes();
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
    }
}

const myApp = new App().app;
const port:number = 3000;

myApp.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

