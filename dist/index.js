"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const port = process.env.PORT || 3000;
try {
    _app.default.listen(port, ()=>console.log(`Application running on port ${port}`));
} catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
}

//# sourceMappingURL=index.js.map