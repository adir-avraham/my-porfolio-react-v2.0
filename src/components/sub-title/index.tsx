import React from 'react';
import './style.css';


export default function SubTitle(props: any) {

    const { text } = props;

    return (
        <h6 className="sub-title">{text}</h6>
    )


};