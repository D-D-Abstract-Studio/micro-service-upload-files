"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unipConnect", {
    enumerable: true,
    get: function() {
        return unipConnect;
    }
});
const _mongoose = require("mongoose");
const _config = require("../config");
const unipConnect = (0, _mongoose.createConnection)(_config.MONGO_URL, {
    maxPoolSize: 10
});
unipConnect.on('connecting', ()=>console.log('Connecting to the database'));
unipConnect.on('error', (err)=>console.error('🔴 Error connecting to the database', err));
unipConnect.on('disconnected', ()=>console.log('🔴 Disconnected from the database'));

//# sourceMappingURL=connection-db.js.map