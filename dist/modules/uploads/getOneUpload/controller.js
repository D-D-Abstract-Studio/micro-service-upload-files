"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getOneUploadController", {
    enumerable: true,
    get: function() {
        return getOneUploadController;
    }
});
const _service = require("./service");
const getOneUploadController = async (req, res)=>{
    const file = await (0, _service.getUploadService)({
        id: req.params?.id
    });
    return res.status(202).sendFile(file);
};

//# sourceMappingURL=controller.js.map