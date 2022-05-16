import * as React from 'react';

function Layout({ children }) {
  return (
    <>
      <main className="prose container max-w-prose pt-24">{children}</main>
      <footer className="container max-w-prose py-12 font-sans text-sm text-slate-800">
        <p className="text-center">&copy; Jane Hickey 2022.</p>
      </footer>
    </>
  );
}

export default Layout;
