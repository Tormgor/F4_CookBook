import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";


class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            categories: []
        }
    };

        componentDidMount() {
            this.loadCategories();
        }

    loadCategories() {
        fetch("http://127.0.0.1:8000/categories/").then(
            (response) => {
                if (response.status == 200) {
                return response.json();
                }
                return 'error request';
            }
        ).then(
            result => {
                    this.setState({
                        isLoaded: true,
                        categories: result
                    });
                console.log("set state:");
            }
        ).catch(
            (error) => {
                console.log("error:", error);
            }
        )
    }

    render() {
        console.log(this.state.categories, this.state.isLoaded);
        return (
            <categories>
                <nav>
                    <Link to="/">Main</Link>
                </nav>
                {this.state.categories.map(
                    (category) => { return category.category }
                )}
            </categories>
        );
    }
}

export default Categories;

