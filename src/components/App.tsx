import React from 'react';

import Header from "./Header";
import ContentA from "./content/ContentA";
import ContentB from "./content/ContentB";
import ContentC from "./content/ContentC";
import ContentD from "./content/ContentD";
import Counter from "./Hook_useState";
import CounterB from "./Hook_useEffect";
import { Cssr } from './cssr';

export default function App() {
  return (
    <Cssr baseWrapper="flex" flexDirection="column" padding="tb-0">
      <Header />
      <Cssr center="flex" maxWidth="768" flexDirection="column">
        <ContentA />
        <Cssr direction="horizontal">
          <Counter />
          <Counter />
        </Cssr>
        <ContentB />
        <ContentC />
        <Cssr direction="horizontal">
          <CounterB />
          <CounterB />
        </Cssr>
        <ContentD />
      </Cssr>
    </Cssr>
  );
}
