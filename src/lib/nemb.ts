/*
* NEMB Server unit
* descr: creates basic server with Node + Express + Mongoose + BodyParser
* scope: only server
* author: dpaula
* https://github.com/debersonpaula
*/

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

//server class
class TServer{
    //components
    protected app: express.Application;
    protected db: mongoose.Connection;

    //database properties
    public DatabaseURL: string;

    //constructor
    constructor(){
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }

    //add static route
    public AddStatic(path:string){
        this.app.use(express.static(path));
    }

    //add route to specific file
    public AddRouteToFile(uri:string,filename:string){
        this.app.get(uri, function(req, res){
            res.sendFile(filename);
        });
    }

    //server initializator
    public Listen(port:string){
        const dbURI = this.DatabaseURL;
        if (dbURI){
            mongoose.connection.on('connected',function(){ console.log('Mongoose conectado em ' + dbURI); });
            mongoose.connection.on('error',function(err){ console.log('Mongoose não conectado, erro: ' + err); });
            mongoose.connection.on('disconnected',function(){ console.log('Mongoose desconectado.'); });
            mongoose.connection.on('open',function(){ console.log('Conexão Mongoose aberta.'); });
            mongoose.connect(dbURI,{useMongoClient: true});
        }
        this.app.listen(port,function(err:any){ 
            if (err){
                throw err;
            }else{
                console.log(`Servidor HTTP ligado na porta ${port}`) 
            }
        });
    }
}

export {TServer};