import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import BlogDetail from './blog/blog-detail';
import NoMatch from './pages/no-match';
import Icons from "./helpers/icons";

export default class App extends Component {
    constructor(props) {
        super(props);

        Icons();
    }

    render() {
        return (
            <div className='container'>
                <Router>
                    <div>
                        < NavigationContainer />

                        <Routes>
                            <Route path='/' element ={<Home />} />
                            <Route path='/about-us' element ={<About />} />
                            <Route path='/contact' element ={<Contact />} />
                            <Route path='/blog' element ={<Blog />} />
                            <Route path='/b/:slug' element ={<BlogDetail />} />
                            <Route path= '*' element ={<NoMatch />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}
