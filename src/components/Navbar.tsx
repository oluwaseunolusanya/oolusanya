export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 p-4 shadow-md sticky top-0 z-50 bg-white">
      <a href="#hero" className="text-gray-700 hover:text-blue-600 transition">Home</a>
      <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
      <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
      <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
    </nav>
  );
}
