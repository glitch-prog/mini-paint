import React from 'react';

export function CanvasGalleryCardView({ us }: any) {
  return (
    <div key={us.uuid} style={{ border: '1px solid #000' }}>
      <>
        <p>{us.user}</p>
        <img src={us.img} alt='img' />
      </>
    </div>
  );
}
