require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moment = require('moment');
const { dbConnect, disconnect } = require('./lib/db')
const ClassModel = require('./schema/ClassModel')
const paypal = require('paypal-rest-sdk');
const PaymentModel = require('./schema/PaymentModel')
const ProgressModel = require('./schema/ProgressModel')
const ScheduleEntry = require('./schema/ScheduleEntry');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.use(cors());

paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECERET
});

// Replace these with your actual email and password
const gmailEmail = process.env.EMAIL_ADDRESS;
const gmailPassword = process.env.EMAIL_PASSWORD;

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});


app.get('/', (req, res) => {
    res.json({ greeting: 'hello World' });
});

app.get('/hi', async (req, res) => {
    try {
        await dbConnect();
        res.json({ message: "success" });
    } catch (error) {
        console.log(error)
        res.json({ message: "error" });
    }
})

app.post('/classes', async (req, res) => {
    try {
        const session = req.body.session;
        const time = req.body.time;
        const date = req.body.date;
        const onlineClass = req.body.class;
        const teacher = req.body.teacher;

        console.log(session, time, date, onlineClass, teacher);

        await dbConnect();

        const data = await ClassModel.create({
            session,
            date,
            time,
            teacher,
            class: onlineClass
        })
        console.log(data)
        res.json({ message: "success" });
    } catch (error) {
        res.json({ message: "error" });
    }

})

app.get('/all-classes', async (req, res) => {
    try {
        await dbConnect();
        const data = await ClassModel.find({})
        console.log(data)
        res.json({ message: "success", data });
    } catch (error) {
        console.log(error)
        res.json({ message: "error" });
    }

})

app.get('/classes', async (req, res) => {
    try {
        await dbConnect();

        const threeDaysFromNow = moment().add(3, 'days').toDate();

        // Query to find classes within 3 days from now
        const data = await ClassModel.find({
            date: {
                $gte: new Date(),
                $lte: threeDaysFromNow
            }
        });

        console.log(data);
        res.json({ message: "success", data });
    } catch (error) {
        console.error(error);
        res.json({ message: "error" });
    }
});

app.get('/classes/:className', async (req, res) => {
    try {
        await dbConnect();

        const className = req.params.className;


        const currentDate = new Date();
        const threeDaysLater = moment(currentDate).add(3, 'days').toDate();


        const data = await ClassModel.find({
            class: className,
            date: {
                $gte: currentDate,
                $lte: threeDaysLater
            }
        });

        console.log(data);
        res.json({ message: "success", data });
    } catch (error) {
        console.log(error);
        res.json({ message: "error" });
    }
});
