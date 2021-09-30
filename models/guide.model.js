import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const guideSchema = new Schema({
    guideName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    guideDescription: {type: String, required: true},
    guideContact: {type: String, required: true},
    guidePhoto: {type: String, required: true},

}, {
    timestamps: true,
});

const Guide = mongoose.model('Guide', guideSchema);

export default Guide;