import React, { Component } from "react";
import { withRouter } from './withRouter';
import axios from "axios";

class BlogDetail extends Component {

    componentDidMount() {
        const { blogId } = this.props.params;
        console.log('Blog ID:', blogId);
    }

    render() {
        return (
        <div>
            <h1>Blog Detail Page</h1>
            <p>ID del blog: {this.props.params.blogId}</p>
        </div>
        );
    }
}

export default withRouter(BlogDetail);