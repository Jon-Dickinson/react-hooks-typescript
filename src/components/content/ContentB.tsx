import React from 'react';

export default function ContentB() {
  return (
    <div className="vertical-inline-flex">
      <p className="font-s--18 font-w--500 margin-t-50">
        Array destructuring:
      </p>
<xmp className="margin-tb-20">
const [fruit, setFruit] = useState('banana');
</xmp>
<xmp className="margin-tb-5">
variables = fruit and setFruit
</xmp>
<xmp className="margin-tb-5">
fruit is set to the first value returned by useState
</xmp>
<xmp className="margin-tb-5">
setFruit is the second value returned by useState
</xmp>
    </div>
  );
}