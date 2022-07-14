import React, { Component} from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom"


class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Main</Link><div>  |  </div>
                    <a href="/swagger"><h4>Документация API</h4></a>
                </nav>
            </header>
        );
    }
}

export default Header;