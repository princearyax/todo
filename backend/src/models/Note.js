//conventionally named as capital and singular
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    { timestamps: true } //mongo gives createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;