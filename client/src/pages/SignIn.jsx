import { useEffect } from 'react';
import SignInForm from '../components/SignInForm';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function SignIn() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth()

  // Redirection si déjà connecté
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  );
}

export default SignIn;
