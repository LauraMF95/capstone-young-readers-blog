import React, { Component } from 'react';
import axios from "axios";

import BlogItem from './blog-item';

export default class BlogContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my blog",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getBlogItems();
        } else {
            this.getBlogItems(filter);
        }

  
    }

    getBlogItems(filter = null) {
        axios
            .get("http://localhost:4000/books")
            .then(response => {
                if (filter) {
                    this.setState({
                        data: response.data.books.filter(item => {
                            return item.books_category === filter;
                        })
                    });
                } else {
                    this.setState({
                        data: response.data.books
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    blogItems() {
        return this.state.data.map(item => {
            return <BlogItem key={item.books_id} item={item} />
        })
    }

    componentDidMount() {
        this.getBlogItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className='homepage-wrapper'>
                <div className='filter-links'>
                    <button className='btn' onClick={() => this.handleFilter("Fantasy")}>
                        Fantasy
                    </button>

                    <button className='btn' onClick={() => this.handleFilter("Adventures")}>
                        Adventures
                    </button>

                    <button className='btn' onClick={() => this.handleFilter("Romance")}>
                        Romance
                    </button>

                    <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
                        All
                    </button>
                </div>

                <div className='blog-items-wrapper'>
                    {this.blogItems()}
                </div>
            </div>
        );
    }
}
