"use strict";
/*
* NEMB Server unit
* descr: creates basic server with Node + Express + Mongoose + BodyParser
* scope: only server
* author: dpaula
* https://github.com/debersonpaula
*/
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
//server class
var TServer = /** @class */ (function () {
    //constructor
    function TServer() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    //add static route
    TServer.prototype.AddStatic = function (path) {
        this.app.use(express.static(path));
    };
    //add route to specific file
    TServer.prototype.AddRouteToFile = function (uri, filename) {
        this.app.get(uri, function (req, res) {
            res.sendFile(filename);
        });
    };
    //server initializator
    TServer.prototype.Listen = function (port) {
        var dbURI = this.DatabaseURL;
        if (dbURI) {
            mongoose.connection.on('connected', function () { console.log('Mongoose conectado em ' + dbURI); });
            mongoose.connection.on('error', function (err) { console.log('Mongoose não conectado, erro: ' + err); });
            mongoose.connection.on('disconnected', function () { console.log('Mongoose desconectado.'); });
            mongoose.connection.on('open', function () { console.log('Conexão Mongoose aberta.'); });
            mongoose.connect(dbURI, { useMongoClient: true });
        }
        this.app.listen(port, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log("Servidor HTTP ligado na porta " + port);
            }
        });
    };
    return TServer;
}());
exports.TServer = TServer;
