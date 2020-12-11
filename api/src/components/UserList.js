import React from 'react'
import {Container , Col , Row} from "react-bootstrap"
import UserCard from './UserCard'

function UserList({users}) {
    return (
    <Container>
        <Row >
            {users.map((user) => (
                <Col  key={user.id}>
                <UserCard user={user}  />
                </Col>
            ))}
        </Row>
    </Container>
    )
}

export default UserList
