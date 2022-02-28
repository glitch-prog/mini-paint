import React from 'react';
import { ICard } from '../../containers/CanvasGallery/CanvasGallery.interface';
import './CanvasGallery.css';

export const CanvasGalleryCardView = ({ us }: { us: ICard }) => {
  return (
    <>
      <div className="gallery__card" key={us.uuid}>
        <img className="gallery__card__img" src={us.img} alt="img" />
        <p className="gallery__card__creator">Creator: {us.user}</p>
      </div>
    </>
  );
};
