import React, { useContext, useEffect } from "react";
import ProcessContext from '../context/Process/ProcessContext';

import ListGroup from 'react-bootstrap/ListGroup';

export default function PrimeNumber() {
    const processContext = useContext(ProcessContext)
    return (
        <>
        <h3>Numeros primos</h3>
            <ListGroup>
                {
                    processContext.primeNumber.map(n => {
                        return <ListGroup.Item>{n}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </>
    );
}
