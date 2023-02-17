import { Fragment, useState, useEffect } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import "./AddNote.css";

const AddNote = ({ onAddNote, onAlertChange }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    noteText.trim().length > 0 && noteTitle.trim().length > 0
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [noteText, noteTitle]);

  const textCharacterLimit = 200;
  const titleCharacterLimit = 50;

  const textChangeHandler = (event) => {
    if (textCharacterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const titleChangeHandler = (event) => {
    if (titleCharacterLimit - event.target.value.length >= 0)
      setNoteTitle(event.target.value);
  };

  const saveChangeHandler = () => {
    if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
      onAddNote(noteTitle, noteText);
      setNoteTitle("");
      setNoteText("");
      setIsVisible(!isVisible);
      onAlertChange("Note Added Sucessfully");
    }
  };

  const onClickHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Fragment>
      <BiMessageAltAdd
        className="add"
        size="1cm"
        onClick={onClickHandler}
        title="Add New Note"
      />
      {isVisible && (
        <div className="note">
          <input
            placeholder="Type to add title.."
            value={noteTitle}
            onChange={titleChangeHandler}
          ></input>
          <textarea
          rows="6"
            placeholder="Type to add note.."
            value={noteText}
            onChange={textChangeHandler}
          ></textarea>
          <div className="note-footer">
            <small>{textCharacterLimit - noteText.length} remaining </small>
            {/* <small>{titleCharacterLimit - noteTitle.length} remaining</small> */}
            <button
              className="save"
              size="1cm"
              onClick={saveChangeHandler}
              disabled={isDisabled}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddNote;
