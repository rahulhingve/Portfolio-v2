"use client";

import React, { useState, FormEvent } from "react";
import { IconMail, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact({ id }: { id: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      setIsSubmitting(false);
      return;
    }

    // Create simple mailto link
    const mailtoLink = `mailto:rahulpawar2001.rp@gmail.com`;
    window.location.href = mailtoLink;

    // Show success message
    setSubmitStatus({
      type: 'success', 
      message: 'Email client opened successfully!'
    });

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id={id} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100/80 dark:bg-primary-900/80 backdrop-blur-sm flex items-center justify-center">
                    <IconMail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">rahulpawar2001.rp@gmail.com</p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100/80 dark:bg-primary-900/80 backdrop-blur-sm flex items-center justify-center">
                    <IconPhone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-8900</p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100/80 dark:bg-primary-900/80 backdrop-blur-sm flex items-center justify-center">
                    <IconMapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Bhopal, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Social Links
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/rahulhingve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary-100/80 dark:hover:bg-primary-900/80"
                >
                  <IconBrandGithub className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-hingve-b5a582263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary-100/80 dark:hover:bg-primary-900/80"
                >
                  <IconBrandLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="https://x.com/rahulhingv97727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary-100/80 dark:hover:bg-primary-900/80"
                >
                  <IconBrandTwitter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus.type && (
                <div className={`p-3 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full button button-primary bg-blue-600/80 dark:bg-blue-500/80 backdrop-blur-sm text-white hover:bg-blue-700/80 dark:hover:bg-blue-600/80 transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Opening email client...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
