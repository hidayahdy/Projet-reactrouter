import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function MovieCard({movie}) {
  return (
    <div style={{marginTop:'50px'}}>
<Card style={{ width: '18rem' }}>
  <Card.Img  variant="top" style={{width:'100%',height:'300px'}} src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    
    </Card.Text>
    <Link to={`/movies/details/${movie.id}`} >
    <Button style={{borderRadius:'5px',height:'70%',color:'white',backgroundColor:'#000000'}}variant="primary">Details</Button>
    </Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard