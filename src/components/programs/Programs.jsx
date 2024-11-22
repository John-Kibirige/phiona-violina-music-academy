import React from "react";

const Programs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-white font-bold text-5xl leading-tight mb-6">
                Discover the world's best music programs
              </h1>
              <p className="text-white text-xl mb-8">
                From hand-picked programs to your mind, we source the finest instrunments
                and train them to perfection.
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-white text-primary font-bold rounded-full hover:bg-blue-700 hover:text-white transition duration-200"
              >
                Register now
              </a>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286450/william-recinos-qtYhAQnIwSE-unsplash_vd9bmn.jpg"
                alt="Coffee beans"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Featured Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-110 w-full">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286530/Jazz_g7pwt6.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Program Name
                </h3>
                <p className="text-gray-700 text-base">
                Our most popular program, featuring perfection and composure from a experts in
                the field.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Why wait?</span>
                  <button className="px-4 py-2 bg-primary text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-110 w-full">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286530/download_3_l1s4iv.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Program Name
                </h3>
                <p className="text-gray-700 text-base">
                Our most popular program, featuring perfection and composure from a experts in
                the field.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Why wait?</span>
                  <button className="px-4 py-2 bg-primary text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-110 w-full">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286529/Featured_Artists_hjezhy.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Program Name
                </h3>
                <p className="text-gray-700 text-base">
                Our most popular program, featuring perfection and composure from a experts in
                the field.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Why wait?</span>
                  <button className="px-4 py-2 bg-primary text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-110 w-full">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286528/Welcome_to_the_Catalina_JazzTrax_Festival_Website_jvhorf.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Program Name
                </h3>
                <p className="text-gray-700 text-base">
                Our most popular program, featuring perfection and composure from a experts in
                the field.
                </p>
                <div className="mt-4 flex items-center justify-between transition transform hover:scale-110 w-full">
                  <span className="text-gray-700 font-medium">Why wait?</span>
                  <button className="px-4 py-2 bg-primary text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-110 w-full">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286531/download_2_pgdxqm.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Program Name
                </h3>
                <p className="text-gray-700 text-base">
                Our most popular program, featuring perfection and composure from a experts in
                the field.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Why wait?</span>
                  <button className="px-4 py-2 bg-primary text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

           {/* Product Card 1 */}
           <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-110 w-full">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732274808/4_4_Size_Neon_Pink_Violin_xpjouu.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Program Name
                </h3>
                <p className="text-gray-700 text-base">
                Our most popular program, featuring perfection and composure from a experts in
                the field.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Why wait?</span>
                  <button className="px-4 py-2 bg-primary text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-110 w-full">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286450/william-recinos-qtYhAQnIwSE-unsplash_vd9bmn.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Program Name
                </h3>
                <p className="text-gray-700 text-base">
                  Our most popular program, featuring perfection and composure from a experts in
                  the field. 
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Why wait?</span>
                  <button className="px-4 py-2 bg-primary text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Product Cards */}
            {/* Copy and reuse the above structure for additional cards */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
