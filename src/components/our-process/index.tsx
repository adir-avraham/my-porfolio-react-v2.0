import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Title from '../title';
import MyCard from '../my-card';
import { processArr } from '../../content/process';
import SubTitle from '../sub-title';


export default function OurProcess() {



    return (
        <Container maxWidth="md">
            <Title text="התהליך שלנו"/>
            <SubTitle text="אנו משרד בוטיק בתחום הביטוח והנזיקין. שלא כמו משרדי עורכי דין ענקיים, אנו נתייחס לעניינך כמו העניינים שלנו. אנו נלווה אותך בתהליך כדי שתוכל לעבור אותו בצורה חלקה ופשוטה."/>
            <Grid container direction="row" justify="space-evenly" spacing={6}>
                    {processArr.map((p: any) => 
                    <Grid key={p.img} item xs={12} md={4}>
                    <MyCard img={p.img} title={p.title} description={p.description}/>
                    </Grid>
                    )}
            </Grid>
        </Container>
    )


}