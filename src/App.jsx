import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";

export default function App() {
  const [notes, setNotes] = useState([]);

  // Cargar notas desde localStorage al inicio
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Guardar notas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    if (text.trim() !== "") {
      setNotes([...notes, { text, completed: false }]);
    }
  };

  const deleteNote = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      setNotes(notes.filter((_, i) => i !== index));
    }
  };

  const toggleComplete = (index) => {
    setNotes(
      notes.map((note, i) =>
        i === index ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">📒 Notes App</h1>
      <NoteForm addNote={addNote} />
      <div className="mt-6 w-full max-w-md space-y-3">
        {notes.length === 0 ? (
          <p className="text-center text-gray-300">No notes yet. Add one! 📝</p>
        ) : (
          notes.map((note, index) => (
            <Note
              key={index}
              index={index}
              text={note.text}
              completed={note.completed}
              deleteNote={deleteNote}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}
