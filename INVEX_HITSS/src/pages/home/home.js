import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import MultipleThree from '../../components/MultipleThree'
import PrimeNumber from '../../components/PrimeNumber';

import ProcessContext from '../../context/Process/ProcessContext';

const Home = () => {
    const processContext = useContext(ProcessContext)

    const [umpteenth, setUmpteenth] = useState(0)

    return (
        <>
            <Container className='p-4' fluid>
                <Row>
                    <Col md={4} s>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>N-ésimo</Form.Label>
                                <Form.Control type="text" placeholder="N-ésimo" onChange={(e) => setUmpteenth(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={() => {
                                processContext.getPrimeNumber(umpteenth)
                                processContext.getMultipleThree(umpteenth)
                            }}>
                                Calcular
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6} s>
                        <PrimeNumber />
                    </Col>
                    <Col md={6} s>
                        <MultipleThree />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;