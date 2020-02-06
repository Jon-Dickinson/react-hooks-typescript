import React from 'react';

import Header from "./Header";
import ContentA from "./content/ContentA";
import ContentB from "./content/ContentB";
import ContentC from "./content/ContentC";
import ContentD from "./content/ContentD";
import Counter from "./Hook_useState";
import CounterB from "./Hook_useEffect";

export default function App() {
  return (
    <div className="if__base-wrapper direction--column pad-tb-0">
      <Header />
      <div className="flex__mid-container max-w-768 direction--column">
        <ContentA />
        <div className="horizontal-inline-flex">
          <Counter />
          <Counter />
        </div>
        <ContentB />
        <ContentC />
        <div className="horizontal-inline-flex">
          <CounterB />
          <CounterB />
        </div>
        <ContentD />
      </div>
    </div>
  );
}
