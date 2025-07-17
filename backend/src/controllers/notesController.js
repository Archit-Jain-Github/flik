import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Error fetching notes" });
  }
}

export const getNoteById = async (req, res) => {
  try {
    const notes = await Note.findById(req.params.id);
    if (!notes) {
      return res.status(404).json({ message: "Note not found!" });
    }
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ message: "Error fetching note" });
  }
}

export const createNote = async(req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({message: "Note created successfully", note: newNote});
  } catch (error) {
    console.error("Error creating notes:", error);
    res.status(500).json({ message: "Error creating notes" });
  }
}

export const updateNote = async(req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json({ message: "Note updated successfully" });
   } catch (error) {
    console.error("Error updating notes:", error);
    res.status(500).json({ message: "Error updating notes" });
  }
}

export const deleteNote = async(req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not deleted!" });
    }

    res.status(200).json({ message: "Note deleted successfully" });

  } catch (error) {
    console.error("Error deleting notes:", error);
    res.status(500).json({ message: "Error deleting notes" });
   }
}