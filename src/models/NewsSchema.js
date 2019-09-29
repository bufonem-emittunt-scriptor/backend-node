const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let newsSchema = new Schema({
    id: { type: Number },
    platformId: { type: Number },
    content: { type: String },
    creationDate: { type: Date },
});
module.exports = mongoose.model('News', newsSchema);
//# sourceMappingURL=NewsSchema.js.map