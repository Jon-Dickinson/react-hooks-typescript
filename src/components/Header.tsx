import React from 'react';
import { Cssr } from './cssr';
import styled from '@emotion/styled';
import { cssrStyles, IStyleProps } from './cssr/styles';

const H2 = styled.h2<IStyleProps>`
  ${ cssrStyles }
`;

export default function Header() {
  return (
    <Cssr direction="vertical" background="651fff" justify="center" height="100p">
      <Cssr center="flex" maxWidth="768" flexDirection="column">
        <H2 font={{ size: '22px', weight: 300 }} color="#ffffff">
          Hooks
        </H2>
      </Cssr>
    </Cssr>
  );
}