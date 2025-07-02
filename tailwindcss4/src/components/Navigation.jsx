function NavigationBar() {
  return (
    <nav className="w-screen bg-blue-200 shadow-md px-6 py-4 flex justify-between items-center rounded">
      <div className="flex space-x-6 text-lg font-medium ml-auto">
        <a
          href="/"
          className="text-white hover:text-blue-200 transition"
        >
          About 🤖
        </a>
        <a
          href="/research"
          className="text-white hover:text-blue-200 transition"
        >
          Research 🤓
        </a>
        <a
          href="/projects"
          className="text-white hover:text-blue-200 transition"
        >
          Projects 👨‍💻
        </a>
        <a
          href="/industry"
          className="text-white hover:text-blue-200 transition"
        >
          Industry 👨‍🌾
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
