import "./Note.css";
import { useState, useEffect } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
const Note = ({
  id,
  title,
  text,
  date,
  onDeleteNote,
  onUpdateNote,
  onAlertChange
}) => {
  const savedText = text;
  const savedTitle = title;
  const [noteText, setNoteText] = useState(savedText);
  const [noteTitle, setNoteTitle] = useState(savedTitle);

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    noteText.trim().length > 0 &&
    noteTitle.trim().length > 0 &&
    (noteText.trim() !== text || noteTitle.trim() !== title)
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [noteText, noteTitle, text, title]);

  const textCharacterLimit = 400;
  const textChangeHandler = (event) => {
    if (textCharacterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const titleChangeHandler = (event) => {
    if (event.target.value.length <= 45) setNoteTitle(event.target.value);
  };
  const updateChnageHandler = () => {
    if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
      const date = new Date();
      const updatedNote = {
        id,
        title: noteTitle,
        text: noteText,
        date: date.toLocaleDateString(),
      };
      onAlertChange("Note is updated SucessFully");
      onUpdateNote(updatedNote);
      setIsDisabled(true);
    }
  };
  return (
    <div className="notes">
      <input
        type="text"
        value={noteTitle}
        onChange={titleChangeHandler}
      ></input>
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        onChange={textChangeHandler}
      ></textarea>
      <div className="note-footer">
        <small> {date}</small>
        <span>
          <button
            className="update"
            onClick={updateChnageHandler}
            disabled={isDisabled}
            size="0.7cm"
          >
            update
          </button>
          <RiDeleteBin2Fill
            onClick={() => onDeleteNote(id)}
            className="delete"
            size="0.7cm"
            title="Delete Note"
          />
        </span>
      </div>
    </div>
  );
};

export default Note;
