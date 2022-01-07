import React, { useState } from 'react';
import { Button, Card, Form, Col, Stack, Container, Row } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'
import Note from '../../assets/Images/note.jpg';
import Headset from '../../assets/Images/headset.jpg';
import Teclado from '../../assets/Images/Teclado.jpg';
import tecladoRedragon from '../../assets/Images/tecladoRedragon.jpg';
import Mouse from '../../assets/Images/mouse.jpg';
import mouseRazer from '../../assets/Images/mouseRazer.jpg';

const produtosData = [
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
    const [produtos, setProdutos] = useState(produtosData);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function operacaoNumeros(operacao, key) {
        for (let i = 0; i < produtos.length; i++) {
            const row = produtos[i];
            let valorSomado = ('value' in row ? Number(row.value) : 1);
            if (row.name === key) {
                console.log(row);
                if (operacao === '+') {
                    valorSomado = valorSomado + 1;
                } else if (operacao === '-') {
                    if (valorSomado > 1) {
                        valorSomado = valorSomado - 1;
                    } else {
                        console.log('erro');
                    }
                }

                produtos[i].value = valorSomado;
            }
        }
        setProdutos(produtos);
        forceUpdate();
    }



    return (
        <>
            <Container fluid="lg">
                <Row className="justify-content-md-center ajsHeader">
                    {produtos.map((produto) =>
                        <Card style={{ width: '18rem' }} key={produto.name.toString()}>
                            <Card.Img variant="top" src={produto.image} />
                            <Card.Body>
                                <Card.Title>{produto.name.toString()}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Stack direction="horizontal" gap={3}>
                                    <Button variant="primary">Add Cart</Button>
                                    <Col xs={3}>
                                        <Form.Control placeholder="1" maxLength={2} value={'value' in produto && Number(produto.value) ? produto.value : 1} />
                                    </Col>
                                    <AiOutlinePlus className='cursorPointer'
                                        onClick={(event) => {
                                            operacaoNumeros('+', produto.name.toString());
                                        }} />
                                    <AiOutlineLine className='cursorPointer'
                                        onClick={(event) => {
                                            operacaoNumeros('-', produto.name.toString());
                                        }} />
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