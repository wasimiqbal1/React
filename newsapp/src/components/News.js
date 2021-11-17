import React, { Component } from 'react';
import NewsItem from './Newsitem';

class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>News - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imageUrl = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-11/21116-washington-coast-guard-mb-1135-6def47.jpg"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;