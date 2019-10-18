import React from 'react';
import Paragraph from './paragraph';

function Attacks(props) {

  return (
    <div className="attack">
      <Paragraph text={props.name} className="rarity" />
      <Paragraph text={props.damage} className="rarity" />
      <Paragraph text={props.text} className="rarity" />
    </div>
  )
}

export default Attacks;