import * as React from 'react';

export default function ContactForm() {
  return (
    <div className="mt-12 overflow-hidden">
      <h2 className="mb-6 text-2xl font-bold text-red-400 underline decoration-slate-500 underline-offset-8">
        Contact
      </h2>
      <p className="mb-4 font-serif text-slate-500">
        If you would like to make contact with Jane, please provide your details
        and a brief message in the form below.
      </p>

      <div className="mt-12">
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="first-name"
              className="block text-xs text-slate-900"
            >
              First name
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border border-slate-300 py-3 px-4 shadow-sm outline-red-500 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-xs text-slate-900">
              Last name
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border border-slate-300 py-3 px-4 shadow-sm outline-red-500 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-xs text-slate-900">
              Organisation
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border border-slate-300 py-3 px-4 shadow-sm outline-red-500 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-xs text-slate-900">
              Email
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-slate-300 py-3 px-4 shadow-sm outline-red-500 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-xs text-slate-900"
            >
              Phone Number
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="mt-1 block w-full rounded-md border border-slate-300 py-3 px-4 outline-red-500 focus:border-red-500 focus:ring-red-500"
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-xs text-slate-900">
              Message
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  className="block w-full rounded-md border border-slate-300 py-3 px-4 shadow-sm outline-red-500 focus:border-red-500 focus:ring-red-500"
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
