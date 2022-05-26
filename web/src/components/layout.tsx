import { Link } from 'gatsby';
import * as React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Layout({ children }) {
  return (
    <main className="flex h-screen flex-col justify-between">
      <header className="fixed z-10 w-full border-b-2 border-rose-300 bg-white py-6 text-slate-500 shadow-md">
        <div className="prose container max-w-prose">
          <Link to="/">
            <h1 className="mb-2">
              <span className="mb-1 text-3xl  font-bold text-rose-500">
                Jane Hickey
              </span>
              {` `}
              <span className="block pt-2 font-serif text-xs font-bold uppercase no-underline">
                Academic and Disability Advocate
              </span>
            </h1>
            <p className="flex font-sans font-bold">
              <a
                href="https://www.linkedin.com/in/janemhickey/"
                className="group text-slate-800 transition duration-100 ease-linear after:content-['_↗'] hover:text-red-500"
              >
                <FaLinkedin className="mr-2 inline h-4 w-4" />
                {` `}
                <span className="text-xs decoration-slate-800 decoration-2 underline-offset-4 group-hover:underline">
                  LinkedIn Profile
                </span>
              </a>
            </p>
          </Link>
        </div>
      </header>
      <section className="mb-auto mt-36 h-auto">{children}</section>
      <footer className="mx-auto flex items-center py-12 text-slate-500">
        <p className="text-center font-serif text-xs italic">
          &copy; Jane Hickey 2022.
        </p>
      </footer>
    </main>
  );
}

export default Layout;
