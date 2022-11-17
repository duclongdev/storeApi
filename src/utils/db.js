import mongoose from "mongoose";
import { baseConfig } from "../configs";

export const connect = ()=>{
    return mongoose.connect(baseConfig.dbUrl);
}