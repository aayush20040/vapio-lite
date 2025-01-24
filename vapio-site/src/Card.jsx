import React from "react";

function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-[900px]">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 text-orange-500 rounded-4xl py-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-black font-serif">
            Our Products
          </h1>
          <p className="mt-4 text-xl font-medium opacity-80 text-black">
            Explore the range of products we offer to meet your needs
          </p>
        </div>
      </header>

      {/* Product Section */}
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="sms.jpg"
              alt="SMS API"
              className="w-[100px] h-[100px] object-cover mx-auto mt-6"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">SMS API</h2>
              <p className="mt-2 text-gray-600">
                Send and Receive Text Messages Programmatically
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="sms.jpg"
              alt="SMS API"
              className="w-[100px] h-[100px] object-cover mx-auto mt-6"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">SMS API</h2>
              <p className="mt-2 text-gray-600">
                Send and Receive Text Messages Programmatically
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="sms.jpg"
              alt="SMS API"
              className="w-[100px] h-[100px] object-cover mx-auto mt-6"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">SMS API</h2>
              <p className="mt-2 text-gray-600">
                Send and Receive Text Messages Programmatically
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="sms.jpg"
              alt="SMS API"
              className="w-[100px] h-[100px] object-cover mx-auto mt-6"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">SMS API</h2>
              <p className="mt-2 text-gray-600">
                Send and Receive Text Messages Programmatically
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="sms.jpg"
              alt="SMS API"
              className="w-[100px] h-[100px] object-cover mx-auto mt-6"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">SMS API</h2>
              <p className="mt-2 text-gray-600">
                Send and Receive Text Messages Programmatically
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="sms.jpg"
              alt="SMS API"
              className="w-[100px] h-[100px] object-cover mx-auto mt-6"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">SMS API</h2>
              <p className="mt-2 text-gray-600">
                Send and Receive Text Messages Programmatically
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
