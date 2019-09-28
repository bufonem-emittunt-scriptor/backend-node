"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ticketSchema = new Schema({
    guid: { type: String },
    eventId: { type: Number },
    voluenteerId: { type: Number },
    creationDate: { type: Date },
    scanned: { type: Date },
});
exports.TicketSchema = mongoose.model('TicketReviews', ticketSchema);
//# sourceMappingURL=TicketSchema.js.map