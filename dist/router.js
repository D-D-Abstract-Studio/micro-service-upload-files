"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "router", {
    enumerable: true,
    get: function() {
        return router;
    }
});
const _express = require("express");
const _nodefs = require("node:fs");
const _nodepath = require("node:path");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const router = (0, _express.Router)();
const routerModules = (0, _nodefs.readdirSync)((0, _nodepath.join)(__dirname, 'modules')).filter((f)=>f !== 'shared');
(async ()=>{
    for (const routerModule of routerModules){
        router.use(`/${routerModule}`, (await Promise.resolve((0, _nodepath.join)(__dirname, 'modules', routerModule, 'router')).then((p)=>/*#__PURE__*/ _interop_require_wildcard(require(p)))).default);
    }
})();
router.get('/', (_req, res)=>{
    res.send('API is running 🚀');
});

//# sourceMappingURL=router.js.map