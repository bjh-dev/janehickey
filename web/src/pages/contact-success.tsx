import * as React from 'react';
import Layout from '../components/layout';

function ContactSuccess() {
  return (
    <Layout>
      <section className="mt-8 flex items-center font-serif text-slate-500">
        <h1 className="py-6 text-center text-2xl">
          Thank you for your message.
        </h1>
      </section>
    </Layout>
  );
}

export default ContactSuccess;
