"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let contactSchema = new Schema({
    id: { type: Number },
    platformId: { type: Number },
    fio: { type: String },
    name: { type: String },
    surname: { type: String },
    patronymic: { type: String },
    vkLink: { type: String },
    position: { type: String },
    tel: { type: String },
    email: { type: String },
    creationDate: { type: Date },
});
exports.ContactsSchema = mongoose.model('Contact', contactSchema);
//# sourceMappingURL=ContactsSchema.js.map