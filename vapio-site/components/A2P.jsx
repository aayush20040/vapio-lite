import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import image from'../src/assets/image.png'
function A2P() {
  const [selectedOption, setSelectedOption] = useState(null);
  

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
        Expand Your CommunicationPower with Vapio Mobile's<br />
        <span className="text-orange-600">A2P SMS Platform</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        Connect Effortlessly with Customers via Our Secure SMS Platform,  
        <br />
        Preferred by Businesses for Fast and Dependable Communication.
!
      </motion.p>
      <motion.h2
          className="text-3xl font-bold text-orange-600 text-center mb-15 hover:tracking-wider transition-all-duration-100 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          Maximize Impact with Purpose-Driven 
A2P SMS

        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
        Designed to support large-scale  bulk messaging,
         it integrates smoothly with your existing infrastructure, 
        ensuring reliable delivery across all networks. 
        Backed by a dedicated support team, we ensure
         your messaging campaigns are both effective
         and compliant. Make your messaging campaigns 
        effective and secure with our SMS solutions.
        .</p>
        
        
        <motion.img
        src={image} // Use the imported image here
        alt="Description of the image"
        className="mx-auto mt-6 rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
        style={{ background: 'transparent' }}
      />

      

      {/* How It Works Section */}
      <motion.section
        className="mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      > {/* Vapio's Must-Know Features Section */}
{/* Vapio's Must-Know Features Section */}


<motion.h2
  className="text-3xl font-bold text-orange-600 text-center mt-16 hover:tracking-wider transition-all duration-300"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariant}
>
The advantages of using A2P SMS messaging via Vapio
</motion.h2>
{/* New Cards Section */}

<section className="mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {[
      {
        title: "Smooth integration",
        description: "Our user-friendly SMS APIs are designed for even the most beginner-level developers. We provide free integration consultations, comprehensive API documentation, and easy-to-follow video tutorials to ensure a smooth setup. ",
        tid: "interactive-support", // Optional tid
      },
      {
        title: "CRM-Integrated",
        description: "No tool is more powerful than a CRM platform, and no communication channel is more efficient than SMS", // Optional tid
      },
      {
        title: "One-Time Passcode (OTP)",
        description: "A2P SMS implementation can be leveraged for one-time passwords (OTPs), a security feature where users receive a unique alphanumeric code to securely log in to an online platform or website.",
        tid: "interactive-support", // Optional tid
      },
      {
        title: "24/7 Assistance",
        description: "If you require help setting up our SMS gateway in your application or want more details about Application-to-Person (A2P) SMS, don’t hesitate to reach out to one of our integration specialists today.",
        tid: "proactive-engagement", // Optional tid
      },
      {
        title: "Bulk SMS Pricing Plans",
        description: "Whether you’re on a prepaid or postpaid plan, we provide highly competitive rates for both domestic and international SMS delivery. Whether you send one SMS a month or a million, we offer flexible payment options tailored to meet your business needs.",
        tid: "interactive-support", // Optional tid
      },
      {
        title: "Multi-Layered Authentications",
        description: "A2P SMS messaging provides an ideal security layer for a multi-factor authentication strategy. More secure than email authentication, sending an alphanumeric SMS token to a mobile number strengthens your application’s security while enhancing customer trust in your business.",
        tid: "proactive-engagement", // Optional tid
      },
      {
        title: "SMS notifications and alerts",
        description: "Application-to-person messaging is widely used by businesses for sending alerts and notifications, like appointment reminders, enabling real-time communication with customers.",
        tid: "interactive-support", // Optional tid
      },
      {
        title: "SMS Workflow Automation",
        description: "Building an automated messaging workflow can significantly save time and resources for your business. Thanks to our seamless API integration, the automation process will manage your outbound client communications with minimal effort on your part",
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

export default A2P;
