import React from 'react';
import { SmallCard } from '../widgets';

interface Props {
  categories: Category[];
}

const Explore = ({ categories }: Props) => {
  // console.log(categories.map(item => item.img));
  const category = {
    img: '/assets/airbnb.png',
    location: 'NewYork',
    distance: '45 minutes drive',
  };
  return (
    <section id="explore" className="my-6">
      <div className="container">
        <div className="flex flex-col">
          <h2 className="pb-5 text-2xl font-semibold capitalize lg:text-4xl">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SmallCard category={category} />
            <SmallCard category={category} />
            <SmallCard category={category} />
            <SmallCard category={category} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
