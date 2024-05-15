'use client'

import { useState } from 'react';
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
  ];

  // Se a ordem for 'desc', inverta a ordem das fotos
  const sortedPhotos = sortOrder === 'desc' ? photos.slice().reverse() : photos;

  return (
    <div>
      <div className="gallery">
        {sortedPhotos.map(photo => (
          <div key={photo.id} className="photo">
            <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
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
