"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "uploadAndProcessImages", {
    enumerable: true,
    get: function() {
        return uploadAndProcessImages;
    }
});
const _nodefs = require("node:fs");
const _nodepath = require("node:path");
const _datefns = require("date-fns");
const _multer = /*#__PURE__*/ _interop_require_default(require("multer"));
const _uuid = require("uuid");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const storageConfig = _multer.default.diskStorage({
    destination: (_req, _file, cb)=>{
        const dir = (0, _nodepath.resolve)(__dirname, '..', 'uploads');
        if (!(0, _nodefs.existsSync)(dir)) {
            (0, _nodefs.mkdirSync)(dir);
        }
        cb(null, dir);
    },
    filename: (_req, file, cb)=>{
        const datePart = (0, _datefns.format)(new Date(), 'dd-MM-yyyy');
        const uniqueId = (0, _uuid.v4)();
        const fileExtension = file.mimetype.split('/')[1];
        cb(null, `${datePart}-${uniqueId}.${fileExtension}`);
    }
});
const uploadAndProcessImages = (0, _multer.default)({
    storage: storageConfig
}).array('files');

//# sourceMappingURL=multer-config.js.map