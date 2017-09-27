"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var port = '3000';
var nemb_1 = require("./lib/nemb");
var Server = new nemb_1.TServer;
Server.AddStatic('./public');
Server.Listen(port);
