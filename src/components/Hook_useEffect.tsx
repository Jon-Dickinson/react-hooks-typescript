import React, { useState, useEffect } from 'react';

export default function CounterB() {

  // new state variable "countUser"
  const [countUser, setCountUser] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${countUser} times`;
  });

  return (
    <div className="vertical-inline-flex align--center max-w-50-perc pad-tb-20 border-1px-silver pad-all-10">
      <p>Click count : {countUser}</p>
      <div className="ib__content-panel padding-b-10">
        <button className="button-solid" onClick={() => setCountUser(countUser + 1)}>
            Click
        </button>
      </div>
    </div>
  );
}