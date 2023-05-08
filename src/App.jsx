import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < Home />,
      errorElement: '404 NOT FOUND'
    }
  ]);

  return (
    <>
      {/* https://m.media-amazon.com/images/I/717Equ0BB1L._SL1500_.jpg
      https://m.media-amazon.com/images/I/81LbwO9g3xL._SL1500_.jpg 
      https://m.media-amazon.com/images/I/614BBKtOVIL._SL1500_.jpg*/}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
