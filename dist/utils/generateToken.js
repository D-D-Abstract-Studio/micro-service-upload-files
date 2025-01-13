"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generateToken", {
    enumerable: true,
    get: function() {
        return generateToken;
    }
});
const _jsonwebtoken = require("jsonwebtoken");
const generateToken = (id)=>{
    const token = (0, _jsonwebtoken.sign)({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    return token;
};

//# sourceMappingURL=generateToken.js.map