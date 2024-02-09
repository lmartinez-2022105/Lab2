import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    size:{
        type:String,
        require: true,
        enum:['SMALL','MEDIUM', 'LARGE']
    },
    description:{
        type: String,
        minLenght: [4, 'The description its to short, please write a extended description']
    },
    age:{
        type: Number,
        require: true,
    },
    keeper:{
        type:String,
        require: true
    }
    
})

export default mongoose.model('animal', animalSchema)