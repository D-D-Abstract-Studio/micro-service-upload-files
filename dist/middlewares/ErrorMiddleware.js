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
    errorHandler: function() {
        return errorHandler;
    },
    notFound: function() {
        return notFound;
    }
});
const notFound = async (req, res, next)=>{
    const error = new Error(`Not Found ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        success: false,
        message: err.message
    });
};

//# sourceMappingURL=ErrorMiddleware.js.map