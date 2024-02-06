import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import NavBar from "./Components/NavBar/NavBar";
import Team from "./pages/Team/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [{ path: "", element: <Home /> }],
    },
    {
      path: "/team",
      element: <NavBar />,
      children: [{ path: "", element: <Team /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
