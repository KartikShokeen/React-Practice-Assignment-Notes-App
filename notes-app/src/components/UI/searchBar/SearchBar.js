import { MdSearch } from "react-icons/md";
import "./SearchBar.css";

const SearchBar = ({ onSeachNote }) => {
  const searchNoteHandler= (event)=>{
    const searcedText=event.target.value;
    onSeachNote(searcedText)
  }
  return (
    <div className="search">
      <MdSearch className="searchIcons" size="0.7cm" />
      <input
        onChange={searchNoteHandler}
        type="text"
        placeholder="Search for Title"
      />
    </div>
  );
};
export default SearchBar;
