import React from 'react';
import { Cssr } from './cssr';

export default function Header() {
  return (
    <Cssr direction="vertical" background="651fff" justify="center" height="100p">
      <Cssr center="flex" maxWidth="768" flexDirection="column">
        <h2 className="font-s--22 font-w--300 color--ffffff">
          Hooks
        </h2>
      </Cssr>
    </Cssr>
  );
}