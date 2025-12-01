import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function AuthLink() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout: logoutAction } = useAuth();

  const handleLogout = () => {
    logoutAction();
    navigate('/');
  };

  // Si l'utilisateur est connecté
  if (isAuthenticated) {
    if (location.pathname !== '/profile') {
      return (
        <Link to="/profile" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Profil
        </Link>
      );
    }
    else {
      return (
        <button className="logout-button" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </button>
      );
    }
  }

  // Si l'utilisateur n'est pas connecté
  else if (location.pathname === '/login') {
    return (
      <Link to="/" className="main-nav-item">
        Home
      </Link>
    );
  }
  else {
    return (
      <Link to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    );
  }
}

export default AuthLink
