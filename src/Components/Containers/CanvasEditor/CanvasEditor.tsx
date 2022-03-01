import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, {  useState } from 'react';

import {  db } from '../../../config/firebase-config';
import { CanvasEditorView } from '../../views/CanvasEditor/CanvasEditor';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useGetUser } from '../../../hooks/hooks';

export const CanvasEditorContainer = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User | null>();
  const saved = useAppSelector((state) => state.img.image);

  const handleClickSetTool = (event: React.MouseEvent<HTMLLabelElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    event.target as HTMLElement;
    dispatch({ type: 'CHANGE_TOOL', payload: event.target.textContent });
  };

  const [uid, setUid] = useState<null | string>();

  const getUser = useGetUser(setUid, setUser);
  getUser;
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
  };

  const handleClickSetSaved = () => {
    const card = {};
    dispatch({ type: 'ADD_CARD', payload: card });
    createImage();
  };

  return <CanvasEditorView createImage={createImage} handleClickSetTool={handleClickSetTool} handleClickSetSaved={handleClickSetSaved} />;
};
