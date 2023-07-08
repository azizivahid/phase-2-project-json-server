import React from 'react';
import '../css/BookLists.css';

function SelectForm({ handleFormSubmit, handleSelectChange, match }) {
  
  return (
    <div className="select-div">
      <form className="select-form" onSubmit={e => handleFormSubmit(e)}>
        <div className="select">
          <select defaultValue="" name="selections" onChange={e => handleSelectChange(e)} required>
            <option value="" disabled>
              {match.url === '/' ? "Add to a List" : "Move to a New List"}
            </option>
            <option value="to-read">To Read List</option>
            <option value="currently-reading">Currently Reading List</option>
            <option value="have-read">Have Read List</option>
          </select>
        </div>
        <div>
          <input className="list-btn" type="submit" value={match.url === '/' ? "Add to List" : "Move to List"} />
        </div>
      </form>
    </div>
  )
}

export default SelectForm;
