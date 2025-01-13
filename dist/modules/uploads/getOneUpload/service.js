"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getUploadService", {
    enumerable: true,
    get: function() {
        return getUploadService;
    }
});
const _nodepath = /*#__PURE__*/ _interop_require_default(require("node:path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getUploadService = async ({ id })=>{
    const filePath = _nodepath.default.join(__dirname, '../../../uploads', id);
    return filePath;
};

//# sourceMappingURL=service.js.map