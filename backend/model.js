import mongoose from "mongoose";
let UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 18, min: 18 },
});
export let Users = mongoose.model("Users", UserSchema);
