import React, { useState } from 'react';
import './style.css';
import { Grid } from '@material-ui/core';
import MyCard from '../my-card';

export default function Field(props: any) {

  const { title, img, description } = props;
  


  return (
    <Grid item xs={12} sm={6} md={4}>
      <MyCard title={title} img={img} description={description} />



    </Grid>
  );
}