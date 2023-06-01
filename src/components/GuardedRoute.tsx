import { Route, Navigate } from 'react-router-dom';
import { useUserInfo } from '../context/UserContext';

export const GuardedRoute = ({ path, element: Element, ...rest }: any) => {
  const { userInfo } = useUserInfo();

  if (userInfo.id !== '') {
    return <Route path={path} element={Element} {...rest} />;
  } else {
    return <Navigate to="/" replace />;
  }
};
