"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let newsSchema = new Schema({
    id: { type: Number },
    platformId: { type: Number },
    content: { type: String },
    creationDate: { type: Date },
});
exports.NewsSchema = mongoose.model('News', newsSchema);
//# sourceMappingURL=NewsSchema.js.map