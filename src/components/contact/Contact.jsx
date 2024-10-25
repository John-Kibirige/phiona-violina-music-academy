import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const Contact = () => {
  const form = useRef(null); // Added null as initial value for useRef
    const clearForm = () => {
        form.current.reset();
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_jwv745i', 'template_stidc4r', form.current, {
                publicKey: 'd4qluKSaYqWLqvc_P',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    clearForm(); // Clear the form after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 p-10 rounded-lg bg-secondary">
        
        {/* Contact Options */}
        <div className="contact-options">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#AD13FB] to-[#e43a15]">
          Send Us a Message
        </h1>
          <p className="text-muted mb-8">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus commodi officiis tenetur nostrum ut molestias qui beatae molestiae incidunt rerum sed, quam voluptatem autem culpa, quaerat fugiat eveniet et.
          </p>
          <div className="options space-y-6">
            <a href="mailto:mileslegend7@gmail.com" className="flex items-center text-lg space-x-4 text-muted hover:text-foreground transition-all">
              <span className="flex-center icon-wrapper bg-accent p-2 rounded-full">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </span>
              <span>mileslegend7@gmail.com</span>
            </a>
            <a href="tel:+256759060525" className="flex items-center text-lg space-x-4 text-muted hover:text-foreground transition-all">
              <span className="flex-center icon-wrapper bg-accent p-2 rounded-full">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </span>
              <span>+256759060525</span>
            </a>
            <a href="#" className="flex items-center text-lg space-x-4 text-muted hover:text-foreground transition-all">
              <span className="flex-center icon-wrapper bg-accent p-2 rounded-full">
              <FontAwesomeIcon icon='faLocationCrosshairs' />
              </span>
              <span>Kampala, Uganda</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="top mb-4">
            <p className="text-muted">Need help? Kindly reach out for any inquiries; I'm here for you!</p>
          </div>
          <div className="middle space-y-4">
            <div className="flex flex-wrap gap-4">
              <input type="text" placeholder="First Name" name='firstName' className=" border-b-2 border-primary focus:border-primary w-full md:w-1/2 py-2 bg-transparent text-foreground" />
              <input type="text" placeholder="Last Name" name='lastName'  className=" border-b-2 border-primary focus:border-primary w-full md:w-1/2 py-2 bg-transparent text-foreground" />
            </div>
            <div className="flex flex-wrap gap-4">
              <input type="email" placeholder="Email Address" name='email'className=" border-b-2 border-primary focus:border-primary w-full md:w-1/2 py-2 bg-transparent text-foreground" />
              <input type="tel" placeholder="Phone Number" name='tel' className=" border-b-2 border-primary focus:border-primary w-full md:w-1/2 py-2 bg-transparent text-foreground" />
            </div>
            <textarea name='message' className=" border-b-2 border-primary focus:border-primary w-full py-2 bg-transparent text-foreground" rows="6" placeholder="Type your message here"></textarea>
          </div>
          <div className="bottom mt-8 flex justify-center">
            <button type="submit" className="btn primary bg-primary text-white py-3 px-6 rounded-lg w-full max-w-xs">Send Message</button>
          </div>
          </form>

      </div>
    </section>
  );
};

export default Contact;

// The icons are not rendered well am gona use react icons 
