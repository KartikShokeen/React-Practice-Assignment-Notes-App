import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import NotesList from "./components/notes/notesList/NotesList";
import Header from "./components/UI/header/Header";
import AddNote from "./components/notes/addNote/AddNote";
import Alert from "./components/UI/alert/Alert";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const alertChnageHandler = (message) => {
    setAlert(message);

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const addNoteHandler = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title,
      text,
      date: date.toLocaleDateString(),
    };
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNoteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify([...newNotes]));
    alertChnageHandler("Note is deleted Sucessfully !!");
  };
  const updateNoteHandler = (toupdatenote) => {
    const updatedNotes = notes.map((note) =>
      note.id === toupdatenote.id ? toupdatenote : note
    );
    localStorage.setItem("notes", JSON.stringify([...updatedNotes]));
    setNotes(updatedNotes);
  };

  const searchNotesHandler = (notesList) => {
    return notesList.filter((note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <div className="container">
      <Header onSeachNote={setSearchText} />
      <Alert alert={alert} />
      <AddNote onAddNote={addNoteHandler} onAlertChange={alertChnageHandler} />
      <NotesList
        notes={searchNotesHandler(notes)}
        onUpdateNote={updateNoteHandler}
        onDeleteNote={deleteNoteHandler}
        onAlertChange={alertChnageHandler}
      />
    </div>
  );
};
export default App;
