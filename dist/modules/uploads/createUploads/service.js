"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createUploadsService", {
    enumerable: true,
    get: function() {
        return createUploadsService;
    }
});
const createUploadsService = async ({ files })=>{
    const newfiles = files.map((file)=>{
        return {
            ...file,
            name: file.filename,
            size: file.size,
            type: file.mimetype,
            preview: `http://${process.env.RAILWAY_PUBLIC_DOMAIN}/${file.path.split('src/')[1]}`
        };
    });
    return newfiles;
};

//# sourceMappingURL=service.js.map