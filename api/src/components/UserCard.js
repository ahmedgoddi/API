import React from 'react'
import {Card , Button} from "react-bootstrap"
import "../App.css"


const toInitials = (str) => {
    return str.trim().split(" ").map((word) => word[0].toUpperCase()).join("")
    }

function UserCard({user}) {
    
    return (
    <div >
        <Card  style={{ width: '100%' , margin:"15px" , boxShadow : "0 0px 5px black"}}>
        <div className="avatar">
    <span>{toInitials(user.name)}</span>
        </div>
        <Card.Body>
    <Card.Title>{user.name}</Card.Title>
        <Card.Text>
            {user.email}
        </Card.Text>
        <Card.Text>
            {user.phone}
        </Card.Text>
        <Card.Text>
            {"@" + user.username}
        </Card.Text>
        <Button variant="primary">Go To Profile</Button>
        </Card.Body>
        </Card>
    </div>
    )
}

export default UserCard
