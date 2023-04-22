import { BrowserRouter } from 'react-router-dom';
import { ReactNode, Suspense } from 'react';

export const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </BrowserRouter>
  );
