import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: 'in',
        category:'general',
        pageSize: 20
      }
      static propTypes={
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
      }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: true,
            page: 1,
            totalarticle: 0  
        }
        document.title = `${this.props.category} - NewsDroom`
    }
    async componentDidMount(){
        this.props.setProgress(10);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59d7d123efe5481a8c3083c2473533ac&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        
        this.setState({articles: parsedData.articles, totalarticle: parsedData.totalResults, loading: false});
        this.props.setProgress(100);
    }

    fetchMoreData = async() => {
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59d7d123efe5481a8c3083c2473533ac&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({articles: this.state.articles.concat(parsedData.articles), 
                      totalarticle: parsedData.totalResults,
                      page: this.state.page +1,
                      loading: false});
    };
  render() {
    return (
      <div className='container my-2'>
        <h2 className='text-center' style={{margin :'30px 0px'}}>NewsDroom - Top Headlines</h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalarticle}
          loader={<Spinner/>}
        >
        <div className='row my-2' >
            { this.state.articles.map((element)=>{
                return <div className='col-md-3 mx-1' key={element.url}>
                <NewsItem  Title={element.title?element.title.slice(0,45):""} Description={element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })}  
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
