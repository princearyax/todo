import Note from "../models/Note.js";
import expressError from "../utilities/expressError.js";

export const getAllNotes = async (_, res)=>{
    const notes = await Note.find({}).sort({createdAt:-1});//-1 to sort newest first
    if(!notes) throw new expressError("Error notesContoller", 500);
    res.status(200).send(notes);
}

export async function getNoteById(req, res) {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message: "note not found"});
    res.status(200).json({note, message: "note found" });
}

export async function createNote(req, res) {
    // const { title, content } = req.body;
    const newNote = new Note(req.body.note);
    const savedNote = await newNote.save();
    res.status(201).json({...savedNote, message: "note created" });
}

export async function updateNote(req, res) {
    // console.log(req.body)
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
    if(!updatedNote) return res.status(404).json({message: "note not found"});
    res.status(201).json({...updatedNote, message: "note created" });
}

export async function deleteNote(req, res) {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message: "note not found"});
    res.json({message: "successfully deleted"}); 
}