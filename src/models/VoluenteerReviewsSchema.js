"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let voluenteerReviewsSchema = new Schema({
    id: { type: Number },
    voluenteerId: { type: Number },
    platformId: { type: Number },
    review: { type: String },
    markId: { type: Number },
    creationDate: { type: Date },
});
exports.VoluenteerReviewsSchema = mongoose.model('VoluenteerReviews', voluenteerReviewsSchema);
//# sourceMappingURL=VoluenteerReviewsSchema.js.map