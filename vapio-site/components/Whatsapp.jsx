import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import kala from '../src/assets/kala.png';
import { useState } from 'react';
function Whatsapp() {
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
              Maximize Your ROI with WhatsApp Marketing
              </h2>
              <p className="text-center text-gray-600 mt-4 text-lg">
              Strengthen your brand presence, foster interactive customer dialogues, and boost sales through personalized offers on WhatsApp. This direct, one-on-one communication channel helps you connect authentically, improving recognition and building lasting relationships with your audience.
              </p>
              <div className="flex justify-center mt-6">
            <button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white py-2 px-8 rounded-lg shadow-md hover:bg-gradient-to-l transition duration-300 px-5 py-2">
              Get Started Today
            </button>
          </div>
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
          <div className="flex justify-end p-10">
  <div className="text-right w-full">
    {/* First Heading: Centered */}
    <h1 className="text-5xl mt-10 font-semibold bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent text-center">
      Benefits of Whatsapp Marketing
    </h1>

    {/* Second Heading: Right Aligned */}
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-right mt-10">
    Boost ROI and Efficiency with WhatsApp Campaigns
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-le  text-lg">
    Boost your return on investment with WhatsApp campaigns that minimize ad spend.<br/> Take advantage of automated scheduling and data-driven strategies, personalized<br/> to customer interactions and their journey stage. This approach enhances efficiency,<br/> while freeing up your time for more creative thinking and strategic planning. Trust Vapio <br/>to streamline your WhatsApp marketing and drive impactful results.
    </p>
    <div className="mt-6 ">
      <h6 className="text-3xl font-semibold text-gray-700 mr-20 ">Advantages:</h6>
      <ul className="text-gray-600 mt-2 list-disc list-inside">
        <li>Boost customer engagement and interaction.</li>
        <li>Track real-time campaign performance.</li>
        <li>Gain detailed insights for better decision-making.</li>
        <li>Cost-effective way to capture leads and feedback.</li>
      </ul>
    </div>



    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-left mt-10">
    Boost ROI and Efficiency with WhatsApp Campaigns
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-left  text-lg">
    Boost your return on investment with WhatsApp campaigns that minimize ad spend.<br/> Take advantage of automated scheduling and data-driven strategies, personalized<br/> to customer interactions and their journey stage. This approach enhances efficiency,<br/> while freeing up your time for more creative thinking and strategic planning. Trust Vapio <br/>to streamline your WhatsApp marketing and drive impactful results.
    </p>
    <div className="mt-6 text-left">
      <h6 className="text-3xl font-semibold text-gray-700 mr-20 ">Advantages:</h6>
      <ul className="text-gray-600 mt-2 list-disc list-inside">
        <li>Boost customer engagement and interaction.</li>
        <li>Track real-time campaign performance.</li>
        <li>Gain detailed insights for better decision-making.</li>
        <li>Cost-effective way to capture leads and feedback.</li>
      </ul>
    </div>
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-right mt-10">
    Precision Marketing for Higher Conversions
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-right text-lg">
  Utilize an automated product quiz on WhatsApp to gather customer insights and email <br />opt-ins.
  
  Follow up with customized offers through outbound messaging to boost conversions.<br />

  Enhance customer trust by providing timely updates on orders, add-on suggestions,<br /> cancellations, and refunds.
</p>

    <div className="mt-6 ">
      <h6 className="text-3xl font-semibold text-gray-700 mr-20 ">Advantages:</h6>
      <ul className="text-gray-600 mt-2 list-disc list-inside">
        <li>Boost customer engagement and interaction.</li>
        <li>Track real-time campaign performance.</li>
        <li>Gain detailed insights for better decision-making.</li>
        <li>Cost-effective way to capture leads and feedback.</li>
      </ul>
    </div>
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-left mt-10">
    Boost ROI and Efficiency with WhatsApp Campaigns
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-left  text-lg">
    Boost your return on investment with WhatsApp campaigns that minimize ad spend.<br/> Take advantage of automated scheduling and data-driven strategies, personalized<br/> to customer interactions and their journey stage. This approach enhances efficiency,<br/> while freeing up your time for more creative thinking and strategic planning. Trust Vapio <br/>to streamline your WhatsApp marketing and drive impactful results.
    </p>
    <div className="mt-6 text-left">
      <h6 className="text-3xl font-semibold text-gray-700 mr-20 ">Advantages:</h6>
      <ul className="text-gray-600 mt-2 list-disc list-inside">
        <li>Boost customer engagement and interaction.</li>
        <li>Track real-time campaign performance.</li>
        <li>Gain detailed insights for better decision-making.</li>
        <li>Cost-effective way to capture leads and feedback.</li>
      </ul>
    </div>
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-right mt-10">
    Precision Marketing for Higher Conversions
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-right text-lg">
  Utilize an automated product quiz on WhatsApp to gather customer insights and email <br />opt-ins.
  
  Follow up with customized offers through outbound messaging to boost conversions.<br />

  Enhance customer trust by providing timely updates on orders, add-on suggestions,<br /> cancellations, and refunds.
</p>

    <div className="mt-6 ">
      <h6 className="text-3xl font-semibold text-gray-700 mr-20 ">Advantages:</h6>
      <ul className="text-gray-600 mt-2 list-disc list-inside">
        <li>Boost customer engagement and interaction.</li>
        <li>Track real-time campaign performance.</li>
        <li>Gain detailed insights for better decision-making.</li>
        <li>Cost-effective way to capture leads and feedback.</li>
      </ul>
    </div>
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-left mt-10">
    Boost ROI and Efficiency with WhatsApp Campaigns
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-left  text-lg">
    Boost your return on investment with WhatsApp campaigns that minimize ad spend.<br/> Take advantage of automated scheduling and data-driven strategies, personalized<br/> to customer interactions and their journey stage. This approach enhances efficiency,<br/> while freeing up your time for more creative thinking and strategic planning. Trust Vapio <br/>to streamline your WhatsApp marketing and drive impactful results.
    </p>
    <div className="mt-6 text-left">
      <h6 className="text-3xl font-semibold text-gray-700 mr-20 ">Advantages:</h6>
      <ul className="text-gray-600 mt-2 list-disc list-inside">
        <li>Boost customer engagement and interaction.</li>
        <li>Track real-time campaign performance.</li>
        <li>Gain detailed insights for better decision-making.</li>
        <li>Cost-effective way to capture leads and feedback.</li>
      </ul>
    </div>
    <h1 className="text-5xl font-semibold mt-10 bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent text-center">
      Benefits of Whatsapp Marketing
    </h1>
    <div className="grid grid-cols-3 gap-6 mt-10">
  {/* Card 1 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-center mb-4">Opt-Ins</h3>
    <p className="text-gray-600text-center">Engage with your customers throughout their buying journey using WhatsApp's easy opt-in process. Once customers opt in, you can send personalized product recommendations, sales alerts, abandoned cart reminders, and more, fostering a deeper connection with them.</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-center mb-4">Exclusive Deals and Discounts</h3>
    <p className="text-gray-600 text-center">Offer exclusive promotions and discounts to your customers, encouraging them to shop easily at your eCommerce, retail, or WhatsApp store. WhatsApp marketing helps you provide tailored deals that increase engagement and drive sales.</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-center mb-4">Product Launch Alerts</h3>
    <p className="text-gray-600 text-center">Leverage WhatsApp’s rich media capabilities to announce new products with clear visuals. Engage your target audience with special early bird offers, enticing them to try your latest items.</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-center mb-4">Abandoned Cart Reminders</h3>
    <p className="text-gray-600 text-center">Recover abandoned carts by reaching out to customers with a gentle reminder about their interest. Offering a discount or asking about their purchase preference can encourage them to complete the transaction</p>
  </div>

  {/* Card 5 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl text-centerfont-semibold mb-4">Stock Availability Notifications</h3>
    <p className="text-gray-600 text-center">Keep customers informed about limited stock or time-sensitive promotions. Create urgency with out-of-stock alerts, ensuring customers don’t miss out on their desired products.</p>
  </div>

  {/* Card 6 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-center mb-4">Customer Re-Engagement Reminders</h3>
    <p className="text-gray-600 text-center">Bring dormant customers back with re-engagement alerts, encouraging them to browse and purchase again. Leverage their purchase history and interest to entice them with tailored offers..</p>
  </div>

  {/* Card 7 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold  text-center mb-4">Customer Retention Campaigns</h3>
    <p className="text-gray-600 text-center">Strengthen customer loyalty through WhatsApp marketing by notifying customers about new arrivals, providing early access to sales, and offering exclusive benefits. Build long-lasting relationships and reduce churn.</p>
  </div>

  {/* Card 8 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-center mb-4">Service and Feedback</h3>
    <p className="text-gray-600 text-center">Improve your customer experience by keeping clients informed with delivery notifications, order confirmations, and appointment updates. Regular feedback collection helps you refine your services and build rapport.</p>
  </div>

  {/* Card 9 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-4 text-center">Product Recommendations</h3>
    <p className="text-gray-600 text-center">Boost sales by recommending additional or related products to your customers through WhatsApp. Personalized suggestions based on browsing and purchase history can help your customers discover new products they’ll love..</p>
  </div>
</div>


<div className="flex justify-end p-10">
  <div className="text-right w-full">
    {/* First Heading: Centered */}
    <h1 className=" mt-10 text-5xl font-semibold bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent text-center">
    Unlock the Full Potential of WhatsApp Marketing with Vapio
    </h1>

    {/* Second Heading: Right Aligned */}
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-right mt-10">
    Understand Customer Behavior
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-le  text-lg">
    Understanding customer behavior is essential for effective marketing. With Vapio's WhatsApp marketing capabilities, businesses can dive deep into customer demographics and behavioral patterns, gaining valuable insights to drive targeted campaigns. Our advanced analytics allow you to track customer preferences and actions, enabling you to tailor WhatsApp campaigns that resonate with their needs and interests.
    </p>
    </div>
    </div>


    <div className="flex justify-start p-10">
  <div className="text-right w-full">
    {/* Second Heading: Right Aligned */}
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-left mt-10">
    Create Engaging Customer Campaigns
    </h3>

    {/* Description */}
    <p className="text-gray-600 mt-4 text-left  text-lg">
    Customer engagement goes beyond just sending messages—it’s about creating meaningful interactions. With Vapio, you can design dynamic, personalized campaigns that truly resonate with your audience. Seamlessly integrate WhatsApp into your customer journey, delivering timely, relevant messages that foster connections and drive action. Whether it’s a product launch, exclusive offer, or tailored recommendations, your campaigns will stand out and deliver results.
    </p>
    </div>
    </div>


    <div className="flex justify-end p-10">
  <div className="text-right w-full">
    {/* First Heading: Centered */}
    <h3 className=" text-3xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent text-right mt-10">
   Send Personalized Communication over WhatsApp
    </h3>
    

   
    

    {/* Description */}
    <p className="text-gray-600 mt-4 text-le  text-lg">
    Generic messages are a thing of the past. In today's WhatsApp marketing, personalization is the key to success. Whether you're strengthening relationships with existing customers or attracting new ones, tailored communication makes all the difference. With Vapio, you can harness advanced segmentation tools to create customized campaigns that speak directly to your customers' needs, ensuring your messages are relevant and impactful every time.
    </p>
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
    
   




  </div>
</div>

   </>
  )
}

export default Whatsapp
