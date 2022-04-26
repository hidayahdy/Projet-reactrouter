import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

function MovieDetails({movies}) {
    let {id}=useParams();
    let navigate=useNavigate();
  return (
    <div>
      
{
movies.filter((el)=>el.id==id).map((el)=>
(<div style={{ display: "block",justifyContent:'center'}}>
<span style={{ fontFamily:'arial',fontSize:'30px',color:'#000000'}}>{el.title}</span>
<br></br>
{el.description}
<br></br>
<br></br>
<iFrame width="420" height="315"
src={el.trailer}>
</iFrame>
<br></br>
<Button style={{borderRadius:'5px',height:'50px',width:'100px',color:'white',backgroundColor:'#000000'}} onClick={()=>navigate('/movies')}>Go Back </Button>
   </div>)

)

}



    </div>
  )
}

export default MovieDetails