import React from 'react';

function Form(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search"><h2>Search from and save books</h2></label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        type="text"
                        placeholder="search here"
                        id="search"
                    />
                    <button className="btn btn-dark mt-3 mb-5">
                        search
                </button>
                </div>
            </form>
        </div>
    );
}

export default Form;