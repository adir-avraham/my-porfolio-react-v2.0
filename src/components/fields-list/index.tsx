import React from 'react';
import Grid from '@material-ui/core/Grid';
import Field from '../field';
import { fields } from '../../content/fields';


interface IField {
    title: string;
    img: string;
    description: string;
}

export default function FieldsList() {


    return (
        <Grid container spacing={8}>
        {fields.map((field: IField) => <Field key={field.title} {...field}/>)}
    </Grid>
    )
} 