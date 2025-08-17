import Cast from "../models/Cast.js";

export default {
    getAll(){
        return Cast.find().lean();
    },
    create(castData){
        return Cast.create(castData)
    }
}