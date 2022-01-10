import React, { useState } from 'react';
import { Button, Container, Row, Card, Form, Col, Stack, } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';
import itensLojaData from '../../components/itensLojaData';

export default function Cards() {
    const produtosData = itensLojaData;
    const [produtos, setProdutos] = useState(produtosData);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function operacaoNumeros(operacao, key) {
        for (let i = 0; i < produtos.length; i++) {
            const row = produtos[i];
            let valorSomado = ('value' in row ? Number(row.value) : 1);
            if (row.name === key) {
                if (operacao === '+') {
                    valorSomado = valorSomado + 1;
                } else if (operacao === '-') {
                    if (valorSomado > 1) {
                        valorSomado = valorSomado - 1;
                    }
                }

                produtos[i].value = valorSomado;
            }
        }
        setProdutos(produtos);
        forceUpdate();
    }

    function alertar(mensagem) {
        alert(mensagem ? mensagem : 1)
    }

    return (
        <>
            <Container fluid="lg">
                <Row className="justify-content-md-center ajsHeader">
                    {produtos.map((produto) =>
                        <Card style={{ width: '18rem' }} key={produto.key}>
                            <Card.Img variant="top" src={produto.image} />
                            <Card.Body>
                                <Card.Title>{produto.name.toString()}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Stack direction="horizontal" gap={3}>
                                    <Button variant="primary" onClick={(event) => { alertar(produto.value) }}>Add Cart</Button>
                                    <Col xs={3}>
                                        <Form.Control id="valorData" placeholder="1" maxLength={2} value={'value' in produto && Number(produto.value) ? produto.value : 1} />
                                    </Col>
                                    <AiOutlinePlus className='cursorPointer' onClick={(event) => { operacaoNumeros('+', produto.name.toString()); }} />
                                    <AiOutlineLine className='cursorPointer' onClick={(event) => { operacaoNumeros('-', produto.name.toString()); }} />
                                </Stack>
                            </Card.Body>
                        </Card>
                    )}
                </Row>
            </Container>
        </>
    )
}