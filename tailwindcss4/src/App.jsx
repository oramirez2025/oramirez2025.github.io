import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Industry from "./pages/Industry";

const router = createHashRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/industry",
    element: <Industry />,
  },
  {
    path: "/projects",
    element: <Projects />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
