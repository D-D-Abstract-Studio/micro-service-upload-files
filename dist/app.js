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
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _cors = /*#__PURE__*/ _interop_require_default(require("cors"));
const _morgan = /*#__PURE__*/ _interop_require_default(require("morgan"));
const _middlewares = require("./middlewares");
const _router = require("./router");
const _dotenv = /*#__PURE__*/ _interop_require_default(require("dotenv"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dotenv.default.config();
const app = (0, _express.default)();
app.use(_express.default.json({
    limit: '50mb'
}));
app.use(_express.default.urlencoded({
    extended: true
}));
app.use(_express.default.static('public'));
app.use((0, _morgan.default)(':method :url :status :res[content-length] - :response-time ms'));
app.use((0, _cors.default)({
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'OPTIONS'
    ],
    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ],
    credentials: true
}));
app.options('*', (0, _cors.default)());
app.set('trust proxy', [
    'loopback',
    'linklocal',
    'uniquelocal'
]);
app.use(_router.router);
app.use(_middlewares.notFound);
app.use(_middlewares.exceptionValidation);
app.use(_middlewares.exception);
const _default = app;

//# sourceMappingURL=app.js.map