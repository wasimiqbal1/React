import React, { Component } from 'react';
import NewsItem from './Newsitem';

class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3f3168e5e3a8491c9485b6f0963bb15e";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    
    render() {
        console.log("render")
        return (
            <div className="container my-3">
                <h2>News - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key = {element.url} >
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl = {element.urlToImage}
                    newsUrl= {element.url}/>
                </div>
                })}
                
            </div>
        </div>
        );
    }
}

export default News;