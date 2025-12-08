import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useProfile from '../hooks/useProfile';

function AuthLink() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout: logoutAction } = useAuth();
  const { firstName, lastName } = useProfile();

  const handleLogout = () => {
    logoutAction();
    navigate('/');
  };

  // Si l'utilisateur est connecté
  if (isAuthenticated) {
    return (
      <div className="main-nav-group">
        <Link to="/profile" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {firstName} {lastName}
        </Link>
        <a href="#" className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    );
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
