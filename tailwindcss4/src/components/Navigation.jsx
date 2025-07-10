import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="w-full bg-blue-200 shadow-md px-6 py-4 flex justify-between items-center rounded">
      <div className="flex space-x-6 text-lg font-medium ml-auto">
        <Link
          to="/"
          className="text-white hover:text-blue-200 transition"
        >
          About 🤖
        </Link>
        <Link
          to="/research"
          className="text-white hover:text-blue-200 transition"
        >
          Research 🤓
        </Link>
        <Link
          to="/projects"
          className="text-white hover:text-blue-200 transition"
        >
          Projects 👨‍💻
        </Link>
        <Link
          to="/industry"
          className="text-white hover:text-blue-200 transition"
        >
          Industry 👨‍🌾
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
