import React from 'react';
import { Button, Card, Chip, CloseButton } from "@heroui/react";
import Image from 'next/image';
import { HeartFill, ArrowDownToSquare } from '@gravity-ui/icons';
import Link from 'next/link';

const PhotoCard = ({ item }) => {
    return (
        <Card key={item.id} className="flex flex-col rounded-2xl">
            <div className='relative'>
                <Image
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.title}
                    aria-hidden="true"
                    className="object-top h-full w-full object-cover aspect-square rounded-lg"
                    src={item.imageUrl}
                />

                <Chip className='absolute top-2 right-2'>{item.category}</Chip>
            </div>

            <div className="z-10 flex flex-1 flex-col gap-3 bg-white">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8">{item.title}</Card.Title>
                    <Card.Description>
                        {item.prompt}
                    </Card.Description>
                    <Card.Footer className='flex-col'>
                        <div className='flex justify-between w-full mt-2'>
                            <span className='flex justify-center items-center gap-2'><HeartFill /> {item.likes}</span>
                            <span className='flex justify-center items-center gap-2'><ArrowDownToSquare /> {item.downloads}</span>
                        </div>
                        <Link className='w-full' href={`/all-photos/${item.id}`}><Button className="w-full mt-4" variant='outline'>View</Button></Link>
                    </Card.Footer>
                </Card.Header>
            </div>
        </Card>
    );
};

export default PhotoCard;