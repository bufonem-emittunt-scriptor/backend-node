"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let platformReviewsSchema = new Schema({
    id: { type: Number },
    platformId: { type: Number },
    voluenteerId: { type: Number },
    review: { type: String },
    markId: { type: Number },
    creationDate: { type: Date },
});
exports.PlatformReviewsSchema = mongoose.model('PlatformReviews', platformReviewsSchema);
//# sourceMappingURL=PlatformReviewsSchema.js.map