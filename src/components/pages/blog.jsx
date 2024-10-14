import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogComponent from "../blog/blog-component";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogComponents: []
    }

    this.getBlogComponents = this.getBlogComponents.bind(this);
  }

  getBlogComponents() {
    axios
      .get("http://localhost:4000/books")
      .then(response => {
        this.setState({
          blogComponents: response.data.books
        })
      })
      .catch(error => {
        console.log(error);
      });
    }

  UNSAFE_componentWillMount() {
    this.getBlogComponents();
  }

  render() {
    const blogRecords = this.state.blogComponents.map(blogComponent => {
      return <BlogComponent key={blogComponent.books_id} blogComponent={blogComponent} />
    });

    return (
      <div className="blog-container">
        <div className="content-container">{blogRecords}</div>       
      </div>
    );
  }
}

export default Blog;