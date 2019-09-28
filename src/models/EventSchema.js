"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let eventSchema = new Schema({
    id: { type: Number },
    platformId: { type: Number },
    description: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    creationDate: { type: Date },
});
exports.EventSchema = mongoose.model('Event', eventSchema);
//# sourceMappingURL=EventSchema.js.map