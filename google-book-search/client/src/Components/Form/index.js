import React from "react";

function Form(props) {
    return (
    <div className="card">
        <div className="card-header">
        Search your books here
        </div>
        <div className="card-body">
            
        <div className ="form-group">
            <input className="form-control" 
            type="text"
            value={props.search}
            name="searchBooks"
            placeholder="Type book names you are looking for"
            onChange={props.handleInputChange}
            />
        </div>
        
        <button type="submit" className="btn btn-primary submitBtn" onClick={props.handleFormSubmit}>
            Submit
        </button>
        </div>
    </div>
    )
}

export default Form;