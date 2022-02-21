import { onAuthStateChanged, User } from 'firebase/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { auth } from '../config/firebase-config';
import { AppDispatch, RootState } from '../store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetUser = (setUid: React.Dispatch<React.SetStateAction<string | null | undefined>>, setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>) =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
      setUser(user);
      return user;
    }
  });
