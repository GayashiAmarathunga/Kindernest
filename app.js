const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const paypal = require ("paypal-rest-sdk");
const engines = require("consolidate");

const mongoURL = "mongodb+srv://kindernestadmin:kindernest123@kindernest.0oh2wca.mongodb.net/?retryWrites=true&w=majority&appName=KinderNest"

mongoose.connect(mongoURL).then (()=> {
    console.log("MongoDB connected")

    })
    .catch((e)=>{
    console.log(e);
});

require('./models/PaymentDetails')
const User = mongoose.model("PaymentInfo")

app.post("/PaymentDetails", async(req,res) =>{
    const {id,name,mobile} = req.body; 
    console.log("Received data:", { id, name, mobile });

    try {
        await User.create({
            id: id,
            name: name,
            mobile: mobile,

        });
        res.send({ status: "ok", data: "Records Created"});
    } catch (error) {
        res.status(500).send({ status: "error", data: error.message });
        
    }

});

app.engine("ejs", engines.ejs);
app.set("views", "./views");
app.set("view engine", "ejs");

paypal.configure({
    mode: "sandbox", 
    client_id:
        "AQ56xE_fRT7gb0jy290keog_rmViX4JqhbUQFfD-sHSANWxbNZWnbSbgIzzATt3gqLfMpKWGxjIyDuGT",
    client_secret:
        "EGc281nhkocIFjP1t8PVN4dDvHSscqFqXsyEohiqPIcih2kjmJ1i3sA6vwN5oywww-FYkIHtePR_pqFE"
});


app.get("/", (req, res) => {
    res.render("index");
});


app.get("/paypal", (req, res) => {
    var create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://192.168.1.10:3000/success",
            cancel_url: "http://192.168.1.10:3000/cancel"
        },
        transactions: [
            {
                item_list: {
                    items: [
                        {
                            name: "item",
                            sku: "item",
                            price: "1.00",
                            currency: "USD",
                            quantity: 1
                        }
                    ]
                },
                amount: {
                    currency: "USD",
                    total: "1.00"
                },
                description: "This is the payment description."
            }
        ]
    };

    paypal.payment.create(create_payment_json, function(error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            res.redirect(payment.links[1].href);
        }
    });
});

app.get("/success", (req, res) =>{
    var PayerID = req.query.PayerID;
    var paymentId = req.query.paymentId;
    var execute_payment_json = {
        payer_id: PayerID,
        transactions: [
            {
                amount: {
                    currency: "USD",
                    total: "1.00"
                }
            }
        ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(
        error,
        payment
    ) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
            res.render("success");
        }
    });
});

app.get("cancel", (req, res) => {
    res.render("cancel");
});

app.listen(3000,() => {
    console.log("Node js server started.")

})