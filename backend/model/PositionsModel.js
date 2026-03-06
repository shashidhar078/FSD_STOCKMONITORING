const model=require('mongoose');
 
const {PositionsSchema}=require('../schema/PositionsSchema');

const PositionsModel=new model("position",PositionsSchema); 

modules.exports={PositionsModel};