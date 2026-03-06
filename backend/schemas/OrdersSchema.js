const Schema = requrie('mongoose');



const OrdersSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String
   
});

modules.export={OrdersSchema};