import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import SignIn from './pages/SignIn';
import MainNav from './components/MainNav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
