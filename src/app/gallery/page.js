"use client";

import { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch('/api/images');
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setImages(data.files || []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className='text-center mb-8 text-6xl font-bold text-black'>Gallery</h1>
      <div className="grid grid-cols-5 gap-4">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="border p-2">
              <img src={image.webContentLink} alt={image.name} className="w-full h-auto" />
            </div>
          ))
        ) : (
          <p className='text-center text-4xl font-bold text-black'>No images found.</p>
        )}
      </div>
    </div>
  );
}
