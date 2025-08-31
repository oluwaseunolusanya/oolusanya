export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I am <span className="text-blue-600">Oluwaseun Olusanya</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        Software engineer passionate about building reliable, user-focused applications.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}