"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteUploadService", {
    enumerable: true,
    get: function() {
        return deleteUploadService;
    }
});
const _nodefs = /*#__PURE__*/ _interop_require_default(require("node:fs"));
const _nodepath = /*#__PURE__*/ _interop_require_default(require("node:path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const deleteUploadService = async ({ id })=>{
    const filePath = _nodepath.default.join(__dirname, '../../../uploads', id);
    const file = await _nodefs.default.promises.unlink(filePath);
    return file;
};

//# sourceMappingURL=service.js.map