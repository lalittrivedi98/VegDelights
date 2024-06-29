'use client';

import React from 'react';

const Order = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-black text-center font-bold mb-4">Order Food</h1>
      <iframe 
        className="border rounded border-black"
        src="https://docs.google.com/forms/d/e/1FAIpQLSezYBaX5rMH4aHc2Ti51qAMTkTnaAh1ldQx3Qbh8Jb0IiPcog/viewform?embedded=true" 
        width="100%" 
        height="1000" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
        Loading…
      </iframe>
    </div>
  );
};

export default Order;
