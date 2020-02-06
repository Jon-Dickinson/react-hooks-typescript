import React, { useState } from 'react';

export default function Counter() {

  // new state variable "count"
  const [count, setCount] = useState(0);

  return (
    <div className="vertical-inline-flex align--center max-w-50-perc pad-tb-20 border-1px-silver pad-all-10">
      <p>Click count : {count}</p>
      <div className="ib__content-panel padding-b-10">
        <button className="button-solid" onClick={() => setCount(count + 1)}>
            Click
        </button>
      </div>
    </div>
  );
}
