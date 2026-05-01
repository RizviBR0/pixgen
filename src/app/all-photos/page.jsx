import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async ({ searchParams }) => {
    const { category } = await searchParams;

    const res = await fetch('https://pixgen-kappa.vercel.app/data.json');
    const data = await res.json();

    const filteredData = category ? data.filter(item => item.category.toLowerCase() == category.toLowerCase()) : data;

    return (
        <div>
            <h1 className='font-bold text-2xl mb-6'>All Photos</h1>
            <Category />
            <div className="grid grid-cols-4 gap-6">
                {filteredData.map((item) => (
                    <PhotoCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default AllPhotosPage;