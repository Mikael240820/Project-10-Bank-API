import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// Si l'utilisateur n'est pas authentifié, il est redirigé vers /login
export default function AuthRoute() {
  const token = useSelector((state) => state.auth.token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
