import React from 'react';
import './style.css';



export default function Title(props: any) {

    const { text } = props;

    return (
        <h2 className="title">
            {text}
        </h2>
    )

};