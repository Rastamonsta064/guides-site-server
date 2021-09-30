import express from 'express';
import Event from "../models/event.model.js";

const eventsRouter = express.Router();

eventsRouter.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

eventsRouter.route('/add').post((req, res) => {

    const eventDate = req.body.eventDate
    const eventDuration = req.body.eventDuration
    const eventName = req.body.eventName
    const eventShortDescription = req.body.eventShortDescription
    const eventFullDescription = req.body.eventFullDescription;
    const eventMeetingPoint = req.body.eventMeetingPoint;
    const eventAdditionalInfo = req.body.eventAdditionalInfo;
    const eventCity = req.body.eventCity;
    const eventDifficulty = req.body.eventDifficulty;
    const eventCapacity = req.body.eventCapacity;
    const eventRegistered = req.body.eventRegistered;
    const eventPrice = req.body.eventPrice;
    const eventPhoto = req.body.eventPhoto;
    const guideName = req.body.guideName;

    const newEvent = new Event({
        eventDate, eventDuration, eventName, eventShortDescription,
        eventFullDescription,
        eventMeetingPoint,
        eventAdditionalInfo,
        eventCity,
        eventDifficulty,
        eventCapacity,
        eventRegistered,
        eventPrice,
        eventPhoto,
        guideName
    });

    newEvent.save()
        .then(() => res.json('Event Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

eventsRouter.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error ' + err));
});

eventsRouter.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(event => res.json('Event deleted.'))
        .catch(err => res.status(400).json('Error ' + err));
});

eventsRouter.route('/update/:id').post((req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.eventDate = req.body.eventDate
            event.eventDuration = req.body.eventDuration
            event.eventName = req.body.eventName
            event.eventShortDescription = req.body.eventShortDescription
            event.eventFullDescription = req.body.eventFullDescription;
            event.eventMeetingPoint = req.body.eventMeetingPoint;
            event.eventAdditionalInfo = req.body.eventAdditionalInfo;
            event.eventCity = req.body.eventCity;
            event.eventDifficulty = req.body.eventDifficulty;
            event.eventCapacity = req.body.eventCapacity;
            event.eventRegistered = req.body.eventRegistered;
            event.eventPrice = req.body.eventPrice;
            event.eventPhoto = req.body.eventPhoto;
            event.guideName = req.body.guideName;

            event.save()
                .then(() => res.json('Event Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});

eventsRouter.route('/patch_registered/:id').post((req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.eventRegistered = req.body.eventRegistered;

            event.save()
                .then(() => res.json('eventRegistred Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});

export default eventsRouter;