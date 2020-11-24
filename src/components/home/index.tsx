import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './index.css';




export default function Home() {


    return (
        <div className="bg-home">
            <h1 className="title-home">משרד עורכי דין אסתי קוך</h1>
            <Button variant="contained" color="primary" size="large">צור קשר</Button>
        </div>
    )

}

