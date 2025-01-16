import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import HeroSectionContactus from '../HeroSectionContactus';
import Footer from '../Footer';
import ContactSection from '../ContactSection';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    designation: '',
    email: '',
    phone: '',
    subject: '',
    enquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here

    const serviceID = 'service_6v8qvub';
    const templateID = 'template_ezi76nf';
    const userID = 'SftXTRJ8K1da2gx5v';
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          companyName: '',
          name: '',
          designation: '',
          email: '',
          phone: '',
          subject: '',
          enquiry: '',
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send the message. Please try again.');
      });

  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSectionContactus />
      
      <div className="bg-gradient-to-r from-white via-blue-50 to-green-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-600 hover:text-green-500 transition-colors duration-300">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We’d love to hear from you! Reach out to us for any inquiries or support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Email:</span> info@sadarbiotech.com
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Phone:</span> +91 9226077649
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Registered office:</span>
                Sy. No. 136/11, Gauravaddo, Calangute, North Goa 403516
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Admin office:</span>
                Above Puma Store, Floor 2, Chogm Road, Porvorim, North Goa 403521
              </p>
              <p className="font-semibold text-green-500 text-lg">Manufacturing Units:</p>
              <ul className="list-inside pl-4 space-y-2">
                <li className="transition-transform duration-300 hover:translate-x-2">
                  <span className="font-semibold">Unit 1:</span> C1B/42/4 & 5 G.I.D.C. Estate, Nandesari, 391 340 Dist.Baroda, Gujarat India
                </li>
                <li className="transition-transform duration-300 hover:translate-x-2">
                  <span className="font-semibold">Unit 2:</span> C1B/42/6 & 7 G.I.DC. Estate, Nandesari, 391 349 Dist. Baroda, Gujarat, India
                </li>
                <li className="transition-transform duration-300 hover:translate-x-2">
                  <span className="font-semibold">Unit 3:</span> Khasra. No. 245/46. Village Chhapur Sher Afganpur Bhagwanpur Haridwar- 247661
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                {/* Company Name */}
                <div className="mb-4">
                  <label htmlFor="companyName" className="block text-lg font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                  />
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                  />
                </div>

                {/* Designation */}
                <div className="mb-4">
                  <label htmlFor="designation" className="block text-lg font-medium text-gray-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                  />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                  />
                </div>

                {/* Enquiry */}
                <div className="mb-6">
                  <label htmlFor="enquiry" className="block text-lg font-medium text-gray-700">
                    Enquiry
                  </label>
                  <textarea
                    id="enquiry"
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    rows="4"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default ContactUs;
