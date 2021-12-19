import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageUrl, url} = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                <img src={!imageUrl?"https://cdn.mos.cms.futurecdn.net/MngwNVKYu9w9sYGws9RmC9-970-80.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Newsitem
