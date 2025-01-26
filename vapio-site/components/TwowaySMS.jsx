import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function TwowaySMS() {
  const [selectedOption, setSelectedOption] = useState(null);
  const features = [
    {
      title: "Fast, real-time exchanges",
      description:
        "A key advantage of two-way texting is its speed. On average, text responses are received in just 90 seconds, making SMS an ideal tool for quick, back-and-forth communication. This allows businesses to resolve customer issues, address sales inquiries, and meet service level agreements faster than ever.",
    },
    {
      title: "Build customer bonds",
      description:
        "Two-way conversations enable businesses and customers to connect on a deeper level. Engaging in two-way messaging creates meaningful exchanges, showing that you’re attentive and genuinely care about addressing customer concerns. This helps foster stronger, more loyal relationships.",
    },
    {
      title: "Achieve better open and response rates",
      description:
        "With two-way SMS, get higher engagement and faster response times.",
    },
    {
      title: "Easily set up your channel",
      description: "Set up your two-way messaging system in just a few easy steps.",
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
    <div className="container mx-auto px-6 pt-12 py-12 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-2xl">
      {/* Header Section */}
      <motion.h1
        className="text-5xl font-extrabold mt-18 text-gray-800 leading-tight text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        Transform Customer Engagement with <br />
        <span className="text-orange-600">Two-Way SMS Texting</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        Leverage business texting to foster real-time, two-way conversations with
        customers, prospects, or team members. <br />
        <span className="font-semibold text-gray-800">
          Build relationships, get instant feedback, and simplify communication.
        </span>
        <br />
        Book a demo or kick off your 14-day free trial today!
      </motion.p>

      {/* Call to Action Button */}
      <motion.div
        className="mt-16 flex justify-center"
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
              className="feature-item flex flex-col items-center bg-white shadow-lg p-6 rounded-lg w-1/4 cursor-pointer hover:bg-orange-50 transition-all duration-300 relative"
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
              <span className="bg-orange-100 text-orange-600 p-4 rounded-full shadow-md mb-4">
                ✓
              </span>
              <span className="text-gray-700 font-medium">{feature.title}</span>

              {/* Hover to show description */}
              <div className="description-box absolute top-0 left-0 right-0 bg-white bg-opacity-90 p-6 rounded-lg opacity-0 hover:opacity-100 transition-all duration-300 overflow-hidden h-0 hover:h-auto">
                <p className="text-gray-600 text-center drop-shadow-sm">
                  {feature.description}
                </p>
              </div>
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
{/* Vapio's Must-Know Features Section */}
<section className="mt-16">
  <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-25 ">
    {[
      {
        title: "Auto-Reply Functionality",
        description: "With two-way messaging, customers can contact you anytime. Vapio enables you to set up auto-replies, helping manage response times and keeping clients informed of when to expect replies during business hours",
      },
      {
        title: "Secure Messaging",
        description: "Prioritizing the security of your conversations, Vapio provides a safe messaging environment, essential for industries with strict privacy requirements, like healthcare (HIPAA-compliant).",
      },
      {
        title: "Custom SMS Templates",
        description: "Save time with pre-made templates for frequently used messages, allowing you to quickly respond to common customer inquiries.",},
      {
        title: "MMS Messaging",
        description: "Boost engagement by sending multimedia messages, such as images, GIFs, and links, to enhance communication and customer support",
      },
      {
        title: "Performance Analytics",
        description: "Monitor key metrics, such as response times, to assess team performance and improve operational efficiency",
      },
      {
        title: "Text-Enabling Your Existing Number",
        description: "Vapio lets you text-enable your current landline, VoIP, or business number, making it simple to connect with customers on your preferred number.",
      },
      {
        title: "Mass Texting",
        description: "Effortlessly manage your contacts—add new ones, upload lists, or remove outdated entries with ease.",
      },
      {
        title: "Contact Management Made Simple",
        description: "Effortlessly manage your contacts—add new ones, upload lists, or remove outdated entries with ease.",
      },
      {
        title: "Scheduled Messaging",
        description: "Schedule messages in advance to ensure they’re sent at the most appropriate times, reaching customers, employees, or prospects exactly when needed.",
      },
      {
        title: "Compliance Support",
        description: "Schedule messages in advance to ensure they’re sent at the most appropriate times, reaching customers, employees, or prospects exactly when needed",
      },
    ].map((feature, index) => (
      <motion.div
        key={index}
        className="feature-item relative bg-white shadow-lg rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-orange-50"
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
        <span className="bg-orange-100 text-orange-600 p-4 rounded-full shadow-md mb-4 flex items-center justify-center w-12 h-12 mx-auto">
          ✓
        </span>
        <h3 className="text-lg font-medium text-gray-800 text-center">{feature.title}</h3>
        {/* Description Box on Hover */}
        <div className="description-box absolute top-0 left-0 right-0  bg-white bg-opacity-90 p-6 rounded-lg opacity-0 hover:opacity-100 transition-all duration-300 overflow-hidden h-0 hover:h-auto">
          <p className="text-gray-600 text-center drop-shadow-sm">{feature.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

<motion.h2
  className="text-3xl font-bold text-orange-600 text-center mt-16 hover:tracking-wider transition-all duration-300"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariant}
>
  Vapio’s Must-Know Standout Features
</motion.h2>
{/* New Cards Section */}

<section className="mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {[
      {
        title: "Interactive Customer Support",
        description: "Address customer inquiries, offer assistance, and boost satisfaction with Vapio's two-way SMS service.",
        tid: "interactive-support", // Optional tid
      },
      {
        title: "Feedback and Surveys",
        description: "Gain valuable insights into customer preferences and improve your offerings with Vapio's two-way SMS feedback and survey capabilities.", // Optional tid
      },
      {
        title: "Appointment Confirmations",
        description: "Address customer inquiries, offer assistance, and boost satisfaction with Vapio's two-way SMS service.",
        tid: "interactive-support", // Optional tid
      },
      {
        title: "Order Tracking and Updates",
        description: "From order confirmations to shipping notifications, ensure a smooth customer journey with Vapio's two-way SMS service..",
        tid: "proactive-engagement", // Optional tid
      },
    ].map((feature, index) => (
      <motion.div
        key={index}
        className="feature-item relative bg-white shadow-lg rounded-lg p-6"
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
        
        <h3 className="text-lg font-medium text-center text-gray-800">{feature.title}</h3>
        {/* Description Box */}
        <div className="description-box bg-white bg-opacity-90 p-6 rounded-lg">
          <p className="text-gray-600 text-center drop-shadow-sm">{feature.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>




        <h2 className="text-3xl font-bold text-orange-600 text-center mt-25 mb-8  hover:tracking-wider transition-all duration-300">
        Seamless API Integration
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
        Integrate Vapio’s user-friendly REST API in minutes<br/>
        to easily add two-way SMS functionality  <br />
        into your application.{" "}
          
        </p>
        
      </motion.section>
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
            className="option-card p-6 bg-gray-100 rounded-lg shadow-md cursor-pointer w-1/3 text-center hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-700">Schedule a Demo</h3>
            <p className="mt-2 text-gray-600">Book a personalized demo with our team.</p>
          </div>
          <div
            onClick={() => handleOptionSelect("sales")}
            className="option-card p-6 bg-gray-100 rounded-lg shadow-md cursor-pointer w-1/3 text-center hover:bg-gray-200 transition-all duration-300"
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
                <label className="block text-lg font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
              {selectedOption === "demo" && (
                <div>
                  <label className="block text-lg font-semibold text-gray-700">
                    Preferred Demo Time
                  </label>
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

      {/* Final Call to Action */}
      <motion.section
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        
      </motion.section>
      
    </div>
  );
}

export default TwowaySMS;
