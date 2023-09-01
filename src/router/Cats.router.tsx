import paths from '@/constants/paths';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/components/Home'));
const Spinner = lazy(() => import('@/common/Spinner'));
const CategoryAndImage = lazy(() => import('@/components/CategoryAndImage'));

const CatsRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={paths.HOME}
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={paths.CATEGORIES}
          element={
            <Suspense fallback={<Spinner />}>
              <CategoryAndImage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default CatsRoutes;
