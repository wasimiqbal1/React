import React, { Component } from 'react';
import NewsItem from './Newsitem';

class News extends Component {
    render() {
        return (
            <div>
                This is a news Component
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                
            </div>
        );
    }
}

export default News;