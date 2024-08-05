import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://tomato:tomato123@cluster0.fb3mm34.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}