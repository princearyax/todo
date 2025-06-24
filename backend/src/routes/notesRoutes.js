import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../controllers/notesController.js";
import asyncHandler from "../utilities/asyncHandler.js";

const router = express.Router();

router.get("/", asyncHandler(getAllNotes));
router.get("/:id", asyncHandler(getNoteById));
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;