import React from 'react';
import { Button, Card, Form, Col, Stack, Container, Row } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'
import Note from '../../assets/Images/note.jpg';
import Headset from '../../assets/Images/headset.jpg';
import Teclado from '../../assets/Images/Teclado.jpg';
import tecladoRedragon from '../../assets/Images/tecladoRedragon.jpg';
import Mouse from '../../assets/Images/mouse.jpg';
import mouseRazer from '../../assets/Images/mouseRazer.jpg';

const produtos = [
    {
        name: 'Notebook',
        image: Note
    },
    {
        name: 'Headset',
        image: Headset
    },
    {
        name: 'Teclado',
        image: Teclado
    },
    {
        name: 'tecladoRedragon',
        image: tecladoRedragon
    },
    {
        name: 'Mouse',
        image: Mouse
    },
    {
        name: 'mouseRazer',
        image: mouseRazer
    }];



export default function Cart() {
    return (
        <>
            <Container fluid="lg">
                <Row className="justify-content-md-center ajsHeader">
                    {produtos.map((produtos) =>

                        < Card style={{ width: '18rem' }} key={produtos.name.toString()}>
                            <Card.Img variant="top" src={produtos.image} />
                            <Card.Body>
                                <Card.Title>{produtos.name.toString()}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Stack direction="horizontal" gap={3}>

                                    <Button variant="primary">Add Cart</Button>
                                    <Col xs={2}>
                                        <Form.Control placeholder="1" maxLength={1}/>
                                    </Col>
                                    <AiOutlinePlus />
                                    <AiOutlineLine />
                                </Stack>
                            </Card.Body>
                        </Card>
                    )
                    }
                </Row>
            </Container>

        </>
    )
}