import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventDate: {type: Date, required: true},
    eventDuration:{type: Number, required: true},
    eventName: {type: String, required: true},
    eventShortDescription: {type: String, required: true},
    eventFullDescription: {type: String, required: true},
    eventMeetingPoint: {type: String, required: true},
    eventAdditionalInfo: {type: String, required: true},
    eventCity: {type: String, required: true},
    eventDifficulty: {type: String, required: true},
    eventCapacity: {type: Number, required: true},
    eventRegistered: {type: Number, required: true},
    eventPrice: {type: Number, required: true},
    eventPhoto: {type: String, required: true},
    guideName: {type: String, required: true}

}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);
export default Event;