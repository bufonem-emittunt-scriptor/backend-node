
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let blackListSchema = new Schema({
    id: { type: Number },
    platformId: { type: Number },
    voluenteerId: { type: Number },
    blockReason: { type: String },
    creationDate: { type: Date },
});
module.exports = mongoose.model('BlackList', blackListSchema);
//# sourceMappingURL=BlackListSchema.js.map