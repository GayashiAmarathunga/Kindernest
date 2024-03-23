const mongoose = require("mongoose");

const PaymentDetailsSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, "Please enter your child student id."]
    },
    name: {
        type: String
    },
    mobile: {
        type: String,
        required: [true, "Please enter your mobile number to receive the confirmation."]
    }
}, {
   
    timestamps: true,
},{
    
    collection: "PaymentInfo"
});

mongoose.model("PaymentInfo", PaymentDetailsSchema);
