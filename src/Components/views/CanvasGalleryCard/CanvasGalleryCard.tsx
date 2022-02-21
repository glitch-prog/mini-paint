import React from 'react';
import { ICard } from '../../containers/CanvasGallery/CanvasGallery.interface';

export const CanvasGalleryCardView = ({ us }: { us: ICard }) => {
  return (
    <div key={us.uuid} style={{ border: '1px solid #000' }}>
      <p>{us.user}</p>
      <img src={us.img} alt="img" />
    </div>
  );
};
