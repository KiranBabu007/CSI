import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [{ path: "", element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddemElements = document.querySelectorAll(".hidden");
hiddemElements.forEach((element) => {
  observer.observe(element);
});

export default App;
