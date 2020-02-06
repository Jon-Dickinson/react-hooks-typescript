import React from 'react';

export default function ContentA() {
  return (
    <div className="vertical-inline-flex">
      <p className="font-s--18 font-w--500 margin-b-5 margin-t-70">
        Render Props and HOC:
      </p>
      <p className="margin-b-5">
        Require components to be restructured.
      </p>
      <p className="font-s--18 font-w--500 margin-b-5 margin-t-40">
        Hooks:
      </p>
      <p className="margin-b-5">
        Logic becomes reusable.
      </p>
      <p className="margin-b-5">
        The component hierarchy is maintained.
      </p>
      <p className="margin-b-20">
        State can be accessed without authoring class components.      
      </p>
      <p className="margin-tb-20">
        "In many cases it’s not possible to break components into smaller ones because
        the stateful logic is all over the place. It’s also difficult to test them.
        This is one of the reasons many people prefer to combine React with a
        separate state management library. However, that often introduces
        too much abstraction, requires you to jump between different files,
        and makes reusing components more difficult."
      </p>
      <div className="vertical-inline-flex bg-651fff align--center justify--center pad-tb-20 margin-t-30">
        <code className=" font-s--18 font-w--300 color--ffffff">
          useState
        </code>
      </div>
    </div>
  );
}