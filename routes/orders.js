import express from 'express';
import Order from "../models/order.model.js";

const ordersRouter = express.Router();

ordersRouter.route('/').get((req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

ordersRouter.route('/add').post((req, res) => {
    const orderClientName = req.body.orderClientName;
    const orderClientPhone = req.body.orderClientPhone;
    const orderClientEmail = req.body.orderClientEmail;
    const orderEventId = req.body.orderEventId;
    const orderQuantity = req.body.orderQuantity;
    const orderTotal = req.body.orderTotal;

    const newOrder = new Order({orderClientName, orderClientPhone, orderClientEmail, orderEventId, orderQuantity, orderTotal});

    newOrder.save()
        .then(() => res.json('Order Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

ordersRouter.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error ' + err));
});

ordersRouter.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(order => res.json('Order deleted.'))
        .catch(err => res.status(400).json('Error ' + err));
});

ordersRouter.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            order = req.body;

            order.save()
                .then(() => res.json('Order Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});

export default ordersRouter;