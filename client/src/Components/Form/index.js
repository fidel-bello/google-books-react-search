import React from "react";
import './style.css'

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong style={{ fontSize: 'x-large' }}>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search Book Here"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="button btn-lg float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
