import React, { useEffect } from 'react';
import otp from '../src/assets/otp.jpg'
import otp2 from '../src/assets/OTP 2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Signup from './Signup';

const Otp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // Initialize AOS
  }, []);

  
  return (
    <>
    
      <div className="relative h-[700px] flex flex-col md:flex-row justify-between items-center text-center p-2 bg-gray-100" data-aos="fade-up">
        {/* Top-center heading */}
        <h1 className="absolute top-0 left-0 right-0 text-3xl  md:text-4xl py-10  mt-10 font-extrabold text-orange-700 font-poppins ">
          Reliable and Fast OTP SMS Delivery for Your Business
        </h1>

        {/* Left side (text content) */}
        <div className="flex flex-col justify-center items-start text-centre max-w-4xl px-8 mt-16 md:mt-0" data-aos="fade-up">
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-gray-800 mb-6">
            Vapio offers reliable and fast OTP SMS delivery, ensuring seamless and secure user authentication for your business.
            With instant delivery, you can provide customers with a smooth and secure login experience every time.
            Trust Vapio to enhance your security with quick and dependable one-time password messages.
          </p>

          {/* Button */}
          <button className="px-6 py-4 ml-[300px] bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
            Get Started Today
          </button>
        </div>

        {/* Right side (image) */}
        <div className="relative w-full md:w-1/2 h-full" data-aos="fade-left">
          <img
            src={otp}  // Correct image reference
            alt="OTP SMS"
            className="absolute w-[500px] h-[500px] object-cover rounded-[50%] mt-[100px] ml-10"
          />
        </div>
      </div>

      <div className="relative z-10 text-center mt-20" data-aos="fade-up">
        {/* Heading with gradient and shadow */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 bg-gradient-to-l from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text shadow-lg font-poppins mt-[-50px] py-10">
          How OTP Services Benefit Your Business
        </h1>

        {/* Paragraph with beautiful styling */}
        <p className="text-lg md:text-xl font-semibold leading-relaxed py-10 mt-5 text-gray-800 mx-auto text-center px-4 md:px-0 font-roboto">
          OTP services enhance security by verifying user logins, payments, and account access. By sending one-time passwords, businesses ensure only authorized users can complete sensitive actions, minimizing fraud risks. Easy integration into apps, websites, and portals provides a secure, seamless experience.
        </p>
      </div>

      <div className="py-12 bg-gray-100" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto px-6 mt-6">
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
              <h2 className="text-xl font-bold text-center text-orange-600 mb-4">
                Two-Factor Authentication (2FA)
              </h2>
              <p className="text-gray-600 text-center">
                Add an extra layer of security to your systems with Vapio's OTP service, ensuring secure access without complicating the user experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg hover:bg-green-50 transition-all duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
              <h2 className="text-xl font-semibold text-center text-orange-600 mb-4">
                Passwordless Logins
              </h2>
              <p className="text-gray-600 text-center">
                Say goodbye to traditional passwords. With Vapio’s OTP service, users can be securely verified each time they log in, simplifying the process.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg hover:bg-yellow-50 transition-all duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
              <h2 className="text-xl font-semibold text-center text-orange-600 mb-4">
                Spam Prevention
              </h2>
              <p className="text-gray-600 text-center">
                Effectively block spam registrations and eliminate fake sign-ups with Vapio’s OTP service, securing your backend systems and maintaining clean user data.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg hover:bg-purple-50 transition-all duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
              <h2 className="text-xl font-semibold text-center text-orange-600 mb-4">
                Account Reactivations
              </h2>
              <p className="text-gray-600 text-center">
                Reconfirm user identity with OTP verification before reactivating accounts, ensuring that only authorized individuals regain access.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg hover:bg-teal-50 transition-all duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
              <h2 className="text-xl font-semibold text-center text-orange-600 mb-4">
                Password Resets
              </h2>
              <p className="text-gray-600 text-center">
                Avoid sending codes or links via email for password resets. Use Vapio’s OTP service to verify users before allowing password changes.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg hover:bg-pink-50 transition-all duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
              <h2 className="text-xl font-semibold text-center text-orange-600 mb-4">
                Transaction Authentication
              </h2>
              <p className="text-gray-600 text-center">
                Protect transactions with an added layer of security. Vapio’s OTP service ensures safe and verified transactions for both customers and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="items-center mt-10 bg-gray-100" data-aos="fade-up bg pt-20 ">
        <h1 className="text-3xl md:text-4xl max-w-4xl ml-72 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 font-poppins items-center text-center">
          Building Seamless Customer Interactions for Global Enterprises
        </h1>

        <div className="bg-gray-100 py-20 sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" data-aos="fade-up" />
              <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" data-aos="fade-up" />
              <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" data-aos="fade-up" />
              <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" data-aos="fade-up" />
              <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center mt-10" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl max-w-6xl ml-52 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 font-poppins items-center text-center">
        Customer Experiences That Leave a Lasting Impression
(make customer review in autochange slide )

        </h1>

        <div className="">
         <img src={otp2} alt="" className=' ml-52'/>
        </div>
      </div>
      <div className="items-center mt-10 bg-gray-100" data-aos="fade-up bg pt-20 ">
        <h1 className="text-5xl md:text-4xl max-w-4xl ml-72 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 font-poppins items-center text-center">
        How Enterprises Benefit 
from Vapio’s OTP Solutions
        </h1>
        <p className=' text-center max-w-5xl items-center ml-52 my-10 py-10'>Vapio’s OTP  solutions provide enterprises with a secure and seamless way to verify user identities, protect transactions, and ensure safe access across applications. By enhancing security without compromising user experience, businesses can build trust, reduce fraud, and improve operational efficiency.</p>
        </div>
     <Signup></Signup>
    </>
    
  );
}

export default Otp;
