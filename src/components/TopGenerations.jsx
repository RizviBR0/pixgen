import React from 'react';

const TopGenerations = async () => {
    const res = await fetch('./data.json');
    const data = await res.json();
    console.log(data)

    return (
        <div>
            This is the topgeberation
        </div>
    );
};

export default TopGenerations;