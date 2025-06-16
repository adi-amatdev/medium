import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
  const token = localStorage.getItem('jwt'); 

  if (!token) {
    toast.error('You must be logged in to access this page!', { position: 'top-center' , toastId:'auth-error'});
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
