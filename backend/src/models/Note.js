import mongoose from "mongoose";

//create
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAT, updatedAT
  }
);
const Note = mongoose.model("Note", noteSchema);

export default Note;
