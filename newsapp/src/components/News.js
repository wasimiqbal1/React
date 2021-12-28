import React, { useEffect, useState } from "react";
import NewsItem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    // document.title = `${capitlizeFirstLetter(props.category)} - Daily News`;

    const capitlizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f3168e5e3a8491c9485b6f0963bb15e&page=${page}&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)

    }
    useEffect(() => {
        document.title = `${capitlizeFirstLetter(props.category)} - Daily News`;
        updateNews();
    }, [])


    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=
    ${props.category}&apiKey=3f3168e5e3a8491c9485b6f0963bb15e&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)


    };

    return ( <
            >
            <
            h1 className = "text-center"
            style = {
                { margin: "35px 0px", marginTop: "90px" }
            } >
            News - Top { capitlizeFirstLetter(props.category) }
            Headlines <
            /h1> { loading && < Spinner / >
        } <
        InfiniteScroll dataLength = { articles.length }
    next = { fetchMoreData }
    hasMore = { articles.length !== totalResults }
    loader = { < Spinner / > } >
        <
        div className = "container" >
        <
        div className = "row" > {
            articles.map((element) => {
                return ( <
                    div className = "col-md-4"
                    key = { element.url } >
                    <
                    NewsItem title = { element.title ? element.title : "" }
                    description = {
                        element.description ? element.description : ""
                    }
                    imageUrl = { element.urlToImage }
                    url = { element.url }
                    author = { element.author }
                    date = { element.publishedAt }
                    source = { element.source.name }
                    /> < /
                    div >
                );
            })
        } <
        /div> < /
    div > <
        /InfiniteScroll> < / >
);

}

News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};



export default News;