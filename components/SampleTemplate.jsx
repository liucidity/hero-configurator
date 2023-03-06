import React from 'react';
import Image from 'next/image'



const SampleTemplate = () => {
  return (
    <div className="hero-section bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">Sample Tagline to be Generated</h1>
            <p className="text-gray-600 text-xl mb-8">Sample Text to be generated</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Call to action</button>
          </div>
          <div className="lg:w-1/2">
            <div className="hero-image rounded-lg overflow-hidden">
              <Image src="https://picsum.photos/1600/500" width='1600' height={500} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleTemplate;
