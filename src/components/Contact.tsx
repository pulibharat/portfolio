'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Get In Touch</h2>
        <p className="text-lg text-slate-600 text-center mb-12">
          Feel free to reach out by filling the form below.
        </p>
        <form
          action="https://formspree.io/f/xwvoepaa"
          method="POST"
          className="bg-white p-8 rounded-lg shadow-sm border border-slate-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 bg-slate-50"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 bg-slate-50"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 bg-slate-50"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 text-white font-semibold rounded-lg transition-colors bg-blue-700 hover:bg-blue-800 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
