import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        required: true,
        minLength: 6,
        type: String
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: 'Post' }]
})

export default model("User", userSchema)