"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "endpoint", {
    enumerable: true,
    get: function() {
        return endpoint;
    }
});
const endpoint = (handler)=>{
    return async (req, res, next)=>{
        try {
            await handler(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

//# sourceMappingURL=endpoint.js.map