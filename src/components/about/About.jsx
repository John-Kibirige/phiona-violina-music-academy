import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide exceptional healthcare services with a focus on availability, reliability, and support.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>
       {/* trying  */}
       <section className="py-[65px] text-white px-4">
  <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold font-montserrat max-w-[986px] mx-auto">
    We believe in fostering creativity, confidence, and self-expression, helping each student grow into their unique musical potential. Join us to explore your passion for music, and develop the skills needed for personal and artistic success.
  </h2>
  <div className="max-w-[1200px] mx-auto lg:mt-[65px] mt-10">
    <div className="grid grid-cols-3 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
      <div className="bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] md:min-h-[444px] min-h-auto lg:col-span-1 col-span-full" style={{ opacity: 1, transform: 'none', backgroundImage: 'linear-gradient(171.11deg, rgb(241, 178, 168) 0%, rgb(236, 87, 168) 49%, rgb(91, 90, 247) 100%)', willChange: 'auto' }}>
        <div className="rounded-3xl overflow-hidden bg-jet flex relative flex-col after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-left-[10%] after:blur-[40px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[200px] before:h-[200px] before:-bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full justify-between items-center h-full lg:gap-y-[26px] md:gap-y-5 gap-y-4">
          <img className="z-10 relative px-5 pt-5" src="/assets/ai_process-uh5GUnZz.png" alt="" />
          <div className="gap-y-2 flex flex-col items-center text-center relative z-10 px-6 pb-10">
            <h4 className="lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold">Bold Brass, Brilliant Sound</h4>
            <p className="text-white lg:text-base text-sm">Experience the power and unity of playing in a brass band. Our classes will teach you how to harmonize with other instruments and create a powerful resonant sound that stands out in any music ensemble.</p>
          </div>
        </div>
      </div>
      <div className="bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] md:min-h-[444px] min-h-auto lg:col-span-2 col-span-full" style={{ opacity: 1, transform: 'none', backgroundImage: 'linear-gradient(291.12deg, rgb(241, 178, 168) 0%, rgb(236, 87, 168) 49%, rgb(91, 90, 247) 100%)', willChange: 'auto' }}>
        <div className="rounded-3xl overflow-hidden bg-jet flex relative flex-col after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[217px] after:h-[217px] after:-top-[10%] after:-right-[5%] after:blur-[30px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[270px] before:h-[270px] before:bottom-0 before:-left-[10%] before:blur-[30px] before:rounded-full justify-between items-center h-full lg:gap-y-[26px] md:gap-y-5 gap-y-4">
          <img className="z-10 relative px-12 pt-6" src="/assets/user_stories-CHqEW76y.png" alt="" />
          <div className="gap-y-2 flex flex-col items-center text-center relative z-10 px-6 pb-10">
            <h4 className="lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold">Feel the beat, lead the rhythm</h4>
            <p className="text-white lg:text-base text-sm">The heartbeat of every band lies within the drums. Our drum lessons are tailored to help you master rhythm, timing, and coordination whether you're looking to rock out on stage or keep the beat in a studio setting.</p>
          </div>
        </div>
      </div>
      <div className="bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] md:min-h-[444px] min-h-auto lg:col-span-1 col-span-full" style={{ opacity: 1, transform: 'none', backgroundImage: 'linear-gradient(51.12deg, rgb(241, 178, 168) 0%, rgb(236, 87, 168) 49%, rgb(91, 90, 247) 100%)', willChange: 'auto' }}>
        <div className="rounded-3xl overflow-hidden bg-jet flex relative flex-col after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-right-[10%] after:blur-[40px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[213px] before:h-[213px] before:top-[20%] before:-left-[15%] before:blur-[30px] before:rounded-full justify-between items-center h-full lg:gap-y-[26px] md:gap-y=5 gap-y=4">
          <img className="z-10 relative pt-5 px=7" src="/assets/ai_test_case-BUF8nzwH.png" alt="" />
          <div className="gap-y=2 flex flex-col items-center text-center relative z=10 px=4 pb=9">
            <h4 className="lg:text-xl md:text-lg text-base text-white font-montserrat text-center font-semibold">Voices that inspire</h4>
            <p className="text-white lg:text-base tet-sm">Every voice is unique, and we're here to help you find yours. Our vocal lessons are designed to enhance your vocal range, control, and confidence, whether you're singing solo or as part of a choir.</p>
          </div>
        </div>
      </div>
      {/* Additional content blocks can be added here following the same structure */}
    </div>
  </div>
