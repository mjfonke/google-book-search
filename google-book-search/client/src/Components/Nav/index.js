import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
            Google Search Books
            </a>

            <div id="navbar nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><button className="btn btn-danger text-white">Search Books</button></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/saved"><button className="btn btn-danger text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;