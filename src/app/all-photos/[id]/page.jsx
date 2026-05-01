import React from 'react';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://pixgen-kappa.vercel.app/data.json');
    const photos = await res.json();

    const expectedPhoto = photos.find(p => p.id == id);

    return (
        <div>
            This is Photo details page for ID: {expectedPhoto?.title}
        </div>
    );
};

export default PhotoDetailsPage;