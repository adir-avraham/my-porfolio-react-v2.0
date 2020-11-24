import React from 'react';
import './style.css';
import { ReactComponent as RoadAccident } from '../icons/accident.svg';
import { ReactComponent as Damage } from '../icons/damage.svg';
import { ReactComponent as Insurance } from '../icons/insurance.svg';
import { ReactComponent as Disabled } from '../icons/disabled.svg';
import { ReactComponent as Injury } from '../icons/injury.svg';
import { ReactComponent as Doctor } from '../icons/doctor.svg';
import { ReactComponent as Meeting } from '../icons/meeting.svg';
import { ReactComponent as Writing } from '../icons/writing.svg';
import { ReactComponent as Money } from '../icons/money.svg';



export default function MyCard(props: any) {


    const { img, title, description } = props;

    function icon(img: any) {
        switch (img) {
          case 'rc':
          return <RoadAccident/>;
          case 'damage':
          return <Damage/>;
          case 'ins':
          return <Insurance/>;
          case 'dis':
          return <Disabled/>;
          case 'inj':
          return <Injury/>;
          case 'doc':
          return <Doctor/>;
          case 'meet':
          return <Meeting/>;
          case 'wrt':
          return <Writing/>;
          case 'mon':
          return <Money/>;
        }
      }
    return (
        <div className="card"> 
        <div className="icon">
        {icon(img)}
        </div>
        <h4>
          {title}
        </h4>
        <p className="desc">
          {description}
        </p>
  </div>
    )

};