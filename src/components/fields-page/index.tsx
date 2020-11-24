import React from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import FieldsList from '../fields-list';
import Title from '../title';

export default function FieldPage() {



    return (

        <Container maxWidth="lg">
            <Title text="מה אנחנו עושים"/>
            <FieldsList/>
            <Grid  
            container
            direction="row"
            justify="center">
            <Button variant="contained" color="primary" size="large" style={{margin: "5%"}}>
            צור קשר
            </Button>
        
            </Grid>
        </Container>
    )
}