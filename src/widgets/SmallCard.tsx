import React from 'react';
import Image from 'next/image';
interface Props {
  category: Category;
}

const SmallCard = ({ category }: Props) => {
  return (
    <div className="flex transform cursor-pointer items-center space-x-4 rounded-xl border border-transparent transition duration-200 ease-out hover:scale-105 hover:border-slate-100 hover:bg-slate-50 hover:shadow">
      {/* Left */}
      <div className="relative h-20 w-20">
        <Image
          src={category.img}
          fill
          priority
          alt="img"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right */}
      <div className="flex flex-col">
        <h3>{category.location}</h3>
        <h4 className="text-gray-500">{category.distance}</h4>
      </div>
    </div>
  );
};

export default SmallCard;
