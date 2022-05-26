/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';

export default function ContactForm() {
  return (
    <div className="mt-12 overflow-hidden rounded-md border border-slate-500 bg-slate-100 px-4 py-6">
      <h2 className="mb-6  text-2xl font-bold text-red-400 underline decoration-slate-800 underline-offset-8">
        Contact
      </h2>
      <p className="mb-4 font-serif">
        If you would like to make contact with Jane, please provide your details
        and a brief message in the form below.
      </p>

      <div className="mt-12">
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          netlify
        >
          <div className="group relative col-span-1 my-4 border-b-2 focus-within:border-red-500">
            <input
              type="text"
              placeholder="Singh"
              name="first-name"
              className="block w-full appearance-none bg-white p-1 focus:outline-none"
            />
            <label
              htmlFor="first-name"
              className="absolute -top-6 text-xs text-rose-500"
            >
              First Name
            </label>
          </div>
          <div className="group relative col-span-1 my-4 border-b-2 focus-within:border-red-500">
            <input
              type="text"
              placeholder="Singh"
              name="last-name"
              className="block w-full appearance-none bg-white p-1 focus:outline-none"
            />
            <label
              htmlFor="last-name"
              className="absolute -top-6 text-xs text-rose-500"
            >
              Last Name
            </label>
          </div>
          <div className="group relative col-span-2 my-4 border-b-2 focus-within:border-red-500">
            <input
              type="text"
              placeholder="ABC Group"
              name="organisation"
              className="block w-full appearance-none bg-white p-1 focus:outline-none"
            />
            <label
              htmlFor="organisation"
              className="group:focus:text-white absolute -top-6 text-xs text-rose-500"
            >
              Organisation
            </label>
          </div>
          <div className="group relative col-span-2 my-4 border-b-2 focus-within:border-red-500">
            <input
              type="text"
              placeholder="sam@singh.net"
              name="email"
              className="block w-full appearance-none bg-white p-1 focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute -top-6 text-xs text-rose-500"
            >
              Email
            </label>
          </div>
          <div className="group relative col-span-2 my-4 border-b-2 focus-within:border-red-500">
            <input
              type="tel"
              placeholder="+61 (03) 9919 8944"
              name="phone-number"
              className="block w-full appearance-none bg-white p-1 focus:outline-none"
            />
            <label
              htmlFor="phone-number"
              className="absolute -top-6 text-xs text-rose-500"
            >
              Phone Number
            </label>
          </div>
          <div className="group relative col-span-2 my-4 border-b-2 focus-within:border-red-500">
            <textarea
              rows={5}
              name="message"
              className="block w-full appearance-none bg-white p-1 focus:outline-none"
            />
            <label
              htmlFor="message"
              className="absolute -top-6 text-xs text-rose-500"
            >
              Message
            </label>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
