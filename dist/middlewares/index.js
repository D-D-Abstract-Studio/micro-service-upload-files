"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./exception"), exports);
_export_star(require("./notFound"), exports);
_export_star(require("./endpoint"), exports);
_export_star(require("./exceptionValidation"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=index.js.map