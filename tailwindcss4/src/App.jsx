import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Documents from "./pages/Documents";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About/>,
  },
  {
    path: "/documents",
    element: <Documents/>,
  },  
  {
    path: "/hobbies",
    element: <Hobbies/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
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
