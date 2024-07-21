import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CBS News",
      "title": "Sheila Jackson Lee, longtime Texas congresswoman, dies at 74 - CBS News",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiPGh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3Mvc2hlaWxhLWphY2tzb24tbGVlLWRpZXMtYWdlLTc0L9IBQGh0dHBzOi8vd3d3LmNic25ld3MuY29tL2FtcC9uZXdzL3NoZWlsYS1qYWNrc29uLWxlZS1kaWVzLWFnZS03NC8?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-20T16:18:43Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "POLITICO",
      "title": "Blinken points to wider pledges to support Ukraine in case US backs away under Trump - POLITICO",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiT2h0dHBzOi8vd3d3LnBvbGl0aWNvLmNvbS9uZXdzLzIwMjQvMDcvMjAvYmxpbmtlbi11a3JhaW5lLXN1cHBvcnQtdHJ1bXAtMDAxNjk5NTPSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-20T15:11:07Z",
      "content": null
    }];
  constructor() {
    super()
    this.state = {
      articles: this.articles
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=aef86ec7efee492f93f81688cb27928a";
    let data = await fetch(url);
    let parserData = await data.json();
    this.setState({
      articles: parserData.articles
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>---- Top Headlines ----</h2>
        <div className='row '>
          {this.state.articles?.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : "Blank Title"} description={element.description ? element.description : "Blank Description"}
                imgUrl={element.urlToImage ? element.urlToImage : "https://sportshub.cbsistatic.com/i/r/2024/07/19/3a60cc91-973c-493c-9dc7-5228c5141edf/thumbnail/1200x675/bae7d3b420fc13ad2a2076a5070f40e3/jake-paul-mike-perry-press-conference.jpg"}
                newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}
