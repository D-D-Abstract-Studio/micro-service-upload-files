"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createUploadsController", {
    enumerable: true,
    get: function() {
        return createUploadsController;
    }
});
const _service = require("./service");
const createUploadsController = async (req, res)=>{
    const files = req.files;
    const result = await (0, _service.createUploadsService)({
        files
    });
    return res.status(201).json(result);
};

//# sourceMappingURL=controller.js.map