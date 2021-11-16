import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-11/21116-washington-coast-guard-mb-1135-6def47.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/Newsitem" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Newsitem
