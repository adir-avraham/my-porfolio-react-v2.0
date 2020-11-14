import React, { useState } from 'react';
import './style.css';
import { Grid } from '@material-ui/core';




export default function Field(props: any) {



  const { fieldName, img, description } = props;

  return (
    <Grid item xs={12} sm={6} md={4} justify="center">
    <div className="card"> 
          <img className="icon" src={img}/>
          <h4>
            {fieldName}
          </h4>
          <p>
            {description}
          </p>
    </div>
    </Grid>
  );
}