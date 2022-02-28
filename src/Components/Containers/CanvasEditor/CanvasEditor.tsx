import { onAuthStateChanged, User } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useCallback, useState } from 'react';
import { auth, db } from '../../../config/firebase-config';
import { CanvasEditorView } from '../../views/CanvasEditor/CanvasEditor';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

export function CanvasEditorContainer() {
  const dispatch = useAppDispatch();
  const tool = useAppSelector((state) => state.tool.tool);
  const cards = useAppSelector((state) => state.gallery.cards);
  const strokeSize = useAppSelector((state) => state.stroke.size);

  const [user, setUser] = useState<User | null>();
  const [saved, setSaved] = useState<string>('');

  const handleClickSetTool = (event: { target: { textContent: string } }) => {
    dispatch({ type: 'CHANGE_TOOL', payload: event.target.textContent });
  };

  let uid: string | null = null;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      setUser(user);
    }
  });

  const getImages = useCallback(
    async (todosCollectionRef) => {
      const data = await getDocs(todosCollectionRef);
      dispatch({
        type: 'GET_CARDS',
        payload: data.docs.map((doc:{data:any,id:string}) => ({ ...doc.data(), id: doc.id })),
      });
    },
    [dispatch, cards]
  );

  const createImage = async () => {
    const todosCollectionRef = collection(db, 'users');
    const dateNow = new Date().toLocaleString();
    const card = {
      img: saved,
      uuid: uid,
      user: user?.email,
      date: dateNow,
    };
    dispatch({ type: 'ADD_CARD', payload: card });
    await addDoc(todosCollectionRef, card);
    const test = getImages(todosCollectionRef);
  };

  const handleClickSetSaved = () => {
    // setSaved(canvasRef.current.toDataURL());

    const card = {};
    dispatch({ type: 'ADD_CARD', payload: card });
    createImage();
  };

  console.log(tool);
  return (
    <div>
      <CanvasEditorView
        saved={saved}
        setSaved={setSaved}
        createImage={createImage}
        handleClickSetTool={handleClickSetTool} handleClickSetSaved={handleClickSetSaved}      />
    </div>
  );
}
