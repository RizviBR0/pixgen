import { Chip } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
    const res = await fetch("https://pixgen-kappa.vercel.app/category.json");
    const categories = await res.json();

    return (
        <div className='flex gap-3 flex-wrap mb-6'>
            {categories.map((category) => (
                <Link key={category.id} href={`?category=${category.slug}`}>
                    <Chip className='border bg-transparent cursor-pointer hover:bg-gray-200' size='lg'>
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                    </Chip>
                </Link>
            ))}
        </div>
    );
};

export default Category;