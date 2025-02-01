import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../src/assets/2way.png";
import image2 from "../src/assets/2way2.png";
import logo1 from "../public/sms.jpg"; // New logos for each feature card
import logo2 from "../public/sms.jpg";
import logo3 from "../public/sms.jpg";
import logo4 from "../public/sms.jpg";
import logo5 from "../public/sms.jpg";
import logo6 from "../public/sms.jpg"; // More logos


function TwowaySMS() {
  const [selectedOption, setSelectedOption] = useState(null);
  const features = [
    {
      title: "Fast, real-time exchanges",
      description:
        "A key advantage of two-way texting is its speed. On average, text responses are received in just 90 seconds, making SMS an ideal tool for quick, back-and-forth communication. This allows businesses to resolve customer issues, address sales inquiries, and meet service level agreements faster than ever.",
      logo: logo1, // Add unique logos to each feature
    },
    {
      title: "Build customer bonds",
      description:
        "Two-way conversations enable businesses and customers to connect on a deeper level. Engaging in two-way messaging creates meaningful exchanges, showing that you’re attentive and genuinely care about addressing customer concerns. This helps foster stronger, more loyal relationships.",
      logo: logo2,
    },
    {
      title: "Achieve better open and response rates",
      description:
        "With two-way SMS, get higher engagement and faster response times.",
      logo: logo3,
    },
    {
      title: "Easily set up your channel",
      description: "Set up your two-way messaging system in just a few easy steps.",
      logo: logo4,
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-6 pt-12 py-12 bg-gradient-to-r from-white to-gray-50 rounded-lg">
      {/* Header Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        {/* Left side: Text content */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h1
            className="text-5xl font-extrabold text-gray-800 leading-tight text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            Transform Customer Engagement with <br />
            <span className="text-orange-600">Two-Way SMS Texting</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            Leverage business texting to foster real-time, two-way conversations with customers, prospects, or team members. Build relationships, get instant feedback, and simplify communication.
            Book a demo or kick off your 14-day free trial today!
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            className="flex justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <a
              href="/trial"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-10 pt-10 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:shadow-2xl"
            >
              Start Your Free Trial
            </a>
          </motion.div>
        </div>

        {/* Right side: Image */}
        <div className="flex justify-center items-center">
          <motion.img
            src={image} // Use the imported image here
            alt="Description of the image"
            className="max-w-full h-auto rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          />
        </div>
      </motion.div>

      {/* What is Two-Way Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <div className="flex justify-center items-center">
          <motion.img
            src={image2} // Use the imported image here
            alt="Description of the image"
            className="max-w-full h-auto rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          />
        </div>
        {/* Left side: Text content */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h1
            className="text-5xl font-extrabold text-orange-600 leading-tight text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            What is Two-Way SMS? <br />
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            Two-way texting enables businesses to both send and receive SMS messages, allowing for direct, one-on-one conversations with contacts. By adding two-way texting, businesses can enhance customer experience and streamline internal communication.

            These platforms empower businesses to connect with contacts through their preferred communication channel. Two-way messaging is frequently used for customer support, finalizing sales, rescheduling appointments, and much more.
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="mt-16">
        <motion.h2
          className="text-3xl font-bold text-orange-600 text-center mb-15 hover:tracking-wider transition-all-duration-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          Key Features of Two-Way Messaging
        </motion.h2>
        <div className="flex justify-between space-x-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item flex flex-col items-center bg-white shadow-lg p-6 rounded-lg w-1/4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2 * index, duration: 0.5 },
                },
              }}
            >
              <div className="w-16 h-16 mb-4">
                <img src={feature.logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-gray-700 font-medium text-center">{feature.title}</span>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <motion.h2
          className="text-3xl font-bold text-orange-600 text-center mt-16 hover:tracking-wider transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          Vapio’s Must-Know Standout Features
        </motion.h2>

        {/* Vapio's Must-Know Features Section */}
        <section className="mt-16">
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-25">
            {[ 
              // Features for Vapio
              {
                title: "Auto-Reply Functionality",
                description:
                  "With two-way messaging, customers can contact you anytime. Vapio enables you to set up auto-replies, helping manage response times and keeping clients informed of when to expect replies during business hours",
                logo: logo5,
              },
              {
                title: "Secure Messaging",
                description:
                  "Prioritizing the security of your conversations, Vapio provides a safe messaging environment, essential for industries with strict privacy requirements, like healthcare (HIPAA-compliant).",
                logo: logo6,
              },
              {
                title: "Custom SMS Templates",
                description:
                  "Save time with pre-made templates for frequently used messages, allowing you to quickly respond to common customer inquiries.",
                logo: logo1,
              },
              {
                title: "MMS Messaging",
                description:
                  "Boost engagement by sending multimedia messages, such as images, GIFs, and links, to enhance communication and customer support",
                logo: logo2,
              },
              {
                title: "Performance Analytics",
                description:
                  "Monitor key metrics, such as response times, to assess team performance and improve operational efficiency",
                logo: logo3,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item relative bg-white shadow-lg rounded-lg p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.5 },
                  },
                }}
              >
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img src={feature.logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.section>

      <motion.section
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <h2 className="text-3xl font-bold text-orange-600 text-center mt-25 mb-8 hover:tracking-wider transition-all duration-300">
          Seamless API Integration
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Integrate Vapio’s user-friendly REST API in minutes<br />
          to easily add two-way SMS functionality into your application.
        </p>
      </motion.section>

      {/* Get in Touch */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">
          Get in Touch with Us
        </h2>

        {/* Two options */}
        <div className="flex justify-center space-x-6">
          <div
            onClick={() => handleOptionSelect("demo")}
            className="option-card p-6 bg-gray-100 rounded-lg shadow-md cursor-pointer w-1/3 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-700">Schedule a Demo</h3>
            <p className="mt-2 text-gray-600">Book a personalized demo with our team.</p>
          </div>
          <div
            onClick={() => handleOptionSelect("sales")}
            className="option-card p-6 bg-gray-100 rounded-lg shadow-md cursor-pointer w-1/3 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-700">Talk to Sales</h3>
            <p className="mt-2 text-gray-600">Have a conversation with our sales team.</p>
          </div>
        </div>

        {/* Form Section based on the selected option */}
        {selectedOption && (
          <div className="mt-10">
            <form className="space-y-6 max-w-4xl mx-auto">
              <div>
                <label className="block text-lg font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
              {selectedOption === "demo" && (
                <div>
                  <label className="block text-lg font-semibold text-gray-700">Preferred Demo Time</label>
                  <input
                    type="datetime-local"
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
              )}
              {selectedOption === "sales" && (
                <div>
                  <label className="block text-lg font-semibold text-gray-700">
                    What can we help you with?
                  </label>
                  <textarea
                    placeholder="Describe your requirements"
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  ></textarea>
                </div>
              )}
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.section>
    </div>
  );
}

export default TwowaySMS;