</section>
        {/* new section */}
        <section className="lg:py-[65px] py-10 px-4">
  <div className="max-w-[1200px] mx-auto">
    <h3 className="text-center text-white font-montserrat lg:text-3xl md:text-2xl text-xl font-semibold">
      Why Choose Us?
    </h3>
    <p className="font-montserrat text-center text-white lg:text-xl md:text-lg text-base mb-4">
      We ensure that every student's musical journey is celebrated and we do that through...
    </p>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-10 md:mt-8 mt-6">
      <div className="bg-grad-theme-135 rounded-3xl p-[3px] md:min-h-[315px] min-h-auto" style={{ opacity: 1, transform: 'none', backgroundImage: 'linear-gradient(57.79deg, rgb(241, 178, 168) 0%, rgb(236, 87, 168) 49%, rgb(91, 90, 247) 100%)', willChange: 'auto' }}>
        <div className="rounded-3xl bg-jet flex flex-col items-start h-full lg:p-8 md:p-6 p-4">
          <img className="w-12" src="data:image/svg+xml,%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2028.054%2028.054'%20style='enable-background:new%200%200%2028.054%2028.054;'%20xml:space='preserve'%3e%3cdefs%3e%3clinearGradient%20id='gradient'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='0%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23F1B2A8;stop-opacity:1'%20/%3e%3cstop%20offset='50%25'%20style='stop-color:%23EC57A8;stop-opacity:1'%20/%3e%3cstop%20offset='100%25'%20style='stop-color:%235B5AF7;stop-opacity:1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%3e%3cpath%20style='fill:url(%23gradient);'%20d='M27.961,1.867v11.204c0,0.319-0.258,0.578-0.578,0.578H12.144c-0.319,0-0.578-0.259-0.578-0.578v-0.885l1.156-0.775v1.082h14.082V2.444H12.721v4.229c-0.051,0.039-0.106,0.073-0.154,0.117l-0.162,0.112c-0.195-0.51-0.492-0.912-0.839-1.242V1.867c0-0.319,0.26-0.578,0.578-0.578h15.239C27.703,1.289,27.961,1.547,27.961,1.867z M14.316,9.461l0.692-0.464h-0.001c0..."/>
          <h4 className="lg:text-xl md:text-lg text-base text-white font-montserrat font-semibold mt-5 mb-4">
            Personalized and Inclusive Learning
          </h4>
          <p className="lg:text-base text-sm font-source-sans text-white">
            Every student’s unique musical journey is celebrated... 
          </p>
        </div>
      </div>
      <div className="bg-grad-theme-135 rounded-3xl p-[3px] md:min-h-[315px] min-h-auto" style={{ opacity: 1, transform: 'none', backgroundImage: 'linear-gradient(177.79deg, rgb(241, 178, 168) 0%, rgb(236, 87, 168) 49%, rgb(91, 90, 247) 100%)', willChange: 'auto' }}>
        <div className="rounded-3xl bg-jet flex flex-col items-start h-full lg:p-8 md:p-6 p-4">
          <img className="w-12" src="data:image/svg+xml,%3csvg..."/>
          <h4 className="lg:text-xl md:text-lg text-base text-white font-montserrat font-semibold mt-5 mb-4">
            Holistic Development and Creative Growth
          </h4>
          <p className="lg:text-base text-sm font-source-sans text-white">
            We are dedicated to more than just technical skill-building...
          </p>
        </div>
      </div>
      <div className="bg-grad-theme-135 rounded-3xl p-[3px] md:min-h-[315px] min-h-auto" style={{ opacity: 1, transform: 'none', backgroundImage: 'linear-gradient(297.79deg, rgb(241, 178, 168) 0%, rgb(236, 87, 168) 49%, rgb(91, 90, 247) 100%)', willChange: 'auto' }}>
        <div className="rounded-3xl bg-jet flex flex-col items-start h-full lg:p-8 md:p=6 p=4">
          <img className="w=12" src="data:image/svg+xml,%3csvg..."/>
          <h4 className="lg:text-xl md:text-lg text-base text-white font-montserrat font-semibold mt=5 mb=4">
            Community and Performance Opportunities
          </h4>
          <p className="lg:text-base text-sm font-source-sans text-white">
            We provide a welcoming community where students can connect...
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* end of new section */}
      <section className="bg-primary text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Healthcare Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {["Cardiology", "Neurology", "Pediatrics", "Oncology"].map((specialty, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors"
            >
              <h3 className="text-xl font-bold">{specialty}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          {[
            { title: "Advanced Diagnostics", description: "We utilize the latest technology for accurate diagnostics." },
            { title: "Telemedicine", description: "Consult with our specialists from the comfort of your home." },
            { title: "Robotic Surgery", description: "Minimally invasive procedures with precision." },
            { title: "Electronic Health Records", description: "Secure and easy access to your medical records." },
          ].map((tech, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold">{tech.title}</h3>
              <p className="text-gray-700 mt-2">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Committed To Your Health And Happiness</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {["Book Appointment", "Informed Staff", "Total Health", "Get Consultation"].map(
            (item, index) => (
              <div
                key={index}
                className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors"
              >
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-primary text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Patient Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          {["Patient A", "Patient B", "Patient C"].map((patient, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-lg bg-primary1 hover:bg-primary transition-colors"
            >
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <h3 className="mt-4 font-bold">- {patient}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">Get Answer To Your Most Asked Questions</h2>
        <div className="mt-8">
          {[
            {
              question: "How do I make an appointment online?",
              answer: "You can book an appointment online through our website or mobile app.",
            },
            {
              question: "What types of medical tests do you offer?",
              answer: "We offer a wide range of medical tests including blood tests, imaging, and more.",
            },
            {
              question: "Do you accept insurance plans?",
              answer: "Yes, we accept most major insurance plans.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4"
            >
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-primary text-white text-center py-8">
        <p>&copy; Copyright Phiona Violin Music School. All rights reserved. Made with Love By Muhuan Developers😎</p>
      </footer>
    </div>
  );
};

export default About;
