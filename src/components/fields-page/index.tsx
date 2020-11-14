import React from 'react';
import './style.css';
import { Container } from '@material-ui/core';
import FieldsList from '../fields-list';


export default function FieldPage() {



    return (

        <Container maxWidth="lg">
            <h2 className="title">מה אנחנו עושים</h2>
            <FieldsList/>
        </Container>
    )
}