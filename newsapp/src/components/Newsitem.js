import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props;
        return ( <
            div className = "my-3" >
            <
            div className = "card" >
            <
            span className = "position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style = {
                { left: '90%', zIndex: '1' } } > { source } <
            /span> <
            img src = {!imageUrl ? "https://cdn.mos.cms.futurecdn.net/MngwNVKYu9w9sYGws9RmC9-970-80.jpg" : imageUrl }
            className = "card-img-top"
            alt = "..." / >
            <
            div className = "card-body" >
            <
            h5 className = "card-title" > { title } < /h5> <
            p className = "card-text" > { description } < /p> <
            p className = "card-text" > < small className = "text-muted" > by {!author ? "Unknown" : author }
            on { new Date(date).toDateString() } < /small></p >
            <
            a rel = "noreferrer"
            href = { url }
            target = "_blank"
            className = "btn btn-sm btn-dark" > Read More < /a> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default Newsitem