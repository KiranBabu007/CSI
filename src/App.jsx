import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Nav from "./components/navbar/nav";
import './index.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "", element: <Home /> },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
