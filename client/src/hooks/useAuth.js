import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';

export default function useAuth() {
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const doLogin = (email, password) => useDispatch(login({ email, password }));

  return {
    token,
    isAuthenticated: Boolean(token),
    loading,
    error,
    login: doLogin,
  };
}
