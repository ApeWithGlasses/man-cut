import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/layout/Home';
import Clients from './components/layout/Clients';
import Products from './components/layout/Products';
import Barbers from './components/layout/Barbers';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < Home />,
      errorElement: '404 NOT FOUND'
    },
    {
      path: '/clients',
      element: < Clients />
    },
    {
      path: '/products',
      element: < Products />
    },
    {
      path: '/barbers',
      element: < Barbers />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
