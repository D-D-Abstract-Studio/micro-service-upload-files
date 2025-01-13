"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _express = require("express");
const _middlewares = require("../../middlewares");
const _controller = require("./removeUpload/controller");
const _controller1 = require("./createUploads/controller");
const _controller2 = require("./getOneUpload/controller");
const _multerconfig = require("../../shared/multer-config");
const router = (0, _express.Router)();
router.post('/', _multerconfig.uploadAndProcessImages, (0, _middlewares.endpoint)(_controller1.createUploadsController));
router.get('/:id', (0, _middlewares.endpoint)(_controller2.getOneUploadController));
router.delete('/:id', (0, _middlewares.endpoint)(_controller.deleteUploadController));
const _default = router;

//# sourceMappingURL=router.js.map