"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HOST_API: function() {
        return HOST_API;
    },
    MONGO_URL: function() {
        return MONGO_URL;
    },
    collectionsData: function() {
        return collectionsData;
    }
});
const HOST_API = process.env.HOST_API || '';
const MONGO_URL = process.env.MONGO_URI || '';
const collectionsData = {
    User: {
        name: 'User',
        collection: 'users'
    }
};

//# sourceMappingURL=config.js.map