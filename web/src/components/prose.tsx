import * as React from 'react';

function Prose({ children }) {
  return <article className="prose container max-w-prose">{children}</article>;
}

export default Prose;
