import React from "react";


function Jumbotron ({ children }) {
    return (
        <div className ="jumbotron jumbotron-fluid">
            <div className="container text-center">
                {children}
            </div>
        </div>
    )
}

export default Jumbotron;