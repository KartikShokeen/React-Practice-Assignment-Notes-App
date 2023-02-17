import Note from "../note/Note";
import "./NoteList.css";
import { Fragment, useEffect, useState } from "react";

const NotesList = ({ notes, onDeleteNote, onUpdateNote, onAlertChange }) => {
  const [isEmpty, setisEmpty] = useState(true);
  useEffect(() => {
    notes.length === 0 ? setisEmpty(false) : setisEmpty(true);
  }, [notes]);

  return (
    <Fragment>
      <h2> Saved Notes</h2>
      <div className="notes-list">
        {isEmpty ? (
          notes
            .sort()
            .map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                text={note.text}
                date={note.date}
                onDeleteNote={onDeleteNote}
                onUpdateNote={onUpdateNote}
                onAlertChange={onAlertChange}
              />
            ))
        ) : (
          <h4> No notes present !!</h4>
        )}
      </div>
    </Fragment>
  );
};

export default NotesList;
