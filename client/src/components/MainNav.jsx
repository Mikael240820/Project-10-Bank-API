import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import AuthLink from './AuthLink';

function MainNav() {
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
        <AuthLink />
      </div>
    </nav>
  )
}

export default MainNav
