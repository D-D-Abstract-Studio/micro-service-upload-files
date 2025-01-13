"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTTPError", {
    enumerable: true,
    get: function() {
        return HTTPError;
    }
});
class HTTPError extends Error {
    status;
    constructor(message, status = 400){
        super(message), this.status = status;
    }
}

//# sourceMappingURL=httpError.js.map