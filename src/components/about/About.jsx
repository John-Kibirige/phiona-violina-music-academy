import React from "react";
import { faqData } from "../../data/mockData";

const About = () => {
  return (
    <div className="bg-white">
      <header className="bg-primary text-white text-center py-6">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="transition transform hover:scale-110 text-center lg:text-2xl md:text-xl text-xl font-montserrat max-w-[986px] mx-auto">
          We believe in fostering creativity, confidence, and self-expression,
          helping each student grow into their unique musical potential. Join us
          to explore your passion for music, and develop the skills needed for
          personal and artistic success.
        </h2>

        <div class="mt-6 flex flex-wrap animate-fadeIn">
          <div class="w-full sm:w-8/12 mb-10">
            <div class="h-full sm:p-10">
              <header class="px-4 lg:flex mt-10 items-center lg:mt-0">
                <div class="w-full">
                  <h1 class="text-4xl lg:text-6xl font-bold">
                    Our <span class="text-primary">Mission</span> and values
                  </h1>
                  <div class="mt-4 w-20 h-2 bg-primary my-4"></div>
                  <p class="transition transform hover:scale-110 text-xl mb-10">
                    our mission is to provide exceptional music lessons that
                    inspire and nurture the musical talents of our students. We
                    are dedicated to availability, reliability, and support,
                    ensuring that every student receives the guidance they need
                    to flourish in their musical journey.
                  </p>
                  <button class="bg-primary  text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Values
                  </button>
                  <p class="transition transform hover:scale-110 mt-4 text-xl mb-10">
                    Our school is committed to making music education accessible
                    to everyone. We offer flexible scheduling options, including
                    weekend classes, to accommodate busy lifestyles.
                    Additionally, we provide online lessons for those who prefer
                    learning from home or have scheduling conflicts.
                  </p>
                </div>
              </header>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732274808/4_4_Size_Neon_Pink_Violin_xpjouu.jpg"
            alt="Leafs"
            class="transition transform hover:scale-110 w-full  object-cover sm:h-screen sm:w-4/12 lg:h-[70vh] rounded-[10px]"
          />
        </div>
        
      </section>
      
      <section className="bg-primary text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
        Our students engage in activities that enhance their understanding of musical concepts while encouraging creativity and expression. We also offer opportunities for performance through recitals and community events, allowing students to showcase their talents and gain confidence on stage.
        Recognizing the role of music in personal development, we incorporate elements of music therapy into our programs. This approach not only helps students relax and reduce stress but also enhances cognitive functions and emotional well-being. We believe that music is a powerful tool for self-expression and healing.
        </p>
      </section>
      <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why Choose Us?
      </h2>
      {/* section1 */}
      <div className="flex flex-wrap items-center mt-20 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://picsum.photos/400/240"
            alt="gem"
            className="inline-block rounded shadow-lg border border-gray-300"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Simple Integration
          </h3>
          <p className="sm:text-lg mt-6">
            Use the LocaleData gem to download translations directly into your
            Ruby on Rails projects using the provided command line interface.
            Just create a project and follow the step-by-step instructions.
          </p>
        </div>
      </div>
      {/* section2 */}
      <div className="flex flex-wrap items-center mt-20 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://picsum.photos/400/240"
            alt="project members"
            className="inline-block rounded shadow-lg border border-gray-300"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Easy Collaboration
          </h3>
          <p className="sm:text-lg mt-6">
            All LocaleData projects are private. Each project can have multiple
            collaborators with different roles and access permissions. You
            determine who can see and edit your translations. Just add admins,
            developers, translators and configure their access rights.
          </p>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-wrap items-center mt-20 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://picsum.photos/400/240"
            alt="editor"
            className="inline-block rounded shadow-lg border border-gray-300"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            No More Syntax Errors
          </h3>
          <p className="sm:text-lg mt-6">
            LocaleData provides you easy import/export functions for your YAML
            files. Use a simple editor with many predefined languages to manage
            your locales. LocaleData also supports multiple translation types,
            such as simple text, plural forms, numbers, booleans, symbols,
            arrays, and more.
          </p>
        </div>
      </div>

      {/* section4 */}
      <div className="flex flex-wrap items-center mt-20 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://picsum.photos/400/240"
            alt="bulk editing"
            className="inline-block rounded shadow-lg border border-gray-300"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Bulk Editing
          </h3>
          <p className="sm:text-lg mt-6">
            Do you need to change the path of many translation keys at once? No
            problem, just use the bulk editing feature and enjoy the results.
          </p>
        </div>
      </div>
    
      </section>
      <section className="bg-primary text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Client Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          {["Client A", "Client B", "Client C"].map((patient, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-lg bg-primary hover:bg-primary1 transition-colors"
            >
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <h3 className="mt-4 font-bold">- {patient}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
  <div className="mx-auto px-5">
    <div className="flex flex-col items-center">
      <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
        FAQ
      </h2>
      <p className="mt-3 text-lg text-neutral-500 md:text-xl">
        Frequently asked questions
      </p>
    </div>
    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
      {faqData.map((faq, index) => (
        <div key={index} className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span>{faq.question}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
              {faq.answer}
            </p>
          </details>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default About;
