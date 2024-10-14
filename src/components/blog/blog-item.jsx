import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class BlogItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogItemClass: "" 
        }
    }

    handleMouseEnter() {
        this.setState({ blogItemClass: "image-blur" });
    }

    handleMouseLeave() {
        this.setState({ blogItemClass: "" });
    }

    render() {
        const {books_id, books_name, books_author, books_image} = this.props.item;

        return (
            <div className="blog-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div
                    className={"blog-img-background " + this.state.blogItemClass}
                    style={{
                        backgroundImage: "url(" + books_image + ")"
                    }}
                />

                <div className="text-wrapper">
                    <div className="subtitle">{books_name}</div>
                    <div className="subtitle">{books_author}</div>
                </div>
            </div>
        );
    }
}