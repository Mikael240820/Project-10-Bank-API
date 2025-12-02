import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/authSlice';

// Simplifie l'accès à l'état d'authentification Redux
// Fournit le token, l'état de connexion, chargement, erreur et les actions login/logout
export default function useAuth() {
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();
  const doLogin = (email, password) => dispatch(login({ email, password }));
  const doLogout = () => dispatch(logout());

  return {
    token,
    isAuthenticated: Boolean(token),
    loading,
    error,
    login: doLogin,
    logout: doLogout,
  };
}
