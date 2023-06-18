import mongoose from "mongoose";

import Product from "../model/ProductSchema.js";
import {products} from "../constants/Data.js";

const DefaultData = () => {
    try {
        Product.insertMany(products);
        console.log("Default Data inserted Successfully");
    }
    catch(err){
        console.log("Error while inserting default data :- "+err);
    }

}

export default DefaultData;

