import { onAuthStateChanged, User } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useCallback, useState } from 'react';
import { auth, db } from '../../../config/firebase-config';
import { CanvasEditorView } from '../../views/CanvasEditor/CanvasEditor';
import { useDispatch, useSelector } from 'react-redux';

export function CanvasEditorContainer() {
  const dispatch = useDispatch();
  const tool = useSelector<any>((state) => state.tool.tool);
  const cards = useSelector<any>((state) => state.gallery.cards);

  const [strokeSize, setStrokeSize] = useState('10');
  const [user, setUser] = useState<User | null>();
  const [saved, setSaved] = useState('');

  const handleClickSetTool = (event: any) => {
    dispatch({ type: 'CHANGE_TOOL', payload: event.target.textContent });
  };

  let uid: string | null = null;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      setUser(user);
    }
  });

  console.log(user);

  const getImages = useCallback(
    async (todosCollectionRef) => {
      const data = await getDocs(todosCollectionRef);

      dispatch({
        type: 'GET_CARDS',
        payload: data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })),
      });

      // setImages(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
      // console.log(setImages);
      console.log(cards);
      console.log(data.docs);
    },
    [dispatch, cards]
  );

  const createImage = async () => {
    const todosCollectionRef = collection(db, 'users');
    const card = {
      img: saved,
      uuid: uid,
      user: user?.email,
    };
    dispatch({ type: 'ADD_CARD', payload: card });
    // const image = { img: saved, uuid: uid };
    await addDoc(todosCollectionRef, card);
    const test = getImages(todosCollectionRef);
  };

  console.log(tool);
  return (
    <div>
      <CanvasEditorView
        saved={saved}
        setSaved={setSaved}
        createImage={createImage}
        strokeSize={strokeSize}
        setStrokeSize={setStrokeSize}
        handleClickSetTool={handleClickSetTool}
      />
    </div>
  );
}
