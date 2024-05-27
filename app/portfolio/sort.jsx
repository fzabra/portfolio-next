'use client'

import React, { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';


export default function SortableGallery() {
  const searchParams = useSearchParams();
  const [sortOrder, setSortOrder] = useState('asc');

  function updateSorting(newSortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', newSortOrder);
    window.history.pushState(null, '', `?${params.toString()}`);
    setSortOrder(newSortOrder);
  }

  // Defina a ordem original das fotos
  const photos = [
    { id: 1, src: '/images/1.jpg', alt: 'Photo 1', width: 300, height: 200 },
    { id: 2, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 3, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 4, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 5, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 6, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 7, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 8, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 9, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 10, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 11, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 12, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 1, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 14, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 15, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 16, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 17, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 18, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 19, src: '/images/1.jpg', alt: 'Photo 2', width: 300, height: 200 },
    { id: 20, src: '/images/1b.jpg', alt: 'Photo 2', width: 300, height: 200 },
  ];

  // Se a ordem for 'desc', inverta a ordem das fotos
  const sortedPhotos = sortOrder === 'desc' ? photos.slice().reverse() : photos;

  return (
    <div>
      <div className="gallery">
        {sortedPhotos.map(photo => (
          <div key={photo.id} className="photo">
            <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
            <p className='texto'>Texto</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
        <button onClick={() => updateSorting('desc')}>Sort Descending</button>
      </div>
    </div>
  );
}
