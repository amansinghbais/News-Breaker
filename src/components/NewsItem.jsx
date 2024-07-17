import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsItem = ({article}) => {
  return (
    <Card style={{ maxWidth: '345px' }} className='bg-dark text-light d-inline-block m-2 p-2'>
      <Card.Img variant="top" src={article.urlToImage} style={{height: "200px", width: "100%"}} />
      <Card.Body>
        <Card.Title>{ article.title.slice(0,50) + "..."}</Card.Title>
        <Card.Text>{ article.description ? article.description.slice(0,90): "This news is not available" }</Card.Text>
        <Button variant="primary" href={article.url} target='__blank'>Read more</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsItem