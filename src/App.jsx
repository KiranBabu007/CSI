import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import './index.css';
import NavBar from "./components/Navbar/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
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
