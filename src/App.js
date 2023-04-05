import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fleet from './pages/Fleet';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Error from './pages/Error';
import Layout from './pages/Layout';
import Destinations from './pages/Destinations';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error/>,
      },
      {
        path: '/Fleet',
        element: <Fleet/>,
        errorElement: <Error/>,
      },
      {
        path: '/Schedule',
        element: <Schedule/>,
        errorElement: <Error/>,
      },
      {
        path: '/Destinations',
        element: <Destinations/>,
        errorElement: <Error/>,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App flex">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
