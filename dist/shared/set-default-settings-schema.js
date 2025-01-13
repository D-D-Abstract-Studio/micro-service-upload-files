"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setDefaultSettingsSchema", {
    enumerable: true,
    get: function() {
        return setDefaultSettingsSchema;
    }
});
const setDefaultSettingsSchema = (schema)=>{
    schema.set('toJSON', {
        virtuals: true
    });
    schema.set('toObject', {
        virtuals: true
    });
    schema.set('versionKey', false);
};

//# sourceMappingURL=set-default-settings-schema.js.map