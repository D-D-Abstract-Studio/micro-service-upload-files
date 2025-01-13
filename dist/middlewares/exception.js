"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "exception", {
    enumerable: true,
    get: function() {
        return exception;
    }
});
const _errors = require("../errors");
const exception = async (err, req, res, _next)=>{
    const status = (0, _errors.isHttpError)(err) ? err.status : 500;
    const message = err.message;
    res.status(status).json({
        errors: [
            message
        ]
    });
};

//# sourceMappingURL=exception.js.map