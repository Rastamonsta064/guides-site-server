import express from 'express';
import Guide from "../models/guide.model.js";
const guidesRouter = express.Router();

guidesRouter.route('/').get((req, res) => {
    Guide.find()
        .then(guides => res.json(guides))
        .catch(err => res.status(400).json('Error: ' + err));
});

guidesRouter.route('/add').post((req, res) => {
    const guideName = req.body.guideName;
    const guideDescription = req.body.guideDescription;
    const guideContact = req.body.guideContact;
    const guidePhoto = req.body.guidePhoto;

    const newGuide = new Guide({guideName, guideDescription, guideContact, guidePhoto});

    newGuide.save()
        .then(() => res.json('Guide Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

guidesRouter.route('/:id').delete((req, res) => {
    Guide.findByIdAndDelete(req.params.id)
        .then(event => res.json('Guide deleted.'))
        .catch(err => res.status(400).json('Error ' + err));
});

guidesRouter.route('/update/:id').post((req, res) => {
    Guide.findById(req.params.id)
        .then(guide => {
            guide.guideName = req.body.guideName
            guide.guideDescription = req.body.guideDescription
            guide.guideContact = req.body.guideContact
            guide.guidePhoto = req.body.guidePhoto

            guide.save()
                .then(() => res.json('Guide Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});

export default guidesRouter;