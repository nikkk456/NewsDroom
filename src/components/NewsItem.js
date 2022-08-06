import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { Title, Description, imageUrl, newsUrl, date, author, source } = this.props;
    return (
      <div>
        <div className="card">
          
          <img src={imageUrl ? imageUrl : "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/08/04/2527577-untitled-design-2022-08-04t193155.960.png"} className="card-img-top" alt="..." />
          
          <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left: '85%'}}>
                {source}
          </span>      
            <h5 className="card-title">{Title}...</h5>
            <p className="card-text">{Description}...</p>
            <p className='card-text'><small className='text-muted'>By: {author ? author : "Unknown"} On  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
