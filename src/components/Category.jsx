import { Chip } from '@heroui/react';
import Link from 'next/link';

const Category = async ({ category }) => {
    const res = await fetch("https://pixgen-kappa.vercel.app/category.json");
    const categories = await res.json();

    return (
        <div className='flex gap-3 flex-wrap mb-6'>
            {categories.map((cat) => (
                <Link key={cat.id} href={cat.name == "All" ? "?category" : `?category=${cat.slug}`}>
                    <Chip className={`${category.toLowerCase() == cat.slug.toLowerCase() ? 'bg-blue-500 text-white' : 'border bg-transparent cursor-pointer hover:bg-gray-200'}`} size='lg'>
                        <h2>{cat.name}</h2>
                        <p>{cat.description}</p>
                    </Chip>
                </Link>
            ))}
        </div>
    );
};

export default Category;