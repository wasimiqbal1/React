import React, { Component } from 'react';
import NewsItem from './Newsitem';

class News extends Component {
    articles = [
        {"source": { "id": "nbc-news", "name": "NBC News" },
        "author": "Marlene Lenthang",
        "title": "Video shows dramatic rescue of baby, 9 others from rushing floodwaters in Washington - NBC News",
        "description": "Dramatic video shows the moment U.S. Coast Guard helicopter crew members rescue 10 people, including a baby, from murky floodwaters that have inundated parts of Washington state following record rainfall in the Pacific Northwest.",
        "url": "https://www.nbcnews.com/news/weather/video-shows-dramatic-rescue-baby-9-others-rushing-floodwaters-washingt-rcna5678",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-11/21116-washington-coast-guard-mb-1135-6def47.jpg",
        "publishedAt": "2021-11-16T16:09:01Z",
        "content": "Dramatic video shows the moment U.S. Coast Guard helicopter crew members rescue 10 people, including a baby, from murky floodwaters that have inundated parts of Washington state following record rain… [+1422 chars]"
    },
    {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Josh Rogin",
        "title": "Opinion | Biden administration soon to announce diplomatic boycott of the Beijing Olympics - The Washington Post",
        "description": "The compromise measure is unlikely to please human rights activist or the Chinese government.",
        "url": "https://www.washingtonpost.com/opinions/2021/11/16/beijing-olympics-2022-biden-partial-boycott/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/X7S4RWCDSYI6ZFAEKCRIVCFZZU.jpg&w=1440",
        "publishedAt": "2021-11-16T15:32:14Z",
        "content": "Although the administration technically has not finalized this decision, a formal recommendation has been made to the president and he is expected to approve it before the end of the month, administr… [+4881 chars]"
    },
    {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Adela Suliman",
        "title": "Henry Macklowe divorce art sells for $676 million at Sotheby's auction - The Washington Post",
        "description": "The Macklowe Collection, which included artwork by Mark Rothko, Jackson Pollock and Cy Twombly, is the most valuable auction ever held in the 277-year history of Sotheby’s.",
        "url": "https://www.washingtonpost.com/arts-entertainment/2021/11/16/macklowe-collection-divorce-art-auction/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VPQIZMR6MII6ZPLP3I3W6RZQJY.jpg&w=1440",
        "publishedAt": "2021-11-16T14:03:45Z",
        "content": "The Macklowe Collection, as it became known, garnered $676.1 million in sales late Monday in the presence of more than 300 art lovers, according to auction house Sothebys. The eye-watering figure is … [+3648 chars]"
    }
]

    constructor(){
        super();
        console.log("Hello I am a constructor from News Component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        console.log("CDM")
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
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage}
                    newsUrl= {element.url}/>
                </div>
                })}
                
            </div>
        </div>
        );
    }
}

export default News;