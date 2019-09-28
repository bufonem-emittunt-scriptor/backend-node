"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let marksSchema = new Schema({
    id: { type: Number },
    mark: { type: Number },
});
exports.MarksSchema = mongoose.model('Mark', marksSchema);
//# sourceMappingURL=MarksSchema.js.map