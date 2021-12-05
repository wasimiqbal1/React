import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageUrl, url} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://i.cdn.newsbytesapp.com/images/l207_5971637399132.jpg":imageUrl} className="card-   img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" to="http://example.com" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Newsitem
