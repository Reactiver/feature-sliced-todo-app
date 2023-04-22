import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const TestPage = lazy(() => import('./test'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={TestPage} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
