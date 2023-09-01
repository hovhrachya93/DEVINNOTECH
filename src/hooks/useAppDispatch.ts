import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/redux/reducers/rootReducer';
import { useDispatch as useReduxDispatch } from 'react-redux';

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
