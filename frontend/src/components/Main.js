import React, { Component } from "react";
import Header from "./Header.js";
import Categories from "./Categories.js";
import "../styles/Main.css";


class Main extends Component {
    render() {
        return (
            <main>
                <Header />
                <h2>Книга кулинарных рецептов</h2>
                <Categories />
            </main>
        );
    }
}

export default Home;


