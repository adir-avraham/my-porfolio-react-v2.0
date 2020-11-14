import React from 'react';
import Grid from '@material-ui/core/Grid';
import Field from '../field';

const fields = [
    {
    fieldName: "תביעות ביטוח",
    img: "https://library.kissclipart.com/20180831/bje/kissclipart-life-insurance-symbol-clipart-term-life-insurance-c992cc0741fd6f4c.png",
    description: "תביעות ביטוח מהוות חלק נכבד מעבודתנו. תחום הביטוח דורש התמחות ספציפית ובקיאות בתחום הביטוח על מנת למצות את זכויות המבוטח."
}, 
{
    fieldName: "נזקי גוף",
    img: "https://img.favpng.com/13/0/2/personal-injury-lawyer-work-accident-clip-art-png-favpng-aCUADk8qVN7N1ymSPKAhjDvEB.jpg",
    description: "תביעות ביטוח מהוות חלק נכבד מעבודתנו. תחום הביטוח דורש התמחות ספציפית ובקיאות בתחום הביטוח על מנת למצות את זכויות המבוטח."
},
{
    fieldName: "נזקי רכוש",
    img: "https://cdn2.iconfinder.com/data/icons/property-insurance/256/Fire_Insurance-512.png",
    description: "תביעות ביטוח מהוות חלק נכבד מעבודתנו. תחום הביטוח דורש התמחות ספציפית ובקיאות בתחום הביטוח על מנת למצות את זכויות המבוטח."

},
{
    fieldName: "תאונות דרכים",
    img: "https://cdn2.iconfinder.com/data/icons/vehicle-insurance/256/Bodily_Injury_Coverage-512.png",
    description: "תביעות ביטוח מהוות חלק נכבד מעבודתנו. תחום הביטוח דורש התמחות ספציפית ובקיאות בתחום הביטוח על מנת למצות את זכויות המבוטח."

},
{
    fieldName: "רשלנות רפואית",
    img: "https://e7.pngegg.com/pngimages/274/49/png-clipart-doctor-avatar-medicine-health-care-computer-icons-physician-doctor-icon-miscellaneous-logo.png",
    description: "תביעות ביטוח מהוות חלק נכבד מעבודתנו. תחום הביטוח דורש התמחות ספציפית ובקיאות בתחום הביטוח על מנת למצות את זכויות המבוטח."

},
{
    fieldName: "ביטוח לאומי",
    img: "https://cdn3.iconfinder.com/data/icons/hotel-services-facilities/256/Disability_Friendly-512.png",
    description: "תביעות ביטוח מהוות חלק נכבד מעבודתנו. תחום הביטוח דורש התמחות ספציפית ובקיאות בתחום הביטוח על מנת למצות את זכויות המבוטח."

},
]

interface IField {
    fieldName: string
}

export default function FieldsList() {


    return (
        <Grid container spacing={6}>
        {fields.map((field: IField) => <Field key={field.fieldName} {...field}/>)}
    </Grid>
    )
} 