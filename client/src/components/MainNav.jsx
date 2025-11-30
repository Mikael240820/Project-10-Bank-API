import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import useAuth from '../hooks/useAuth';

function MainNav() {
  const navigate = useNavigate();
  const { isAuthenticated, logout: logoutAction } = useAuth();

  const handleLogout = () => {
    logoutAction();
    navigate('/');
  };
  
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <button className="logout-button" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default MainNav
