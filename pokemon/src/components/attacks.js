import React from 'react';
import Paragraph from './paragraph';

function Attacks(props) {

  return (
    <div className="attaks__item">
      <Paragraph text={props.name} className="attaks__name" />
      <Paragraph text={props.damage} className="attaks__damage" />
      <Paragraph text={props.text} className="attaks__description" />
    </div>
  )
}

export default Attacks;