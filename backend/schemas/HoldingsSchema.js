const Schema = requrie('mongoose');



const HoldingsSchema=new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net:String,
    day: String,
});

modules.export(HoldingsSchema);