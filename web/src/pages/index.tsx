import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FaLinkedin } from 'react-icons/fa';
import ContactForm from '../components/form';

const presentations = [
  {
    link: `https://pure.ulster.ac.uk/ws/portalfiles/portal/77041351/CYW_and_ASC_Report.pdf`,
    title: `Considering Autism Using a Strengths-Based Approach.`,
    type: `Paper`,
    date: `3 Dec, 2020`,
    host: `University of Ulster`,
    description: `Universal design principles benefit every member of the community. In this video Jane describes how we can all work together to build a more inclusive community.`,
  },
  {
    link: `https://www.ywa.org.au/discovering-positive-disability-identity`,
    authors: [`Jane Hickey`, `Sarah Jefferis`],
    type: `Presentation`,
    date: `4 Nov, 2020`,
    host: `Youth Workers Australia`,
    title: `Augmentative and Alternative Communication Tools.`,
    description: `The webinar was presented by Jane Hickey and Sarah Jefferis in collaboration with YACVic and Victoria University. Youth Workers have an important role in supporting young people with disability and removing barriers. This webinar is centred around a young person’s lived experience and strategies to improve access and inclusion in youth services.`,
  },
  {
    link: `https://www.youtube.com/watch?v=-vdzXzBERcQ&ab_channel=TEDxTalks`,
    title: `How Improving Disability Access Can Benefit Everyone.`,
    host: `TEDx Victoria University`,
    type: `Presentation`,
    date: `25 Jan, 2019`,
    description: `Universal design principles benefit every member of the community. In this video Jane describes how we can all work together to build a more inclusive community.`,
  },
  {
    link: `https://pure.ulster.ac.uk/en/publications/understanding-inclusion-and-participation-a-manifesto-for-policy-`,
    authors: [
      `Dr Breda Friel`,
      `Jane Hickey`,
      `Eliz McArdle`,
      `Clare Harvey`,
      `Dylan Clark`,
      `Darragh Fullerton`,
      `Liam Gill`,
    ],
    title: `Understanding, Inclusion And Participation: A Manifesto For Policy And Practice With Young People With Autism Spectrum Conditions.`,
    type: `Article`,
    date: `Jan 25, 2019`,
    host: `University of Ulster`,
    description: `This paper represents the distillation of themes from the conference and a manifesto for policy and practice that includes and engages young people with autism spectrum conditions by Breda Friel and Jane Hickey`,
  },
];
function HomePage() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Jane Hickey | Academic and Disability Advocate</title>
        <script type="application/ld+json">
          {`
        {
            "@context": "http://schema.org"
            "@type": "Person",
            "colleague": [
              "https://www.vu.edu.au/research/tim-corney",
              "https://www.vu.edu.au/research/robyn-broadbent",
            ],
            "email": "mailto:jane.hickey@vu.edu.au",
            "image": "./public/janehickey.jpg",
            "jobTitle": "Academic teaching scholar",
            "name": "Jane Hickey",
            "telephone": "(03) 9919 8944",
            "url": "http://www.janehickey.com"
          }
      `}
        </script>
        <meta
          name="description"
          content="Jane Hickey is an academic at Victoria University with research areas
          in disability, youth work, inclusive education and accessible
          employment"
        />
        <meta
          property="og:title"
          content="Jane Hickey | Academic and Disability Advocate"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Jane Hickey is an academic at Victoria University with research areas in disability, youth work, inclusive education and accessible employment"
        />
      </Helmet>
      <header className="mb-6">
        <h1 className="mb-6 text-4xl font-bold text-red-400 underline decoration-slate-500 underline-offset-8">
          JANE HICKEY
        </h1>
        <p className="mb-4 font-serif text-lg italic text-slate-500">
          Jane Hickey is an academic at Victoria University with research areas
          in disability, youth work, inclusive education and accessible
          employment
        </p>
        <p className="border-b-2 border-red-400 pb-6 text-xs">
          PhD candidate, MEd, Grad Dip Experiential Learning, Bachelor of Youth
          Work, Cert IV Disability, Cert IV TAA
        </p>
      </header>
      <section className="font-serif text-slate-500">
        <p className="mb-4">
          Jane completed her undergraduate studies at Victoria University with a
          Bachelor of Youth Work in 2001. She began working during her studies,
          supporting young people to access services and opportunities in their
          local communities.
        </p>
        <p className="mb-4">Her roles included:</p>
        <ul className="mb-5 list-inside list-disc">
          <li>Housing support</li>
          <li>Personal carer</li>
          <li>Educational support officer</li>
          <li>Respite and recreation worker</li>
          <li>Management of disability day service</li>
          <li>Disability instructor.</li>
        </ul>
        <p className="mb-4">
          In 2010, Jane was given the opportunity to use her training, skills
          and experience to invest back into the industry through education by
          facilitating and teaching in the Disability and Community Services
          qualifications, and then in the Youth Work and Education Support
          qualifications. The Bachelor of Youth Work, Master of Education as
          well as specialised certificates in Disability and Training and
          Assessment have given Jane a breadth of knowledge and skills which
          have been complemented by 12 years of industry experience.
        </p>
        <p className="mb-4">
          Jane is a PhD candidate currently researching the experiences of
          students with hidden disability in post compulsory education.
        </p>
        <h2 className="mt-12 mb-6 text-2xl font-bold text-red-400 underline decoration-slate-500 underline-offset-8">
          Presentations
        </h2>
        <ul>
          {presentations.map((presentation) => (
            <li key={presentation.title} className="mt-6">
              <a
                href={presentation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-4 -my-2 block rounded-md px-4 py-2 hover:bg-slate-200"
              >
                <h3 className="bg-inherit font-bold group-hover:underline">
                  {presentation.title}
                </h3>
                <div>
                  <span className="my-1 bg-red-500 px-2 py-1 font-sans text-xs text-white">
                    {presentation.type}: {presentation.date}
                  </span>
                </div>
                {presentation.authors && (
                  <h4 className="mt-1 mb-2 font-sans text-xs">
                    Co-contributors:{` `}
                    {presentation.authors.map((author, index) => (
                      <span className="italic">
                        {(index ? `, ` : ``) + author}
                      </span>
                    ))}
                  </h4>
                )}
                <p className="my-2 text-sm">{presentation.description}</p>
              </a>
            </li>
          ))}
        </ul>
        <p className="my-8 flex font-sans font-bold">
          <a
            href="https://www.linkedin.com/in/janemhickey/"
            className="group text-slate-500 after:content-['_↗'] hover:text-red-500"
          >
            <FaLinkedin className="mr-2 inline h-6 w-6" />
            {` `}
            <span className="decoration-slate-600 decoration-2 underline-offset-4 group-hover:underline">
              LinkedIn Profile
            </span>
          </a>
        </p>
      </section>
      <ContactForm />
    </>
  );
}

export default HomePage;
