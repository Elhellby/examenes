import React, { useContext, useEffect, useState } from "react";
import ProcessContext from '../context/Process/ProcessContext';

import ListGroup from 'react-bootstrap/ListGroup';

export default function App() {
    const processContext = useContext(ProcessContext)
    return (
        <>
        <h3>Multiplos de 3</h3>
            <ListGroup>
                {
                    processContext.multipleThree.map(n => {
                        return <ListGroup.Item>{n}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </>

    );
}
