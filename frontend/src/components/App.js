import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Categories from "./Categories.js";
import Recipes from "./Recipes.js";
import Recipe from "./Recipe.js";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <nav>
                    <Link to="/">Main</Link>
                    <Link to="/category">Categories</Link>
                </nav>
                    <Switch>
                        <Route path='/category' element={<Categories />}></Route>
                        <Route path='/category/:catId/recipes/' element={<Recipes />}></Route>
                        <Route path='/category/:catId/recipe/:id' element={<Recipe />}></Route>
                        <Route path='/swagger' element={<Swagger />}></Route>
                        <Route path='/' element={<Main/>}></Route>
                    </Switch>
            </div>
        );
    }
}

export default App;

