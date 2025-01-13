"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteUploadController", {
    enumerable: true,
    get: function() {
        return deleteUploadController;
    }
});
const _service = require("./service");
const deleteUploadController = async (req, res)=>{
    await (0, _service.deleteUploadService)({
        id: req.params?.id
    });
    return res.status(202).json({
        message: 'Arquivo deletado com sucesso'
    });
};

//# sourceMappingURL=controller.js.map