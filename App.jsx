import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <NavBar /> {/* Render only once */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:skill"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
