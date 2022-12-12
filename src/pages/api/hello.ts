// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  categories: Category[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    categories: [
      { img: '/assets/airbnb.png', location: 'London', distance: '45 minute drive' },
      { img: '/assets/airbnb.png', location: 'Manchester', distance: '4.5-hours drive' },
      { img: '/assets/airbnb.png', location: 'Livepool', distance: '4.5-hours drive' },
      { img: '/assets/airbnb.png', location: 'York', distance: '4-hour drive' },
      { img: '/assets/airbnb.png', location: 'Cardiff', distance: '45-minutes drive' },
      { img: '/assets/airbnb.png', location: 'Birkenhead', distance: '45-minutes drive' },
      { img: '/assets/airbnb.png', location: 'NewQuay', distance: '6-hour drive' },
      { img: '/assets/airbnb.png', location: 'Love', distance: '2-hour drive' },
    ],
  });
}
