import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import NewsItem from './NewsItem';

const Main = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=40fe50c199da4e9aa00357cc48517e60&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  },[category])

  return (
    <div className="p-4">
      <h2 className="text-center">Latest <Badge bg="primary">News</Badge></h2>
      {articles.map((article, index) => {
        return article.urlToImage && <NewsItem key={index} article={article} />
      })}
    </div>
  )
}

export default Main