import React, { Component } from 'react';
import NewsItem from './Newsitem';

class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>News - Top Headlines</h2>
                <NewsItem title="myTitle" description="mydesc"/>
                <NewsItem/>
                <NewsItem/>              
            </div>
        );
    }
}

export default News;