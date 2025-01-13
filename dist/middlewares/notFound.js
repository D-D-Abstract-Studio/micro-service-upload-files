"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _errors = require("../errors");
const notFound = (req, res, next)=>{
    next(new _errors.HTTPError('Resource not found', 404));
};

//# sourceMappingURL=notFound.js.map