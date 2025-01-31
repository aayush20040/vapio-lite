import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Public = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <>
      <div className="h-[650px] bg-gradient-to-r from-gray-200 to-white">
      <h1 className="flex justify-center text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-black font-serif">
  Public Review
</h1>


        <div className="flex items-start min-h-screen">
          {/* Left column: Text content */}
          <div className="w-1/2 p-8">
            <p className=" text-[20px] text-gray-800 mt-[80px] font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in ligula eu risus dapibus ultricies a eu nunc.
              Fusce vel odio vel arcu gravida Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, esse fugiat rerum, natus
           , non est velit dolore praesentium voluptatibus ipsam tempore dolores quasi exercitationem excepturi quos illo ut qui 
              modi facilis accusantium. Alias quisquam minima, itaque optio nemo a cum. scelerisque. Integer euismod ligula at dui sollicitudin, a 
              tristique lectus placerat.
            </p>
         
          </div>

          <div className="w-[900px] p-8">
  <div className="grid grid-cols-2 gap-[3px] mb-8 w-1/2">
      <div data-aos="fade-up">
        <img
          src="review 1.jpg"
          alt="Image 1"
          className="w-[180px] h-[180px] object-cover rounded-[20%]"
        />
      </div>
      <div data-aos="fade-up">
        <img
          src="Review 3.jpg"
          alt="Image 2"
          className="w-[180px] h-[180px] object-cover rounded-[20%]"
        />
      </div>
      <div data-aos="fade-up">
        <img
          src="Review 3.jpg"
          alt="Image 3"
          className="w-[180px] h-[180px] object-cover rounded-[20%]"
        />
      </div>
      <div data-aos="fade-up">
        <img
          src="Review 4.jpg"
          alt="Image 4"
          className="w-[180px] h-[180px] object-cover rounded-[20%]"
        />
      </div>
    </div>




  {/* Bottom section: Larger image */}
  <div className="ml-52 relative top-[-350px]">
  <img src="phone1.png" alt="Example Image" className="w-[550px] h-[550px] object-cover rounded-lg" />
</div>

</div>

        </div>
      </div>
    </>
  );
};

export default Public;
