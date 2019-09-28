"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let volunteerSchema = new Schema({
    id: { type: Number },
    userName: { type: String },
    password: { type: String },
    fio: { type: String },
    name: { type: String },
    surname: { type: String },
    patronymic: { type: String },
    vkLink: { type: String },
    workPlace: { type: String },
    speciality: { type: String },
    experience: { type: String },
    curiosityProjects: { type: String },
    childrenExp: { type: String },
    additionalSkills: { type: String },
    expectations: { type: String },
    medContr: { type: String },
    foodPref: { type: String },
    clothSize: { type: Number },
    howDidFindOut: { type: String },
    newsConsumer: { type: Boolean },
    tel: { type: String },
    email: { type: String },
    volunteerRole: { type: String },
    creationDate: { type: Date },
});
exports.VolunteerSchema = mongoose.model('Voluenteer', volunteerSchema);
//# sourceMappingURL=VolunteerSchema.js.map