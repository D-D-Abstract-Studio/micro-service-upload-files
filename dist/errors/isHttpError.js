"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isHttpError", {
    enumerable: true,
    get: function() {
        return isHttpError;
    }
});
const _httpError = require("./httpError");
const isHttpError = (err)=>err instanceof _httpError.HTTPError || typeof err.status === 'number' && typeof err.message === 'string';

//# sourceMappingURL=isHttpError.js.map