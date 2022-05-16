import * as React from 'react';

function Layout({ children }) {
  return <main className="prose container max-w-prose py-24">{children}</main>;
}

export default Layout;
