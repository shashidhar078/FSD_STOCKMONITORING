const model=require('mongoose');
 
const {HoldingsSchema}=require('../schema/HoldingsSchema');

const HoldingsModel=new model("holding",HoldingsSchema); 

modules.exports={HoldingsModel};