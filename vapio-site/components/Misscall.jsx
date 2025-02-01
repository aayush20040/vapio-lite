import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kala from '../src/assets/kala.png';
import { useState } from 'react';

export default function LeftHeadingRightImage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animations will trigger only once
    });
  }, []);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  return (
    <>
      <div 
        className="flex items-center justify-between p-6 bg-gray-100 rounded-xl shadow-md w-full h-screen" 
        data-aos="fade-up"
      >
        {/* Left Side: Heading */}
        <div className="w-1/2 text-left p-10" data-aos="fade-right">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Missed Call Service for Improved Customer Communication
          </h2>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Generate leads and run effective campaigns
            <br />
            at no cost using the Missed Call Service,
            <br />
            making it easy for customers to engage and
            <br />
            for you to capture valuable insights.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-end p-10" data-aos="fade-left">
          <img
            src={kala}
            alt="Missed Call Service"
            className="rounded-lg shadow-lg w-full h-100 w-200"
          />
        </div>
      </div>

      {/* Reversed Layout (Image on Left and Heading on Right) */}
      <div 
        className="flex items-center justify-between p-6 bg-gray-100 rounded-xl shadow-md w-full h-screen mt-[-220px]" 
        data-aos="fade-up"
      >
        {/* Left Side: Image */}
        <div className="w-1/2 flex justify-start p-10" data-aos="fade-right">
          <img
            src={kala}
            alt="Missed Call Service"
            className="rounded-lg shadow-lg w-full h-100 w-200"
          />
        </div>

        {/* Right Side: Heading */}
        <div className="w-1/2 text-left p-10" data-aos="fade-left">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Missed Call Service for Improved Customer Communication
          </h2>
          <p className="text-center text-gray-600 mt-4 text-lg">
            
The Vapio Missed Call Service allows your customers<br/> to give you a missed call, and you’ll instantly receive <br/>details about the call, enabling you to follow up efficiently.<br/> This service makes it easier for potential customers<br/> to reach out to you without the hassle of making a direct call.

          </p>
        </div>
        
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-100">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mt-6">
        Benefits Of Using Missed Call Service
        </h2>

        {/* Paragraph Below the Heading */}
        <p className="text-center text-gray-600 mt-4 text-lg max-w-2xl">
          Connect with your audience effortlessly and boost engagement with our Missed Call Service.
          
          It’s simple, cost-effective, and designed to help you reach your goals faster. Don’t miss out—start today!
        </p>
      </div>
     
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Card 1 */}
        <div 
          className="  bg-white p-6 rounded-lg shadow-lg" 
          data-aos="fade-right"
        >
          <h3 className="  text-xl font-semibold text-gray-800 text-center">Boost Lead Generation</h3>
          <p className=" text-center text-gray-600 mt-4">
          Accelerate high-quality lead acquisition by receiving real-time prospect details, enabling swift and efficient engagement.
          </p>
        </div>

        {/* Card 2 */}
        <div 
          className="text-center bg-white p-6 rounded-lg shadow-lg" 
          data-aos="fade-up"
        >
          <h3 className="text-center text-xl font-semibold text-gray-800">Broaden Market Reach</h3>
          <p className="text-center text-gray-600 mt-4">
          Increase brand visibility during promotional periods by launching SMS campaigns powered by missed calls, extending your reach to a wider audience.
          </p>
        </div>

        {/* Card 3 */}
        <div 
          className=" bg-white p-6 rounded-lg shadow-lg" 
          data-aos="fade-left"
        >
          <h3 className="text-xl text-center font-semibold text-gray-800">Opt-in Missed Call Services</h3>
          <p className="text-center text-gray-600 mt-4">
          Easily confirm customer interest in specific services or products through missed calls, simplifying opt-ins while ensuring compliance with DND regulations.
          </p>
        </div>

        {/* Card 4 */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg" 
          data-aos="fade-right"
        >
          <h3 className="text-xl text-center font-semibold text-gray-800">Outbound Calling Campaigns</h3>
          <p className="text-center text-gray-600 mt-4">
          Combine missed call solutions with outbound calling campaigns, using targeted messages to connect with customers on their contact numbers.
          </p>
        </div>

        {/* Card 5 */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg" 
          data-aos="fade-up"
        >
          <h3 className="text-xl text-center font-semibold text-gray-800">Improve Campaign Interactivity</h3>
          <p className="text-center text-gray-600 mt-4">
          Collect valuable customer feedback while also calling them back to share product updates and new launches, enhancing engagement
          </p>
        </div>

        {/* Card 6 */}
        <div 
          className="bg-white text-center p-6 rounded-lg shadow-lg" 
          data-aos="fade-left"
        >
          <h3 className="text-xl text-center font-semibold text-gray-800">Seamless CRM Integration</h3>
          <p className="text-gray-600 mt-4">
          Integrate Vapio’s missed call solution with any leading CRM software, automatically syncing customer data for smoother management and follow-ups.
          </p>
        </div>
        
      </div>
      <div className="flex justify-center mt-6 mb-10">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-blue-500 transition duration-300 ease-in-out">
          Get Started Now
        </button>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-100">
        <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mt-6">
          Benefits Of Using Missed Call Service
        </h2>
      </div>
      
        {/* Cards Section with 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {[
          { title: 'AUTOMATED HASSLE-FREE MODE', desc: 'Vapio’s automated missed call services offer a hassle-free experience for customers, automatically disconnecting after a predefined number of rings..' },
          { title: 'UNLIMITED CALL REPORTING', desc: 'Manage and monitor all services and solutions provided to clients, with comprehensive reporting for accurate measurement and alignment.' },
          { title: 'SECURED SMS', desc: 'Enjoy multiple secure message delivery options, ensuring a safe and encrypted connection to your client’s services..' },
          { title: 'SECURED SMS', desc: 'Enjoy multiple secure message delivery options, ensuring a safe and encrypted connection to your client’s services.' },
          { title: 'SUPPORT FOR HTTP/HTML', desc: 'Our API integration supports HTTP/HTML protocols, making it easy to connect and integrate your business with Vapio’s robust APIs for a variety of use cases' },
          { title: 'TEXT LANGUAGE EDITOR', desc: 'Customize your messaging with Vapio’s text language editor, allowing you to personalize messages and update content easily.' },
          { title: 'CUSTOM SMS', desc: 'Send personalized and tailored messages to clients, giving you the flexibility to convey specific business details effectively.' },
          { title: 'BEST CONNECTIONS', desc: 'Vapio’s advanced software APIs ensure fast, reliable delivery with multiple backup routes, offering unmatched connectivity and service quality.' }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 text-center">{item.title}</h3>
            <p className="text-center text-gray-600 mt-4">{item.desc}</p>
          </div>
          
        ))}
      </div>
      <div className="flex items-center justify-between p-6 bg-gray-100 mt-6">
  {/* Left Side: Heading */}
  <div className="w-1/2 text-left">
    <h2 className=" mt-4 text-4xl font-semibold flex justify-center text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
    Let's Create a Digital Future Together 
    </h2>
  </div>

  {/* Right Side: Button */}
  <div className="w-1/2 flex justify-end">
    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-blue-500 transition duration-300 ease-in-out mt-4 mr-10">
      Talk to Expert 
    </button>
  </div>
</div>
      
      <div className=" mt-10 p-8 bg-gradient-to-r from-blue-50 to-purple-100">
  <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto space-y-6">
    {[
      { question: 'What is a missed call solution and how does it work?', answer: 'A missed call solution allows customers to give your business a missed call, which automatically triggers a response or action. You receive the call details, allowing you to follow up and engage with customers in real-time. It’s a cost-effective way to generate leads and improve customer interaction.' },
      { question: ' How can a missed call solution help my business?', answer: 'It helps in generating leads, running campaigns, and improving customer engagement by allowing customers to reach out with a simple missed call. You can also track interactions, gather feedback, and follow up with leads efficiently..' },
      { question: 'Is the missed call service secure?', answer: 'Yes, Vapio’s missed call solution is secure. We use encrypted communication and ensure that all customer data is handled safely, in compliance with data protection regulations.' },
      { question: ' Can I integrate the missed call solution with my CRM?', answer: 'AAbsolutely! Vapio’s missed call service can be seamlessly integrated with your CRM system, allowing you to automatically capture and manage customer data for better follow-up and tracking.' },
      { question: 'How much does the missed call solution cost?', answer: 'The cost of the missed call solution depends on your specific usage and requirements. Vapio offers flexible pricing options that cater to businesses of all sizes. Feel free to get in touch with our team to get a personalized quote.' }
    
    ].map((faq, index) => (
      <div key={index} className="rounded-xl overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-200 hover:to-pink-200">
        <button
          className="w-full text-left p-6 bg-white shadow-lg hover:bg-gradient-to-r hover:from-indigo-100 hover:to-pink-100 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300 ease-in-out"
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="text-xl font-semibold text-gray-800 tracking-wide">{faq.question}</h3>
        </button>
        {openFAQ === index && (
          <p className="p-6 text-gray-700 bg-gradient-to-r from-yellow-50 to-orange-100 border-l-4 border-blue-500 rounded-b-lg transition-all duration-500 ease-in-out transform opacity-100">
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>
</div>

    </>
  );
}
