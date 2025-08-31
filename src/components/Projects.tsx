const projects = [
  {
    title: "Nurture Patch",
    description: "Childminding business website built with Next.js and Tailwind.",
    link: "https://github.com/oluwaseunolusanya/nurture-patch",
  },
  {
    title: "Gustat",
    description: "Catering business web app frontend using React and TypeScript.",
    link: "https://github.com/oluwaseunolusanya/gustat-frontend",
  },
  // Add more projects here if needed
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
