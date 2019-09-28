"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let eventSubscriptionSchema = new Schema({
    id: { type: Number },
    eventId: { type: Number },
    voluenteerId: { type: Number },
    creationDate: { type: Date },
});
exports.EventSubscriptionSchema = mongoose.model('EventSubscription', eventSubscriptionSchema);
//# sourceMappingURL=EventSubscriptionSchema.js.map