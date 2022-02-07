import { useState, useCallback, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase-config';
import { CanvasGalleryCardView } from '../../views/CanvasGalleryCard/CanvasGalleryCard';
import { useDispatch, useSelector } from 'react-redux';
import { ICard } from './CanvasGallery.interface';

export function CanvasGalleryContainer() {
  const cards = useSelector<any, any>((state) => state.gallery.cards);
  const dispatch = useDispatch();

  const [user, setUser] = useState<any>('');

  // let uid: string | null = null;
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     uid = user.uid;
  //   }
  // });

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const getImages = useCallback(
    async (todosCollectionRef) => {
      const data = await getDocs(todosCollectionRef);

      dispatch({
        type: 'GET_CARDS',
        payload: data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })),
      });

      // setImages(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
      // console.log(setImages);
      // console.log(cards);
      console.log(data.docs);
    },
    [dispatch]
  );

  const handleChangeFilterUser = (event: { target: { value: any } }) => {
    setUser(event.target.value);
    console.log(user);
  };

  useEffect(() => {
    const todosCollectionRef = collection(db, 'users');
    console.log(todosCollectionRef);
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
