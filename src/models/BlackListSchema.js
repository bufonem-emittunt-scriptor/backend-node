"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let blackListSchema = new Schema({
    id: { type: Number },
    platformId: { type: Number },
    voluenteerId: { type: Number },
    blockReason: { type: String },
    creationDate: { type: Date },
});
exports.BlackListSchema = mongoose.model('BlackList', blackListSchema);
//# sourceMappingURL=BlackListSchema.js.map