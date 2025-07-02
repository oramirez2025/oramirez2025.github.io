function NavigationBar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex space-x-6 text-l font-medium ml-auto">
        <a href="/" className="text-gray-700 hover:text-blue-500 transition">About</a>
        <a href="projects" className="text-gray-700 hover:text-blue-500 transition">Projects</a>
        <a href="documents" className="text-gray-700 hover:text-blue-500 transition">Resume/CV</a>
        <a href="hobbies" className="text-gray-700 hover:text-blue-500 transition">Hobbies</a>
      </div>
    </nav>
  );
}

export default NavigationBar;