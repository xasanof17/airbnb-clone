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
        alt="banner-img"
      />
      <div className="absolute top-1/3 md:top-1/2 flex w-full flex-col items-center space-y-4">
        <h1 className="text-center text-2xl font-bold text-radical sm:text-3xl lg:text-5xl">
          Not sure Where to go ? Perfect.
        </h1>
        <button className="rounded-full bg-white p-4 sm:text-lg font-bold text-purple-500 shadow-md transition-all duration-300 hover:scale-90 hover:shadow-xl sm:py-4 sm:px-10">
          I'm flexible
        </button>
      </div>
    </section>
  );
};

export default Banner;
