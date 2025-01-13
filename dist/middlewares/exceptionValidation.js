"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "exceptionValidation", {
    enumerable: true,
    get: function() {
        return exceptionValidation;
    }
});
const _zod = require("zod");
const _axios = require("axios");
const exceptionValidation = async (err, req, res, next)=>{
    if (err instanceof _zod.ZodError) {
        return res.status(400).json({
            errors: err.errors.map((error)=>`${error.path} ${error.message}`)
        });
    }
    if (err instanceof _axios.AxiosError) {
        return res.status(err.response?.status || 500).json({
            errors: err.response?.data
        });
    }
    return res.status(500).json({
        errors: [
            err.message
        ]
    });
};

//# sourceMappingURL=exceptionValidation.js.map