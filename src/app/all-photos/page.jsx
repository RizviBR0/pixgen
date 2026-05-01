import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async () => {
    const res = await fetch('https://pixgen-kappa.vercel.app/data.json');
    const data = await res.json();

    return (
        <div>
            <h1 className='font-bold text-2xl mb-6'>All Photos</h1>
            <div className="grid grid-cols-4 gap-6">
                {data.map((item) => (
                    <PhotoCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default AllPhotosPage;