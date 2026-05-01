import React from 'react';
import PhotoCard from './PhotoCard';
import Link from 'next/link';

const TopGenerations = async () => {
    const res = await fetch('https://pixgen-kappa.vercel.app/data.json');
    const d = await res.json();

    const data = d.slice(0, 7);

    return (
        <div>
            <div className="grid grid-cols-4 gap-6 mt-10">
                {data.map((item) => (
                    <PhotoCard key={item.id} item={item} />
                ))}
            </div>

            <div className='w-full flex justify-center mt-8'>
                <Link className='button border font-semibold bg-black text-white hover:scale-105 hover:bg-gray-800 hover:w-24 transition-all animate-spin' href="/all-photos">View All</Link>
            </div>
        </div>
    );
};

export default TopGenerations;