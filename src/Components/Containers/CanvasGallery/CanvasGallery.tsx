import React, { useState, useCallback, useEffect } from 'react';
import { collection, DocumentData, DocumentSnapshot, getDocs, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

import { db } from '../../../config/firebase-config';
import { CanvasGalleryCardView } from '../../views/CanvasGalleryCard/CanvasGalleryCard';
import { ICard } from './CanvasGallery.interface';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import './CanvasGallery.css';

export const CanvasGalleryContainer = () => {
  const isAuth = useAppSelector((state) => state.auth.auth);
  const cards = useAppSelector((state) => state.gallery['cards']);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<string>('');

  const getImages = useCallback(
    async (todosCollectionRef) => {
      const data = await getDocs(todosCollectionRef);
      dispatch({
        type: 'GET_CARDS',
        payload: data.docs.map((doc: DocumentData) => ({ ...doc.data(), id: doc.id })),
      });
    },
    [dispatch],
  );

  const handleChangeFilterUser = (event: { target: { value: string } }) => {
    setUser(event.target.value);
  };

  useEffect(() => {
    const todosCollectionRef = collection(db, 'users');
    getImages(todosCollectionRef);
  }, [getImages]);

  const filteredCards = cards.filter((card: ICard) => {
    if (card?.user?.includes(user)) {
      return card;
    } else {
      return false;
    }
  });

  return (
    <div className="gallery__main__block">
      <input className="search__input" type="text" onChange={handleChangeFilterUser} />

      {filteredCards.length > 0 ? (
        filteredCards.map((us: ICard) => <CanvasGalleryCardView key={us.id} us={us} />)
      ) : (
        <>
          <p>This user is not founded</p>
        </>
      )}
    </div>
  );
};
