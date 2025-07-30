import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cards from './pages/Cards';
import CardSearch from './pages/CardSearch';
import Customers from './pages/Customers';
import Trips from './pages/Trips';
import Cases from './pages/Cases';
import TapHistory from './pages/TapHistory';
import CardDetails from './pages/CardDetails';
import CustomerInfo from './pages/CustomerInfo';
import TripHistory from './pages/TripHistory';
import RegisterCard from './pages/RegisterCard';
import FareDisputes from './pages/FareDisputes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { useAuth } from './context/AuthContext';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <RouterRoutes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cards"
        element={
          <ProtectedRoute>
            <Cards />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card-search"
        element={
          <ProtectedRoute>
            <CardSearch />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <Customers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/trips"
        element={
          <ProtectedRoute>
            <Trips />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cases"
        element={
          <ProtectedRoute>
            <Cases />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tap-history"
        element={
          <ProtectedRoute>
            <TapHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cards/:id"
        element={
          <ProtectedRoute>
            <CardDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customers/:id"
        element={
          <ProtectedRoute>
            <CustomerInfo />
          </ProtectedRoute>
        }
      />
      <Route
        path="/trips/:cardId"
        element={
          <ProtectedRoute>
            <TripHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register-card"
        element={
          <ProtectedRoute>
            <RegisterCard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/fare-disputes"
        element={
          <ProtectedRoute>
            <FareDisputes />
          </ProtectedRoute>
        }
      />

      {/* Catch all route - redirect to login if not authenticated, home if authenticated */}
      <Route
        path="*"
        element={
          isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />
        }
      />
    </RouterRoutes>
  );
};

export default Routes; 