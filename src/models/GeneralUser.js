const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let GeneralUser = new Schema({
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
    creationDate: { type: Date },

    role: {type: String},

    address: { type: String },
    bio: { type: String },
    position: { type: String },
    whyInterest: { type: String },

    museumSubs: {type: Array}, //массив айди музеев
    achievements: {type: Array}, //массив строк
    charm: {type: Number},


});
module.exports = mongoose.model('User', GeneralUser);
// exports.GeneralUser = mongoose.model('GeneralUser', GeneralUser);
//# sourceMappingURL=VolunteerSchema.js.map