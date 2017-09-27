const port = '3000';

import {TServer} from './lib/nemb';
const Server = new TServer;
Server.AddStatic('./public');
Server.Listen(port);