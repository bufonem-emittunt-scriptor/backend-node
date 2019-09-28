"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let platformSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    address: { type: String },
    tel: { type: String },
    email: { type: String },
    bio: { type: String },
    creationDate: { type: Date },
});
exports.PlatformSchema = mongoose.model('Platform', platformSchema);
//# sourceMappingURL=PlatformSchema.js.map