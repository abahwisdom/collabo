import React, {useState, useEffect} from 'react';
import {Container, Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const DisplayOtherProjects=(props)=>{

    const [display, setDisplay]= useState('block');
    
    useEffect(()=>{
        if (props.search===''){setDisplay('block')}
        else if (props.project.title.toLowerCase().includes(props.search.toLowerCase())===false&&
        props.project.description.toLowerCase().includes(props.search.toLowerCase())===false){
          setDisplay('none')
        }else{setDisplay('block')}
    },[props.search, props.project.title, props.project.description])

    return(
        <>
        <Container style={{'display':`${display}`}} >
          <Card className="mt-2">
            <Card.Header className=' text-white'><h5>{props.project.title}</h5>
              <div style={{'font-size':'small','font-family': 'Titillium Web'}}>Admin: {props.project.creator_name} </div>
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2">{props.project.date} </Card.Subtitle>
              <Card.Text>
                <h6>{props.project.description}</h6>
              </Card.Text>
              <div>
              <Button variant="primary" as={Link} to='/home/member-project' className='mr-2' size='sm' onClick={()=>{props.setCurrent(props.project)}} >Open</Button>
              </div>
            </Card.Body>
          </Card>
        </Container> 
        </>
    )
}

export default DisplayOtherProjects