import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
    >
      {/* <div className="z-10 before:absolute before:block before:h-full before:w-full before:bg-black before:content-['']" /> */}
      <Image
        src="/assets/houses.jpg"
        className="object-cover"
        fill
        priority
        alt="banner-img"
      />
      <div className="absolute top-1/3 flex w-full flex-col items-center space-y-4 py-5 backdrop-blur-[2px] lg:py-7 lg:backdrop-blur-sm">
        <h1 className="text-center text-2xl font-bold text-slate-100 sm:text-3xl lg:text-4xl xl:text-5xl">
          Not sure Where to go ? Perfect.
        </h1>
        <button className="transform rounded-full bg-white p-4 font-bold text-purple-500 shadow-md transition duration-200 ease-in hover:scale-90 hover:shadow-xl sm:py-4 sm:px-10 sm:text-lg">
          I'm flexible
        </button>
      </div>
    </section>
  );
};

export default Banner;
