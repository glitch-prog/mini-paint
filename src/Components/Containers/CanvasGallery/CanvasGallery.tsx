import { useState, useCallback, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase-config';
import { CanvasGalleryCardView } from '../../views/CanvasGalleryCard/CanvasGalleryCard';
import { useDispatch, useSelector } from 'react-redux';
import { ICard } from './CanvasGallery.interface';
import { useAppSelector } from '../../../hooks/hooks';

export function CanvasGalleryContainer() {
  const cards = useAppSelector((state) => state.gallery.cards);
  const dispatch = useDispatch();

  const [user, setUser] = useState<string>('');

  const getImages = useCallback(
    async (todosCollectionRef) => {
      const data = await getDocs(todosCollectionRef);

      dispatch({
        type: 'GET_CARDS',
        payload: data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })),
      });
    },
    [dispatch]
  );

  const handleChangeFilterUser = (event: { target: { value: any } }) => {
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
    <div>
      <input type='text' onChange={handleChangeFilterUser} />
      {filteredCards.map((us: ICard) => {
        return <CanvasGalleryCardView key={us.id} us={us} />;
      })}
    </div>
  );
}
