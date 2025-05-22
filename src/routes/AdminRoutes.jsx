import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from '../components/auth/SignUp';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/auth" element={<Navigate to="/auth/signup" replace />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
